"use cache"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { sanityFetch } from "@/sanity/lib/live";
import { jobsQuery } from "@/sanity/lib/queries";
import { EmploymentType, Job } from "@/sanity/types/job";

const EMPLOYMENT_TYPE_LABELS: Record<EmploymentType, string> = {
  "full-time": "Full time",
  "part-time": "Part time",
};

export async function Board() {
  const { data } = await sanityFetch({ query: jobsQuery });
  const jobs = data as Job[];

  if (jobs.length === 0) {
    return (
      <section className="px-4 pb-10 sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          No listings available right now. Check back soon.
        </p>
      </section>
    );
  }

  return (
    <section className="px-4 pb-10 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </section>
  );
}

function JobCard({ job }: { job: Job }) {
  return (
    <Card className="h-full justify-between">
      <CardHeader>
        <CardTitle className="text-base">{job.title}</CardTitle>
        <p className="text-xs text-muted-foreground">
          {EMPLOYMENT_TYPE_LABELS[job.employmentType]} | {job.location}
        </p>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center gap-2.5">
          <Image
            src={`${job.companyLogoUrl}?w=64&h=64&fit=crop&auto=format`}
            alt={`${job.company} logo`}
            width={32}
            height={32}
            className="size-8 shrink-0 rounded-full object-cover"
          />
          <div className="min-w-0">
            <p className="truncate text-sm font-medium">{job.company}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button className="flex-1">
            Learn More
        </Button>
      </CardFooter>
    </Card>
  );
}