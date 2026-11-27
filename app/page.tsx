import { Button } from "@/components/ui/button";
import { cachedSanity } from "@/sanity/lib/live";
import { JOB_TITLES_QUERY } from "@/sanity/lib/queries";

export default async function Home() {
  const { data: jobs } = await cachedSanity({
    query: JOB_TITLES_QUERY,
    stega: false,
  });

  return (
    <main className="mx-auto flex w-full max-w-xl flex-col gap-6 px-6 py-16">
      <Button>Click me</Button>
      {jobs && Array.isArray(jobs) && jobs.length > 0 ? (
        <ul className="flex flex-col gap-2">
          {jobs.map((job) => (
            <li key={job._id} className="text-sm text-foreground">
              {job.title}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-muted-foreground">No jobs yet.</p>
      )}
    </main>
  );
}
