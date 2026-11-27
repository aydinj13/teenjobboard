"use client";

import { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export function Banner() {
  const [isVisible, setIsVisible] = useState(true);
  if (!isVisible) return null;

  return (
    <Alert className="sticky top-0 z-50 flex items-center justify-between gap-2 rounded-none border-0 bg-red-400 px-4 py-2 text-white sm:px-6 lg:px-8">
      <AlertDescription className="flex-1 text-center text-sm text-white [&_a]:hover:text-gray-100 [&_a]:hover:no-underline">
        Do you want to list an opening? Email{" "}
        <Link
          href="mailto:ajoshi30@student.ignatius.edu"
          className="font-semibold underline underline-offset-4"
        >
          ajoshi30@student.ignatius.edu
        </Link>{" "}
        for more details.
      </AlertDescription>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        aria-label="Dismiss banner"
        onClick={() => setIsVisible(false)}
        className="size-7 shrink-0 text-white hover:bg-red-500/40 hover:text-gray-200"
      >
        <X className="size-4" />
      </Button>
    </Alert>
  );
}
