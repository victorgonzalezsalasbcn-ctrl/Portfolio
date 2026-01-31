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
      style={{ padding: "120px 20px", minHeight: "80vh", textAlign: "center" }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 style={{ marginBottom: "30px", color: theme === "dark" ? "#f1f5f9" : "#1e293b" }}>
        Proyectos
      </h2>

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
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
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
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.3)" }}
              style={{
                backgroundColor: theme === "dark" ? "#1e293b" : "#ffffff",
                color: theme === "dark" ? "#f1f5f9" : "#1e293b",
                padding: "20px",
                borderRadius: "12px",
                cursor: "pointer",
              }}
            >
              <h3 style={{ marginBottom: "10px" }}>{project.title}</h3>
              <p style={{ marginBottom: "10px" }}>{project.description}</p>

              {/* Tecnologías */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "10px" }}>
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
              <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
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
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.boxShadow = "0 8px 25px rgba(56,189,248,0.5)")
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
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
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.boxShadow = "0 8px 25px rgba(56,189,248,0.5)")
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
                  >
                    Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}

export default Projects;