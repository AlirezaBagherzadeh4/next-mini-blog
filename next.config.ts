import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placedog.net',
      },
      {
        protocol: 'https',
        hostname: 'http.dog',
      },
    ],
  },
};

export default nextConfig;
