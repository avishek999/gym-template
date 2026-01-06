import { siteConfig } from "@/app/config";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function Pricing() {
  const { pricing } = siteConfig;

  return (
    <section id="pricing" className="py-24 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">{pricing.title}</h2>
            <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.tiers.map((tier, i) => (
                <Card 
                    key={i} 
                    className={`relative flex flex-col ${tier.popular ? 'border-red-600 shadow-2xl scale-105 z-10' : 'border-zinc-200 shadow-lg hover:shadow-xl'}`}
                >
                    {tier.popular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md uppercase tracking-wider">
                            Most Popular
                        </div>
                    )}
                    <CardHeader className="text-center pb-2">
                        <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                        <CardDescription className="mt-2">{tier.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col items-center">
                        <div className="my-6 text-center">
                            <span className="text-4xl font-extrabold">{tier.price}</span>
                            <span className="text-zinc-500">{tier.period}</span>
                        </div>
                        <ul className="space-y-3 w-full max-w-[240px] mb-6">
                            {tier.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center text-sm text-zinc-600 dark:text-zinc-300">
                                    <CheckCircle2 className="w-5 h-5 text-red-600 mr-2 flex-shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <Link href={siteConfig.hero.ctaLink} className="w-full">
                            <Button 
                                className="w-full py-6 font-bold text-lg" 
                                variant={tier.popular ? "default" : "outline"}
                            >
                                {tier.cta}
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
