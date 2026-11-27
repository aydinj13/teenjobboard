"use cache"

import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { jobByIdQuery } from "@/sanity/lib/queries";
import { EmploymentType, Job } from "@/sanity/types/job";
import { sanityFetch } from "@/sanity/lib/live";

const EMPLOYMENT_TYPE_LABELS: Record<EmploymentType, string> = {
    "full-time": "Full time",
    "part-time": "Part time",
  };
  
  type PageProps = {
    params: Promise<{ id: string }>;
  };
  
  async function getJob(id: string): Promise<Job | null> {
    "use cache"
  
    const { data } = await sanityFetch({
      query: jobByIdQuery,
      params: { id },
    });
    return data as Job | null;
  }  

export async function JobDetails({ params }: PageProps) {
    const { id } = await params;
    const job = await getJob(id);
  
    if (!job) notFound();
  
    return (
      <div>
        <header className="mt-6 flex items-center gap-4">
          {job.companyLogoUrl && (
            <Image
              src={`${job.companyLogoUrl}?w=128&h=128&fit=crop&auto=format`}
              alt={`${job.company} logo`}
              width={64}
              height={64}
              className="size-16 shrink-0 rounded-full object-cover"
            />
          )}
          <div className="min-w-0">
            <h1 className="text-2xl font-semibold tracking-tight">{job.title}</h1>
            <p className="text-muted-foreground">
              {job.company} · {job.location} ·{" "}
              {EMPLOYMENT_TYPE_LABELS[job.employmentType]}
            </p>
          </div>
        </header>
  
        <p className="mt-8 whitespace-pre-line text-base leading-relaxed">
          {job.description}
        </p>
  
        <div className="mt-8 flex gap-3">
          <Button>
            <a href={job.link} target="_blank" rel="noopener noreferrer">
              Apply
            </a>
          </Button>
          {job.pdfUrl && (
            <Button variant="outline">
              <a href={job.pdfUrl} target="_blank" rel="noopener noreferrer">
                View PDF
              </a>
            </Button>
          )}
        </div>
      </div>
    );
  }