import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { return [{ url: "https://chokor.cc", changeFrequency: "monthly", priority: 1 }, { url: "https://chokor.cc/resume", changeFrequency: "monthly", priority: 0.7 }]; }
