// components/Hero.jsx
import React, { useState, useEffect } from "react";

function Hero() {
  const fullText = "Full Stack Developer";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero">
      <h1>{displayText}<span className="cursor">|</span></h1>
      <p>Construyendo aplicaciones multimedia y web completas, del frontend al backend.</p>
    </section>
  );
}

export default Hero;
