import { Board } from "@/components/Board";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-full flex-1 flex-col bg-muted/50 space-y-8">
      <Hero />
      <Board />
    </main>
  );
}
