import type { NextConfig } from "next";
import { BASE_URL } from "./metadata/data";

const nextConfig: NextConfig = {
  images: {
    domains: [BASE_URL, "divinenamesofallah.web.app"],
  },
  /* other config options */
};

export default nextConfig;
