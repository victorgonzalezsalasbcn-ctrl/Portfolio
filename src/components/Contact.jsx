import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

function Contact() {
  const contactMethods = [
    { 
      name: "Email", 
      value: "victor.gonzalezsalas.bcn@gmail.com", 
      link: "mailto:victor.gonzalezsalas.bcn@gmail.com", 
      icon: <Mail size={32} /> 
    },
    { 
      name: "GitHub", 
      value: "github.com/victorgonzalezsalas", 
      link: "https://github.com/victorgonzalezsalasbcn-ctrl", 
      icon: <Github size={32} /> 
    },
    { 
      name: "LinkedIn", 
      value: "Víctor González Salas", 
      link: "https://www.linkedin.com/in/víctor-gonzález-salas-07a941163/", 
      icon: <Linkedin size={32} /> 
    }
  ];

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2>Contacto</h2>
      <p className="contact-subtitle">¿Tienes algún proyecto en mente? ¡Hablemos!</p>
      
      <div className="contact-grid">
        {contactMethods.map((method, index) => (
          <motion.a
            key={index}
            href={method.link}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="contact-icon-wrapper">
              {method.icon}
            </div>
            <h3>{method.name}</h3>
            <p>{method.value}</p>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}

export default Contact;