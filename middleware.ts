export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/(dashboard|about|dairyrecord|setting|teams|weekly)/:path*"],
};