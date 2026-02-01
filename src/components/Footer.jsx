import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0f172a",
        textAlign: "center",
        padding: "40px 20px",
        borderTop: "1px solid #1e293b",
        color: "#94a3b8",
      }}
    >
      <p>© {new Date().getFullYear()} victorgonzalezsalas.dev. Todos los derechos reservados.</p>
      <div style={{ marginTop: "10px", display: "flex", justifyContent: "center", gap: "15px" }}>
        <a href="https://github.com/victorgonzalezsalasbcn-ctrl" target="_blank" rel="noopener noreferrer" style={{ color: "#38bdf8" }}>
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/víctor-gonzález-salas-07a941163/" target="_blank" rel="noopener noreferrer" style={{ color: "#38bdf8" }}>
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;