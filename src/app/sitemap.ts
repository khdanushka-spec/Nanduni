import type { MetadataRoute } from "next";
import { siteConfig, navItems } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", ...navItems.map((item) => item.href)];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));
}
