import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Banner />
      {children}
      <Footer />
    </>
  );
}