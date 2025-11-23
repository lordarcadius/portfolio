import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.0.112"],
  compress: true,
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["react-icons", "framer-motion"],
  },
};

export default nextConfig;
