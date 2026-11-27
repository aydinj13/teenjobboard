import { groq } from "next-sanity";

export const jobsQuery = groq`
  *[_type == "job"] {
    _id,
    _createdAt,
    title,
    description,
    company,
    "companyLogoUrl": companyLogo.asset->url,
    location,
    "pdfUrl": pdf.asset->url,
    link,
    employmentType,
  }
`;