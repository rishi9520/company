// client/src/components/BackToTop.tsx

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed bottom-8 right-8 w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-xl transition-all duration-500 shadow-lg z-50
        ${
          isVisible
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-75 translate-y-8 pointer-events-none"
        }
        ${
          isHovered
            ? "bg-gradient-to-br from-primary to-secondary shadow-primary/40 hover:shadow-lg"
            : "bg-black/40 border border-white/10 shadow-black/40"
        }
      `}
      data-testid="button-back-to-top"
    >
      <ArrowUp
        size={22}
        className={`transition-transform duration-300 ${
          isHovered ? "-translate-y-1" : "translate-y-0"
        } text-white`}
      />
    </button>
  );
}
