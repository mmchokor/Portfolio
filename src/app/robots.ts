import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: "*", allow: "/" }, sitemap: "https://chokor.cc/sitemap.xml", host: "https://chokor.cc" }; }
