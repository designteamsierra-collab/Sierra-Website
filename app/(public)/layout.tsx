import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/ui/Footer";
import { RevealObserver } from "@/components/ui/RevealObserver";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RevealObserver />
      <Nav />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
