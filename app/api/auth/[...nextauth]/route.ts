import NextAuth, { NextAuthOptions, Session } from 'next-auth';
import LineProvider from 'next-auth/providers/line';
import axios from 'axios';

const apiUrl = process.env.RAILS_API_URL;

export const authOptions : NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    LineProvider({
      clientId: process.env.LINE_CLIENT_ID ?? '',
      clientSecret: process.env.LINE_CLIENT_SECRET ?? '',
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
	  if (!account) return false; // accountがnullの場合はfalseを返す

      try {
		const apiToken = process.env.API_TOKEN;
		
		const response = await axios.post(
		  `${apiUrl}/users/authenticate`,
		    {
			  "user": {
				"line_id": account.providerAccountId,
				"name": user.name,
			  }
			},
			{
			  headers: {
					'Authorization': `Bearer ${apiToken}`,
					'Content-Type': 'application/json'
			  }
			}
		);

		// ここでレスポンスをログ出力
		console.log("Rails response data:", response.data);

		if (response.status === 200) {
		  user.railsId = response.data.user.id;
		  return true;
		} else {
		  return false;
		}
	  } catch (error) {
		return false;
	  }
	},
	async redirect({ url, baseUrl }) {
	  // サインイン後にダッシュボードにリダイレクトする
	  if (url === `${baseUrl}/`) {
		return `${baseUrl}/dashboard`;
	  }
	  return baseUrl;
	},
	async jwt({ token, user }) {
	  if (user) {
	    if (user && typeof user.railsId === 'number'){
		  token.railsId = user.railsId;
		}
	  }
	  console.log("JWT token:", token); // トークンの内容ログ出力
	  return token;
	},
	async session({ session, token }): Promise<Session> {
	  if (session.user && token.railsId) {
		session.user.railsId = token.railsId as number;
		return session;
	  }
	return session;
	}
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };