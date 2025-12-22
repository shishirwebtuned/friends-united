import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "e6ou6t4t",
  dataset: "production",
  apiVersion: "2025-01-01",
  useCdn: true,
});
