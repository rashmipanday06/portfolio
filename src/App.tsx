import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import About from "./sections/About/About";
import Contact from "./sections/Contact/Contact";
import Experience from "./sections/Experience/Experience";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Services from "./sections/Services/Services";
import Skills from "./sections/Skills/Skills";


export default function App() {
  return (
    <div className="min-h-screen">
      <div className="animated-background" aria-hidden="true">
        <div className="bg-dots" />
      </div>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}