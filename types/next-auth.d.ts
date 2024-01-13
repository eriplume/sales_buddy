import NextAuth from "next-auth"

declare module "next-auth" {

  interface User {
    userId: number;
    image?: string;
    name?: string;
    accessToken: string;
  }

  interface Session {
    user: User;
  }
}