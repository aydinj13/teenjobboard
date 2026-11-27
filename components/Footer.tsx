import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-muted px-4 py-6 text-muted-foreground sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm sm:flex-row">
        <p>© 2026 Teen Job Board. All rights reserved.</p>

        <nav aria-label="Footer" className="flex items-center gap-4">
          <Link
            href="/studio"
            tabIndex={-1}
            aria-hidden
            className="text-muted hover:text-muted"
          >
            Studio
          </Link>
          <Link
            href="/privacy"
            className="underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            Terms of Service
          </Link>
        </nav>
      </div>
    </footer>
  );
}