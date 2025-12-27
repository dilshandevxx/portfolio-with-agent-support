import { Atom, Smartphone, Database, Box, GitMerge } from "lucide-react";
import FadeIn from "./FadeIn";

const skills = [
  { icon: Atom, label: "React Developer", color: "text-cyan-400" },
  { icon: Smartphone, label: "Mobile App Developer", color: "text-blue-500" },
  { icon: Database, label: "Backend Developer", color: "text-green-500" },
  { icon: Box, label: "Interactive Developer", color: "text-white" },
  { icon: GitMerge, label: "Project Manager", color: "text-red-500" },
];

export default function Skills() {
  return (
    <section className="py-24 px-6 md:px-12" id="skills">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <FadeIn delay={0.1} className="flex items-center gap-2 bg-zinc-800/50 border border-white/10 rounded-full px-4 py-1.5 text-xs font-medium text-zinc-300 mb-8">
           <span className="w-2 h-2 rounded-full bg-yellow-500" />
           What I Bring to the Table
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            How I Can Contribute & My Key Skills
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
          {skills.map((skill, index) => (
            <FadeIn
              key={index}
              delay={index * 0.1}
              className="bg-[#111] border border-white/5 rounded-[3rem] p-8 flex flex-col items-center justify-center gap-6 min-h-[220px] hover:border-white/20 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className={`p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors ${skill.color}`}>
                <skill.icon size={40} strokeWidth={1.5} />
              </div>
              <p className="text-center font-semibold text-lg leading-tight text-zinc-300 max-w-[120px]">
                {skill.label}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
