import { siteConfig } from "@/app/config";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export function Trust() {
  const { trust } = siteConfig;

  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
                <Badge variant="outline" className="mb-4 text-red-600 border-red-600 px-3 py-1">Community & Expertise</Badge>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">{trust.title}</h2>
                <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">{trust.description}</p>
                
                <div className="grid grid-cols-3 gap-6">
                    {trust.stats.map((stat, i) => (
                        <div key={i} className="text-center md:text-left">
                            <h4 className="text-3xl font-black text-red-600">{stat.value}</h4>
                            <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* Visual element or image grid could go here, for now using trainer cards directly in the layout if preferred, or separate */}
        </div>

        <Separator className="my-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {trust.trainers.map((trainer, i) => (
                <div key={i} className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="aspect-[4/3] bg-zinc-200 relative overflow-hidden">
                        <div 
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                            style={{ backgroundImage: `url('${trainer.image}')` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90" />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                        <h3 className="text-2xl font-bold mb-1">{trainer.name}</h3>
                        <p className="text-red-400 font-medium mb-3">{trainer.role}</p>
                        <p className="text-zinc-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                            {trainer.bio}
                        </p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
