import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 md:px-12 min-h-screen flex items-center">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-20">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-900/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-900/40 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-white">
            Shaping <span className="inline-block bg-white rounded-full w-4 h-4 md:w-6 md:h-6 align-middle mx-1" /> Ideas <br />
            into Real Projects <br />
            that Deliver Results
          </h1>
          
          <p className="text-zinc-400 text-lg max-w-lg">
            Hi, I'm Djembar, a developer based in Indonesia with a passion for code.
          </p>

          <div className="flex items-center gap-4">
            <button className="bg-white text-black flex items-center gap-2 px-6 py-3 rounded-full font-semibold hover:bg-zinc-200 transition-colors">
              See My Work <ArrowDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/5">
            <img 
              src="/hero-3d.png" 
              alt="3D Desk Setup" 
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
