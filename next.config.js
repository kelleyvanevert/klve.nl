/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
  // experimental: {
  //   externalDir: true,
  // },
  async redirects() {
    return [
      {
        source: "/projects",
        destination: "/code",
        permanent: true,
      },
      {
        source: "/photography/weddings",
        destination: "/photography/wedding",
        permanent: true,
      },
    ];
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
