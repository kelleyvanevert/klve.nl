const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  reactStrictMode: true,
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
  // experimental: {
  //   externalDir: true,
  // },
  eslint: {
    ignoreDuringBuilds: true,
  },
});
