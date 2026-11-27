import { Suspense } from "react";
import Link from "next/link";
import { JobDetails } from "@/components/JobDetails";
import { Loader2 } from "lucide-react";

type PageProps = {
    params: Promise<{ id: string }>;
  };

export default function JobPage({ params }: PageProps) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Link
        href="/"
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        ← Back to jobs
      </Link>

      <Suspense
        fallback={
            <div
            role="status"
            aria-label="Loading job"
            className="mt-8 flex items-center text-muted-foreground"
          >
            <Loader2 className="size-4 animate-spin" />
          </div>
        }
      >
        <JobDetails params={params} />
      </Suspense>
    </main>
  );
}