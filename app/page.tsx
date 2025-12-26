import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import FooterLogos from "@/components/FooterLogos";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/20">
      <Navbar />
      <Hero />
      <Stats />
      <Projects />
      <FooterLogos />
      <Skills />
      <Testimonials />
      <Contact />
      <SiteFooter />
    </main>
  );
}
