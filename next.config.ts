import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export configuration for GitHub Pages
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Re-enable linting to see what errors we have
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
};

export default nextConfig;
