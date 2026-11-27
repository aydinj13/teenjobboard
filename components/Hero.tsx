import Image from "next/image";

export function Hero() {
  return (
    <header className="relative isolate flex min-h-[60vh] items-center justify-center overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <Image
        src="/hero.jpg"
        alt="Hero image"
        fill
        priority
        sizes="100vw"
        className="-z-20 scale-110 object-cover blur-xs"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-black/50" />

      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Teen Job Board
        </h1>
        <p className="mt-4 text-lg text-white/90 sm:text-2xl">
          Helping Students in the{" "}
          <span className="font-semibold text-red-400">Northeast Ohio</span>{" "}
          region find their next paycheck, guaranteed.
        </p>
      </div>
    </header>
  );
}