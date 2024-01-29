export { default } from "next-auth/middleware";

export const config = { matcher: ["/adminPanel/:path*", "/staffPanel/:path*"] };
