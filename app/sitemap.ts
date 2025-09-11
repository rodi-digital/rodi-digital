import { MetadataRoute } from "next";
import { readdirSync, statSync } from "fs";
import { join } from "path";

function getAllPageRoutes(dir: string, baseDir: string = ""): string[] {
  const routes: string[] = [];

  try {
    const items = readdirSync(dir);

    for (const item of items) {
      const fullPath = join(dir, item);
      const stat = statSync(fullPath);

      if (stat.isDirectory()) {
        // Recursively search subdirectories
        routes.push(...getAllPageRoutes(fullPath, join(baseDir, item)));
      } else if (
        item === "page.tsx" ||
        item === "page.ts" ||
        item === "page.jsx" ||
        item === "page.js"
      ) {
        // Found a page file, add the route
        routes.push(baseDir === "" ? "/" : `/${baseDir}`);
      }
    }
  } catch (error) {
    // Handle cases where directory doesn't exist or isn't readable
    console.warn(`Could not read directory ${dir}:`, error);
  }

  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rodi-digital.com";
  const appDir = join(process.cwd(), "app");

  // Get all routes by scanning the app directory
  const routes = getAllPageRoutes(appDir);

  return routes.map((route) => ({
    url: `${baseUrl}${route === "/" ? "" : route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "/" ? 1 : 0.8,
  }));
}
