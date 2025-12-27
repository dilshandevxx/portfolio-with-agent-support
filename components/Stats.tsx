import FadeIn from "./FadeIn";

export default function Stats() {
  const stats = [
    { value: "15+", label: "Years of Experience" },
    { value: "200+", label: "Satisfied Clients" },
    { value: "108+", label: "Completed Projects" },
    { value: "90%", label: "Client Retention Rate" },
  ];

  return (
    <section className="py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <FadeIn
            key={index}
            delay={index * 0.1}
            className="bg-[#111] border border-white/5 p-8 rounded-2xl hover:border-white/10 transition-colors"
          >
            <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
            <p className="text-zinc-500 text-sm font-medium">{stat.label}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
