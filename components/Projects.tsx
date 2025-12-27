import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Projects() {
  return (
    <section className="py-20 px-6 md:px-12" id="work">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Featured Project (Left) */}
          <FadeIn className="bg-[#111] rounded-3xl p-8 md:p-12 relative overflow-hidden group border border-white/5 h-full">
            <div className="relative z-10">
               <h3 className="text-2xl font-bold text-white mb-4">On-Demand Rides Made Simple with a Powerful, User-Friendly App called Ryde</h3>
               <p className="text-zinc-500 text-sm mb-8">An app built with React Native, Expo, & TailwindCSS for a fast, user-friendly experience.</p>
            </div>
            
            <div className="relative w-full h-80 md:h-[500px] mt-8 flex justify-center items-end">
                <div className="w-full h-full relative rounded-t-3xl overflow-hidden">
                    <Image 
                      src="/project-ryde.png" 
                      alt="Ryde App" 
                      fill 
                      className="object-contain object-bottom hover:scale-105 transition-transform duration-500"
                    />
                </div>
            </div>
          </FadeIn>

          {/* Secondary Projects (Right Column) */}
          <div className="flex flex-col gap-8">
            
            {/* Project 2 */}
            <FadeIn delay={0.2} className="bg-[#fff8eb] rounded-3xl p-8 relative overflow-hidden group h-[400px]">
               <div className="relative z-10 h-full flex flex-col">
                   <h3 className="text-xl font-bold text-black">The Library Management Platform</h3>
                   <div className="mt-6 flex-1 w-full bg-black rounded-xl overflow-hidden shadow-lg relative">
                      <Image 
                        src="/project-bookwise.png" 
                        alt="Book Wise" 
                        fill 
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                   </div>
               </div>
            </FadeIn>

            {/* Project 3 */}
            <FadeIn delay={0.3} className="bg-[#ffebf0] rounded-3xl p-8 relative overflow-hidden group h-[400px]">
                <div className="relative z-10 h-full flex flex-col">
                   <h3 className="text-xl font-bold text-black">YC Directory - A Startup Showcase App</h3>
                   <div className="mt-6 flex-1 w-full bg-black rounded-xl overflow-hidden shadow-lg relative">
                       <Image 
                         src="/project-yc.png" 
                         alt="YC Directory" 
                         fill 
                         className="object-cover hover:scale-105 transition-transform duration-500"
                       />
                   </div>
               </div>
            </FadeIn>

          </div>
        </div>
      </div>
    </section>
  );
}
