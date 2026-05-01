import type { MetadataRoute } from "next";
import { SITE } from "@/lib/data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name} — ${SITE.role}`,
    short_name: SITE.name,
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0d0d0f",
    theme_color: "#0d0d0f",
    icons: [
      { src: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
