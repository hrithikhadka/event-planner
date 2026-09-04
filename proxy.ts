import { NextRequest } from "next/server";

export async function proxy(req: NextRequest) {
  const { auth } = await import("@/lib/auth/server");
  return auth.middleware({ loginUrl: "/auth/sign-in" })(req);
}

export const config = {
  matcher: ["/dashboard/:path*", "/account/:path*", "/settings/:path*"],
};
