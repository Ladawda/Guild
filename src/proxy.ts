import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

// PostHog reverse proxy handler
function handlePostHogProxy(request: NextRequest) {
  const hostname = "us.i.posthog.com";
  const requestHeaders = new Headers(request.headers);

  // Remove oversized headers that cause 431 errors in dev
  requestHeaders.delete("cookie");
  requestHeaders.set("host", hostname);

  const url = request.nextUrl.clone();
  url.protocol = "https";
  url.hostname = hostname;
  url.port = "443";
  url.pathname = url.pathname.replace(/^\/ingest/, "");

  return NextResponse.rewrite(url, {
    headers: requestHeaders,
  });
}

export async function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // PostHog reverse proxy
  if (path.startsWith("/ingest")) {
    return handlePostHogProxy(request);
  }

  // Supabase session refresh for all other matched routes
  const { user, response } = await updateSession(request);

  // Admin route protection
  if (path.startsWith("/admin")) {
    if (path === "/admin/login") {
      // Already logged in? Skip to dashboard
      if (user) {
        return NextResponse.redirect(new URL("/admin", request.url));
      }
      return response;
    }

    // Not logged in? Redirect to login
    if (!user) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  return response;
}

export const config = {
  matcher: ["/ingest/:path*", "/admin/:path*"],
};
