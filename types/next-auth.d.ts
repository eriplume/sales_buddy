import NextAuth from "next-auth"

declare module "next-auth" {

  interface User {
    railsId?: number;
    image?: string;
    name?: string;
  }

  interface Session {
    user: User;
  }
}