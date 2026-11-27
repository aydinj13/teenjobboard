import Link from "next/link";

type LegalPageProps = {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
};

export function LegalPage({ title, lastUpdated, children }: LegalPageProps) {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <Link
        href="/"
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        ← Back to home
      </Link>
      <h1 className="mt-6 text-3xl font-semibold tracking-tight">{title}</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Last updated: {lastUpdated}
      </p>
      <div className="mt-8 space-y-8">{children}</div>
    </main>
  );
}

export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold">{heading}</h2>
      <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}