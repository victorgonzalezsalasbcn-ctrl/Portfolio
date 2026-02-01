import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";
import { Sun, Moon } from "lucide-react"; 

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
        
        {/* Botón actualizado con iconos vectoriales */}
        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          aria-label="Cambiar tema"
        >
          {theme === "dark" ? (
            <Sun size={20} strokeWidth={2.5} />
          ) : (
            <Moon size={20} strokeWidth={2.5} />
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;