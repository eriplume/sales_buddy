import { NextAuthOptions, Session } from 'next-auth';
import LineProvider from 'next-auth/providers/line';
import axios from 'axios';

const apiUrl = process.env.RAILS_API_URL;

export const options : NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    LineProvider({
      clientId: process.env.LINE_CLIENT_ID ?? '',
      clientSecret: process.env.LINE_CLIENT_SECRET ?? '',
    }),
  ],
  pages: {
	signIn: '/login',
  },
  callbacks: {
    async signIn({ user, account }) {
	  if (!account) return false;

      try {
		const apiToken = process.env.API_TOKEN;
		
		const response = await axios.post(
		  `${apiUrl}/users/authenticate`,
		    {
			  "user": {
				"line_id": account.providerAccountId,
				"name": user.name,
				"image_url": user.image,
			  }
			},
			{
			  headers: {
					'Authorization': `Bearer ${apiToken}`,
					'Content-Type': 'application/json'
			  }
			}
		);
		console.log("Rails response data:", response.data);

		if (response.status === 200) {
		  user.userId = response.data.user.user_id;
		  user.accessToken = response.data.user.token;
		  return true;
		} else {
		  return false;
		}
	  } catch (error) {
		return false;
	  }
	  
	},
	async jwt({ token, account, user }) {
	  if (account && user) {
		token.accessToken = user.accessToken;
		token.userId = user.userId;
	  }
	  console.log("JWT token:", token);
	  return token;
	},
	async session({ session, token }): Promise<Session> {
	  if (session.user && token.userId) {
		return session;
	  }
	  return session;
	}
  },
};