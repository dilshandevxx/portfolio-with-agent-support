import { ArrowRight, Instagram, Facebook, X, Linkedin } from "lucide-react";
import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <section className="py-20 px-6 md:px-12" id="contact">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <FadeIn className="flex items-center gap-2 bg-zinc-800/50 border border-white/10 rounded-full px-4 py-1.5 text-xs font-medium text-zinc-300 mb-8">
           <span className="w-4 h-4 rounded-full bg-zinc-600 flex items-center justify-center text-[10px]">💬</span>
           Have questions or ideas? Let's talk!
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Get in Touch – Let's Connect
          </h2>
        </FadeIn>

        <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-8 bg-[#111] rounded-[2rem] p-4 lg:p-6 overflow-hidden">
          {/* Form */}
           <FadeIn delay={0.2} direction="right" className="lg:col-span-2 bg-zinc-900/50 rounded-3xl p-8 flex flex-col gap-6">
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-2">Your name</label>
                <input type="text" placeholder="What's your good name?" className="w-full bg-zinc-800/50 border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/20 transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-2">Your email</label>
                <input type="email" placeholder="What's your email address?" className="w-full bg-zinc-800/50 border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/20 transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-2">Your message</label>
                <textarea rows={4} placeholder="How can I help you?" className="w-full bg-zinc-800/50 border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/20 transition-colors resize-none" />
              </div>
              <button className="w-full bg-white text-black font-semibold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors mt-auto">
                Send message <ArrowRight size={18} />
              </button>
           </FadeIn>

           {/* 3D Visual Placeholder */}
           <FadeIn delay={0.3} direction="left" className="lg:col-span-3 min-h-[400px] bg-[#1a1a1a] rounded-3xl relative overflow-hidden group">
              <div className="absolute inset-0">
                 <img 
                   src="/contact-desk.png" 
                   alt="Isometric Workspace" 
                   className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                 />
              </div>
           </FadeIn>
        </div>

        {/* Footer Links - Inside or below? Image shows it below the form container block but typically separate. 
            However, user provided image has footer at the very bottom. I'll put it in a separate Footer component. */}
      </div>
    </section>
  );
}
