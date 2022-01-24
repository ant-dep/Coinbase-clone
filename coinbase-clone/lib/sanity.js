import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "0qr8ejgj",
  dataset: "production",
  apiVersion: "2021-03-25",
  token: process.env.SANITY_CLIENT_TOKEN,
  useCdn: false,
});
