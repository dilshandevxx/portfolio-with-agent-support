import Image from 'next/image';

const logos = [
  { name: 'Vercel', width: 100 },
  { name: 'NVIDIA', width: 120 },
  { name: 'Appwrite', width: 120 },
  { name: 'Adobe', width: 100 },
  { name: 'Hostinger', width: 120 },
  { name: 'Docker', width: 100 },
  { name: 'Adidas', width: 90 },
];

export default function FooterLogos() {
  return (
    <section className="py-12 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12 opacity-50">
           {logos.map((logo) => (
             <div key={logo.name} className="flex items-center gap-2">
                {/* Placeholder Text for Logos since we don't have SVGs yet */}
                <span className="text-xl font-bold font-sans tracking-wide text-white uppercase">{logo.name}</span>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
