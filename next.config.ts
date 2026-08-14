import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "**/lib/icons/*.svg": {
        loaders: [{ loader: "@svgr/webpack", options: { svgo: false } }],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
