import schemas from "@/sanity/schemas";
import { defineConfig } from "sanity";
import { visionTool } from "@sanity/vision";
import { structureTool } from "sanity/structure";

const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: "production",
  title: process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE!,
  apiVersion: "2023-03-09",
  basePath: "/admin",
  plugins: [structureTool(), visionTool()],
  schema: { types: schemas },
  useCdn: false,
});

export default config;
