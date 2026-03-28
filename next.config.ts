import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname,
  experimental: {
    optimizePackageImports: ["framer-motion", "clsx", "tailwind-merge"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ridgelinepestdefence.ca",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        source: "/images/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/_next/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      /* ── Block direct access to internal routes ────────────
         Permanently redirect internal paths to canonical URLs
         to prevent duplicate URLs (processed before rewrites) */
      { source: "/locations/:city", destination: "/pest-control-:city", permanent: true },
      { source: "/pest-city/ant-control/:city", destination: "/ant-control-:city", permanent: true },
      { source: "/pest-city/rodent-control/:city", destination: "/rodent-control-:city", permanent: true },
      { source: "/pest-city/squirrel-removal/:city", destination: "/squirrel-removal-:city", permanent: true },
      { source: "/pest-city/bed-bug-control/:city", destination: "/bed-bug-control-:city", permanent: true },
      { source: "/pest-city/cockroach-control/:city", destination: "/cockroach-control-:city", permanent: true },
      { source: "/pest-city/wasp-control/:city", destination: "/wasp-control-:city", permanent: true },
      { source: "/pest-city/hornet-control/:city", destination: "/hornet-control-:city", permanent: true },
      { source: "/pest-city/commercial-wasp-control/:city", destination: "/commercial-wasp-control-:city", permanent: true },
    ];
  },
  async rewrites() {
    return [
      /* ── Location pages ─────────────────────────────────────
         Maps public URLs like /pest-control-toronto to the
         internal route /locations/toronto                       */
      { source: "/pest-control-:city", destination: "/locations/:city" },

      /* ── Pest-by-city SEO pages ────────────────────────────
         Maps public URLs like /ant-control-toronto to the
         internal route /pest-city/ant-control/toronto          */
      { source: "/ant-control-:city", destination: "/pest-city/ant-control/:city" },
      { source: "/rodent-control-:city", destination: "/pest-city/rodent-control/:city" },
      { source: "/squirrel-removal-:city", destination: "/pest-city/squirrel-removal/:city" },
      { source: "/bed-bug-control-:city", destination: "/pest-city/bed-bug-control/:city" },
      { source: "/cockroach-control-:city", destination: "/pest-city/cockroach-control/:city" },
      { source: "/wasp-control-:city", destination: "/pest-city/wasp-control/:city" },
      { source: "/hornet-control-:city", destination: "/pest-city/hornet-control/:city" },
      { source: "/commercial-wasp-control-:city", destination: "/pest-city/commercial-wasp-control/:city" },
    ];
  },
};

export default nextConfig;
