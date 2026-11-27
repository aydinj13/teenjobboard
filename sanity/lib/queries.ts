import { defineQuery } from "next-sanity";

export const JOB_TITLES_QUERY = defineQuery(/* groq */ `
  *[_type == "jobs" && defined(title)] | order(title asc) {
    _id,
    title
  }
`);
