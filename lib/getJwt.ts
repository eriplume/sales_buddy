import { getToken } from "next-auth/jwt";
import { NextRequest } from 'next/server'

const secret = process.env.NEXTAUTH_SECRET;

export async function getJwt(req: NextRequest): Promise<{ accessToken: string, userId: number }> {
  const token = await getToken({ req, secret });

  if (token && typeof token.accessToken === 'string' && typeof token.userId === 'number' ) {
    return {
      accessToken: token.accessToken,
      userId: token.userId,
    };
  } else {
    throw new Error("JWT not found.");
  }
}
