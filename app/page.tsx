import { Board } from "@/components/Board";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <main className="flex min-h-full flex-1 flex-col bg-muted/50">
      <Header />
      <Board />
    </main>
  );
}
