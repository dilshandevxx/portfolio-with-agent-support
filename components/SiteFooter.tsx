import { Instagram, Facebook, X, Linkedin } from "lucide-react";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="py-8 px-6 md:px-12 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Link href="#" className="text-zinc-400 text-sm hover:text-white transition-colors">
          Visit my blog
        </Link>
        
        <div className="flex items-center gap-4">
           <Link href="#" className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black transition-all">
             <Instagram size={16} />
           </Link>
           <Link href="#" className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black transition-all">
             <Facebook size={16} />
           </Link>
           <Link href="#" className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black transition-all">
             <X size={16} />
           </Link>
           <Link href="#" className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black transition-all">
             <Linkedin size={16} />
           </Link>
        </div>

        <p className="text-zinc-600 text-xs">
          © 2024 Djembar Arafat. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
