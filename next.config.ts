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
  async redirects() {
    return [
      {
        source: '/phio/:path*',
        destination: '/products',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
