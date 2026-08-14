import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { OUTFITS } from "@/lib/content/outfits";
import { PROJECTS } from "@/lib/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, priority: 1 },
    { url: `${SITE_URL}/projects`, priority: 0.9 },
    { url: `${SITE_URL}/inventory`, priority: 0.7 },
    { url: `${SITE_URL}/about`, priority: 0.8 },
    ...OUTFITS.map((outfit) => ({
      url: `${SITE_URL}/career/${outfit.era}`,
      priority: 0.8,
    })),
    ...PROJECTS.map((project) => ({
      url: `${SITE_URL}/projects/${project.slug}`,
      priority: 0.7,
    })),
  ];
}
