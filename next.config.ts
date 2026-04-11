import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/phio/:path*',
        destination: 'https://phiogen.is/images/products/:path*',
      },
    ];
  },
};

export default nextConfig;
