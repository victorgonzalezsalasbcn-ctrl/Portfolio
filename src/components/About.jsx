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
        Desarrollador de aplicaciones multiplataforma con ilusión por crear soluciones reales en el sector. 
        Con una amplia experiencia en el mundo IT, he estado en resolución de incidencias técnicas, coordinación de equipos y desarrollo de software.
        Apasionado de las tecnologías, trabajé adicionalmente con herramientas de training para IA generativa y ahora quiero enfocarme en el desarrollo de aplicaciones a nivel profesional.
        <br /><br />
        Mis habilidades incluyen JavaScript, React, Node.js, bases de datos SQL y NoSQL, así como conocimientos en DevOps y metodologías ágiles. 
        Estoy comprometido con el aprendizaje continuo y la mejora constante para ofrecer soluciones innovadoras y eficientes.
      </motion.p>
    </motion.section>
  );
}

export default About;