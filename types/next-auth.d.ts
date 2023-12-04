import NextAuth from "next-auth"

declare module "next-auth" {

  interface User {
    railsId?: number;
  }

  interface Session {
    user: {
        railsId: number
    }
  }
}