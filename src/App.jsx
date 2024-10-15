import { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

const App = () => {
  useEffect(() =>{
    window.scrollTo(0,0);

    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, []);

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 min-h-screen w-full bg-slate-950">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About id="about"/>
        <Technologies id="technologies"/>
        <Projects id="projects"/>
        <Contact id="contact"/>
      </div>
    </div>
  );
};

export default App;
