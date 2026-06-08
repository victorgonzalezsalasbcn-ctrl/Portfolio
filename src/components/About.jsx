import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Sobre mí
      </motion.h2>

      <motion.p
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Desarrollador de aplicaciones multiplataforma con una trayectoria sólida en el sector IT. Durante años he trabajado en soporte técnico, resolución de incidencias, coordinación de equipos y mejora de procesos, lo que me ha dado una visión completa del ciclo de vida de un servicio tecnológico. También he participado en tareas de calidad, documentación y entrenamiento de modelos de IA generativa, siempre orientado a optimizar el trabajo de los equipos.
        <br /><br />
        Actualmente estoy enfocado en el desarrollo de software, especialmente en la creación de aplicaciones reales que aporten valor. Trabajo con JavaScript, React, Node.js y bases de datos SQL y NoSQL, y complemento mi perfil con conocimientos en DevOps, automatización y metodologías ágiles. Me motiva seguir creciendo como desarrollador y construir soluciones eficientes, escalables y bien diseñadas.
      </motion.p>
    </motion.section>
  );
}

export default About;