import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/ai-slides-landing',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
