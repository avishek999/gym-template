import { siteConfig } from "@/app/config";
import { Dumbbell } from "lucide-react";

export function Footer() {
  const { footer, name } = siteConfig;

  return (
    <footer className="bg-zinc-900 text-white py-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                    <Dumbbell className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold tracking-tighter">{name}</span>
            </div>
            
            <div className="flex gap-8 text-sm text-zinc-400">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
        </div>
        
        <div className="text-center md:text-left text-zinc-500 text-sm">
            <p>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
