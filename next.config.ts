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
        source: '/cdn/:path*',
        destination: 'https://apollopeptidesciences.com/wp-content/uploads/:path*',
      },
    ];
  },
};

export default nextConfig;
