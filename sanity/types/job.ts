export type EmploymentType = "full-time" | "part-time";

export type Job = {
  _id: string;
  _createdAt: string;
  title: string;
  description: string;
  company: string;
  companyLogoUrl: string;
  location: string;
  pdfUrl: string | null;
  link: string;
  employmentType: EmploymentType;
};