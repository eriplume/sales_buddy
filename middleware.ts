export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/(dashboard|about|dairyrecord|setting|team|weekly|admin)/:path*"],
};