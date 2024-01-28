export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/(dashboard|about|dairyrecord|setting|teams|dm_temas|weekly|admin)/:path*"],
};