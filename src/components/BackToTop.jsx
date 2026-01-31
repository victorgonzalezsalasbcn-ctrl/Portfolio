import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setVisible(true);
      else setVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 500, smooth: true });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "40px",
            right: "40px",
            backgroundColor: "#38bdf8",
            color: "#0f172a",
            border: "none",
            padding: "12px",
            borderRadius: "50%",
            cursor: "pointer",
            boxShadow: "0 4px 15px rgba(56,189,248,0.5)",
            transition: "all 0.3s",
            zIndex: 100,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 8px 25px rgba(56,189,248,0.7)")}
          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 4px 15px rgba(56,189,248,0.5)")}
        >
          ↑
        </button>
      )}
    </>
  );
}

export default BackToTop;