import { useEffect, useContext } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import BackToTop from "./components/BackToTop.jsx";
import { ThemeContext } from "./context/ThemeContext.jsx";
import { initScrollAnimations } from "./animations.js";

function App() {
  const context = useContext(ThemeContext);
  // Si el context no existe todavía, usamos 'light' por defecto
  const theme = context ? context.theme : 'light';

  useEffect(() => {
    try {
      initScrollAnimations();
    } catch (e) {
      console.warn("Las animaciones aún no están listas");
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <Navbar />
      <main>
        <section id="hero" className="fade-up"><Hero /></section>
        <section id="about" className="fade-up"><About /></section>
        <section id="projects" className="fade-up"><Projects /></section>
        <section id="contact" className="fade-up"><Contact /></section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;