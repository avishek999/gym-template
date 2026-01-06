import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Trust } from "@/components/sections/Trust";
import { Pricing } from "@/components/sections/Pricing";
import { Location } from "@/components/sections/Location";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Trust />
      <Pricing />
      <Location />
      <Footer />
    </main>
  );
}
