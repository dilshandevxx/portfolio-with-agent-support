import Image from "next/image";
import { Star } from "lucide-react";
import FadeIn from "./FadeIn";

const testimonials = [
  {
    name: "Esther Howard",
    handle: "@estherhoward",
    text: "I can't say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    name: "Guy Hawkins",
    handle: "@guyhawkins",
    text: "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out.",
  },
  {
    name: "Wade Warren",
    handle: "@wadewarren",
    text: "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    name: "Floyd Miles",
    handle: "@floydmiles",
    text: "Adrian's expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He's a true professional!",
  },
  {
    name: "Marvin McKinney",
    handle: "@marvinmckinney",
    text: "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that's both modern and easy to navigate. Fantastic work overall!",
  },
  {
    name: "Albert Flores",
    handle: "@albertflores",
    text: "Adrian was great to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-12" id="testimonials">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <FadeIn className="flex items-center gap-2 bg-zinc-800/50 border border-white/10 rounded-full px-4 py-1.5 text-xs font-medium text-zinc-300 mb-8">
           <span className="w-2 h-2 rounded-full bg-yellow-500" />
           Customer feedback highlights
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            What People Say About Me?
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <FadeIn key={index} delay={index * 0.1} className="bg-[#111] border border-white/5 p-8 rounded-2xl hover:border-white/10 transition-colors">
               <div className="flex gap-1 mb-6">
                 {[1, 2, 3, 4, 5].map((s) => (
                   <Star key={s} size={16} className="text-white fill-white" />
                 ))}
               </div>
               <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                 {t.text}
               </p>
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-zinc-800 shrink-0" />
                 <div>
                   <h4 className="text-white font-semibold text-sm">{t.name}</h4>
                   <p className="text-zinc-500 text-xs">{t.handle}</p>
                 </div>
               </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
