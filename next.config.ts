import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  // PostHog reverse proxy is handled via middleware (src/middleware.ts)
  // Middleware approach avoids 431 "Request Header Fields Too Large" errors
  // that occur with rewrites in local dev due to oversized cookies/headers
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
