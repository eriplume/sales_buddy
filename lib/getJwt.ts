import { getToken } from "next-auth/jwt";
import { type NextRequest } from 'next/server'

const secret = process.env.NEXTAUTH_SECRET;

export async function getJwt(req: NextRequest): Promise<string> {
  const token = await getToken({ req, secret });

  if (token && typeof token.accessToken === 'string') {
    return token.accessToken;
  } else {
    throw new Error("JWT not found.");
  }
}
