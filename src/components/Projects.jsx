import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext.jsx";
import projects from "../data/projects.js";

const techSet = new Set();
projects.forEach((p) => p.technologies.forEach((t) => techSet.add(t)));
const technologies = ["All", ...Array.from(techSet)];

function Projects() {
  const { theme } = useContext(ThemeContext);
  const [activeTech, setActiveTech] = useState("All");

  const filteredProjects =
    activeTech === "All"
      ? projects
      : projects.filter((p) => p.technologies.includes(activeTech));

  return (
    <motion.section
      id="projects"
      style={{
        padding: "120px 40px",
        minHeight: "80vh",
        textAlign: "center",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2
        style={{
          marginBottom: "10px",
          color: theme === "dark" ? "#f1f5f9" : "#1e293b",
          fontSize: "2.2rem",
          fontWeight: "700",
        }}
      >
        Proyectos
      </h2>

      <p
        style={{
          opacity: 0.7,
          marginBottom: "40px",
          maxWidth: "700px",
          marginInline: "auto",
          fontSize: "1rem",
        }}
      >
        Una selección de proyectos que representan mi evolución como desarrollador.
      </p>

      {/* Filtros */}
      <div
        style={{
          marginBottom: "40px",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        {technologies.map((tech) => (
          <button
            key={tech}
            onClick={() => setActiveTech(tech)}
            style={{
              padding: "6px 14px",
              borderRadius: "6px",
              border: activeTech === tech ? "2px solid #38bdf8" : "1px solid #94a3b8",
              backgroundColor: activeTech === tech ? "#38bdf8" : "transparent",
              color:
                activeTech === tech
                  ? "#0f172a"
                  : theme === "dark"
                  ? "#f1f5f9"
                  : "#1e293b",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "all 0.3s",
            }}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "40px",
        }}
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 12px 28px rgba(0,0,0,0.25)",
              }}
              style={{
                backgroundColor: theme === "dark" ? "#1e293b" : "#ffffff",
                color: theme === "dark" ? "#f1f5f9" : "#1e293b",
                borderRadius: "16px",
                overflow: "hidden",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                minHeight: "100%",
              }}
            >
              {/* Imagen */}
              {project.image && (
                <div
                  style={{
                    width: "100%",
                    height: "220px",
                    overflow: "hidden",
                    backgroundColor: "#000",
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top", // 🔥 SOLUCIÓN: recorte desde arriba
                    }}
                  />
                </div>
              )}

              {/* Contenido */}
              <div style={{ padding: "22px", flexGrow: 1 }}>
                <h3
                  style={{
                    marginBottom: "10px",
                    fontSize: "1.4rem",
                    fontWeight: "600",
                  }}
                >
                  {project.title}
                </h3>

                <p style={{ marginBottom: "10px", opacity: 0.9 }}>
                  {project.description}
                </p>

                {project.impact && (
                  <p
                    style={{
                      marginBottom: "12px",
                      fontStyle: "italic",
                      opacity: 0.8,
                    }}
                  >
                    {project.impact}
                  </p>
                )}

                {/* Lista mejorada */}
                {project.details && (
                  <ul
                    style={{
                      marginBottom: "16px",
                      paddingLeft: "0",
                      listStylePosition: "inside",
                      textAlign: "left",
                      opacity: 0.85,
                      lineHeight: "1.45",
                      fontSize: "0.9rem",
                    }}
                  >
                    {project.details.map((d, i) => (
                      <li key={i} style={{ marginBottom: "6px" }}>
                        {d}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tecnologías */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    marginBottom: "16px",
                  }}
                >
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      style={{
                        backgroundColor: theme === "dark" ? "#0f172a" : "#e2e8f0",
                        padding: "4px 8px",
                        borderRadius: "6px",
                        fontSize: "0.8rem",
                        border: "1px solid #38bdf8",
                        color: "#38bdf8",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Botones */}
                <div style={{ display: "flex", gap: "10px" }}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#38bdf8",
                        border: "1px solid #38bdf8",
                        padding: "6px 12px",
                        borderRadius: "6px",
                        fontSize: "0.85rem",
                        textDecoration: "none",
                        transition: "all 0.3s",
                      }}
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: theme === "dark" ? "#0f172a" : "#ffffff",
                        backgroundColor: theme === "dark" ? "#38bdf8" : "#2563eb",
                        padding: "6px 12px",
                        borderRadius: "6px",
                        fontSize: "0.85rem",
                        fontWeight: "bold",
                        textDecoration: "none",
                        transition: "all 0.3s",
                      }}
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}

export default Projects;
