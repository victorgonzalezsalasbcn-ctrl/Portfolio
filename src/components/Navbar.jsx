import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  const links = [
    { name: "Inicio", id: "hero" },
    { name: "Sobre mí", id: "about" },
    { name: "Proyectos", id: "projects" },
    { name: "Contacto", id: "contact" }
  ];

  return (
    <nav>
      <a href="#hero" className="nav-logo">
        <span>&lt;</span> Victor.dev <span>/&gt;</span>
      </a>
      
      <div className="nav-links">
        {links.map(link => (
          <a key={link.id} href={`#${link.id}`}>{link.name}</a>
        ))}
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;