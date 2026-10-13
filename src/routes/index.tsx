import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/portfolio/pages/Home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tokaa Raafat | Junior Data Analyst & Data Science Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Tokaa Raafat — Junior Data Analyst with a Software Engineering degree, focused on Data Analytics and Data Science.",
      },
      { name: "author", content: "Tokaa Raafat" },
      {
        property: "og:title",
        content: "Tokaa Raafat | Junior Data Analyst & Data Science Portfolio",
      },
      {
        property: "og:description",
        content:
          "Explore projects, skills, and experience from Tokaa Raafat — a Junior Data Analyst building practical expertise in Data Analytics and Data Science.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Tokaa Raafat | Junior Data Analyst & Data Science Portfolio",
      },
      {
        name: "twitter:description",
        content:
          "Junior Data Analyst with a Software Engineering background, focused on Data Analytics and Data Science.",
      },
    ],
  }),
  component: Home,
});
