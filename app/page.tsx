
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
   <div>
      <Header />
      <Hero />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
   </div>
  );
}
