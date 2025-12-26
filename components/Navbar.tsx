import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-black/50 border-b border-white/5">
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold tracking-tight text-white">
          Djembar Arafat
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
        <Link href="#work" className="hover:text-white transition-colors">
          Work
        </Link>
        <Link href="#skills" className="hover:text-white transition-colors">
          Skills
        </Link>
        <Link href="#experience" className="hover:text-white transition-colors">
          Experience
        </Link>
        <Link href="#testimonials" className="hover:text-white transition-colors">
          Testimonials
        </Link>
      </div>

      <div>
        <Link
          href="#contact"
          className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-zinc-200 transition-colors"
        >
          Contact me
        </Link>
      </div>
    </nav>
  );
}
