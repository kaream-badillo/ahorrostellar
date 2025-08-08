import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/voto-ahorro',
        destination: '/stake',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
