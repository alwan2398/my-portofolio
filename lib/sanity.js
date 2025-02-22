import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "rhhztf4c",
  dataset: "production",
  apiVersion: "2025-02-20",
  useCdn: true,
  token: process.env.SANITY_TOKEN_API_VIEWER,
});
export default client;
export const urlFor = (source) => imageUrlBuilder(client).image(source);
