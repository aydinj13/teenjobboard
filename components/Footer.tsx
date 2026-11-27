import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto bg-red-400 px-4 py-6 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm sm:flex-row">
        <p>© 2026 Teen Job Board. All rights reserved.</p>

        <nav aria-label="Footer" className="flex items-center gap-4">
          <Link
            href="/studio"
            tabIndex={-1}
            aria-hidden
            className="text-red-400 hover:text-red-400"
          >
            Studio
          </Link>
          <Link
            href="/privacy"
            className="underline-offset-4 hover:underline"
          >
            Privacy Policy
          </Link>
          <Link href="/terms" className="underline-offset-4 hover:underline">
            Terms of Service
          </Link>
        </nav>
      </div>
    </footer>
  );
}