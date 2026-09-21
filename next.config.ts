import type { NextConfig } from "next";
const nextConfig: NextConfig = { agentRules: false, async redirects() { return [
  { source: "/about", destination: "/#about", permanent: true },
  { source: "/contact", destination: "/#contact", permanent: true },
]; } };
export default nextConfig;
