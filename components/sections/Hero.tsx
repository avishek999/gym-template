import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/app/config";

export function Hero() {
  const { headline, subtext, cta, ctaLink } = siteConfig.hero;

  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center bg-zinc-900 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10" />
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('${siteConfig.hero.image}')` }} 
      />
      
      {/* Content */}
      <div className="relative z-20 px-4 md:px-6 text-center max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight uppercase transform transition-all hover:scale-105 duration-500">
          {headline}
        </h1>
        <p className="text-lg md:text-xl text-zinc-200 max-w-2xl mx-auto leading-relaxed">
          {subtext}
        </p>
        <div className="pt-4">
          <Link href={ctaLink}>
             <Button size="lg" className="text-lg px-8 py-6 rounded-full font-bold shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:shadow-[0_0_25px_rgba(255,255,255,0.7)] transition-all">
                {cta}
             </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
