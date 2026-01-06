import { siteConfig } from "@/app/config";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, MessageSquare } from "lucide-react";
import Link from "next/link";

export function Location() {
  const { location, contact } = siteConfig;

  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Contact Info */}
            <div>
                <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">{location.title}</h2>
                <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-10">{location.description}</p>
                
                <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                        <MapPin className="w-6 h-6 text-red-600 mt-1" />
                        <span className="text-lg font-medium">{contact.address}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Phone className="w-6 h-6 text-red-600" />
                        <a href={`tel:${contact.phone}`} className="text-lg font-medium hover:text-red-600">{contact.phone}</a>
                    </div>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                    <Link href={contact.whatsapp} target="_blank">
                        <Button className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white gap-2 text-lg py-6 shadow-lg shadow-green-500/20">
                            <MessageSquare className="w-5 h-5" />
                            Chat on WhatsApp
                        </Button>
                    </Link>
                    <a href={`tel:${contact.phone}`}>
                        <Button variant="outline" className="w-full sm:w-auto gap-2 text-lg py-6 border-zinc-300 dark:border-zinc-700">
                           <Phone className="w-5 h-5" />
                           Call Us Now
                        </Button>
                    </a>
                </div>
            </div>

            {/* Map Embed */}
            <div className="h-[400px] w-full bg-zinc-100 rounded-3xl overflow-hidden shadow-2xl relative">
                <iframe 
                    src={location.mapEmbed} 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    title="Gym Location"
                    className="absolute inset-0 grayscale contrast-125 opacity-90 hover:grayscale-0 transition-all duration-500"
                />
            </div>
        </div>
      </div>
    </section>
  );
}
