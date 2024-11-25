import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/wikipedia/commons/**',
        search: '',
      },
    ],
  },
  experimental: {
    dynamicIO: true,
  },
}

export default nextConfig;
