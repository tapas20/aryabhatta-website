import type { MetadataRoute } from "next";

const SITE_URL = "https://www.alsyedgroup.net";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" as const },
    {
      path: "/construction",
      priority: 0.95,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/demolition",
      priority: 0.95,
      changeFrequency: "weekly" as const,
    },
    { path: "/expertise", priority: 0.85, changeFrequency: "monthly" as const },
    {
      path: "/rental-equipment",
      priority: 0.85,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/rigging-and-lifting",
      priority: 0.85,
      changeFrequency: "monthly" as const,
    },
    { path: "/logistic", priority: 0.8, changeFrequency: "monthly" as const },
    {
      path: "/plant-maintenance",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/re-routing",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/technical-solutions",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    { path: "/qhse", priority: 0.75, changeFrequency: "monthly" as const },
    { path: "/projects", priority: 0.85, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/careers", priority: 0.7, changeFrequency: "weekly" as const },
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
