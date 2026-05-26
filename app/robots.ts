import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [],
      },
    ],
    sitemap: "https://reliabletravelnotary.com/sitemap.xml",
    host: "https://reliabletravelnotary.com",
  };
}
