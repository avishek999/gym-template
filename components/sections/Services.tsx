import { siteConfig } from "@/app/config";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Services() {
  const { services } = siteConfig;

  return (
    <section id="services" className="py-20 px-4 md:px-6 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto">
         <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wide text-zinc-900 dark:text-white mb-4">
              Our Services
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto rounded-full" />
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="border-none shadow-lg hover:-translate-y-2 transition-transform duration-300">
                  <CardHeader className="flex flex-col items-center pb-2">
                    <div className="w-16 h-16 rounded-2xl bg-red-600 text-white flex items-center justify-center mb-4 shadow-md">
                      <Icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-xl font-bold uppercase tracking-tight text-center">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-zinc-600 dark:text-zinc-400">
                    <p>{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
         </div>
      </div>
    </section>
  );
}
