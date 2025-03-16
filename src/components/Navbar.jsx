import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav
      className="fixed top-0 w-full z-50 bg-[rgba(10, 10, 10, 0.8)] 
      backdrop-blur-lg border-b border-white/10 shadow-lg font-[Space Grotesk]"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex  items-center justify-between h-16">
          <a href="#home" className="font-mono text-2xl font-bold text-white">
            {" "}
            Jeneesha<span className="text-blue-500"></span>{" "}
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex text-2xl items-center font-mono space-x-8">
            <a
              href="#home"
              className="text-lg text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-lg text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#accademics"
              className="text-lg text-gray-300 hover:text-white transition-colors"
            >
              Academics
            </a>
            <a
              href="#projects"
              className="text-lg text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#certificate"
              className="text-lg text-gray-300 hover:text-white transition-colors"
            >
              Certificate
            </a>
            <a
              href="#contact"
              className="text-lg text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
