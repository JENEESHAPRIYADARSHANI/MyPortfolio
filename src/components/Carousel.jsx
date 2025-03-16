import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export const Carousel = ({ projects }) => {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const carouselRef = useRef(null);

  const updateScrollButtons = () => {
    if (carouselRef.current) {
      setCanScrollLeft(carouselRef.current.scrollLeft > 0);
      setCanScrollRight(
        carouselRef.current.scrollLeft <
          carouselRef.current.scrollWidth - carouselRef.current.clientWidth
      );
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
      updateScrollButtons();
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
      updateScrollButtons();
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
    }
    return () => {
      if (carousel) {
        carousel.removeEventListener("scroll", updateScrollButtons);
      }
    };
  }, []);

  return (
    <div className="relative w-full bg-black py-16">
      <div
        className="flex overflow-x-auto py-10 scroll-smooth gap-6"
        ref={carouselRef}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, delay: 0.2 * index },
            }}
            className="p-6 flex-shrink-0 w-72 sm:w-96 lg:w-105 h-[600px] rounded-xl border border-blue/100 bg-black text-white font-mono hover:shadow-lg hover:-translate-y-2 transition-transform cursor-pointer flex flex-col"
            onClick={() => setSelectedProject(project)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-xl mb-3"
            />
            <div className="flex-1 mb-4">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-white text-xl mt-8 mb-8">
                Role: {project.role}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <img
                    key={techIndex}
                    src={tech.image}
                    alt={tech.name}
                    className="w-16 h-16 object-contain "
                  />
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <p>Checkout the code:</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src="src/assets/github.svg"
                  alt="GitHub"
                  className="w-10 h-10 bg-white rounded-full object-contain"
                />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-10 flex gap-4">
        <button
          onClick={scrollLeft}
          disabled={!canScrollLeft}
          className="h-12 w-12 rounded-full bg-gray-800 text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition hover:bg-gray-700"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={scrollRight}
          disabled={!canScrollRight}
          className="h-12 w-12 rounded-full bg-gray-800 text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition hover:bg-gray-700"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Pop-up Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white text-black rounded-lg max-w-4xl w-full relative shadow-lg overflow-hidden"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 text-gray-700 hover:text-gray-900"
              >
                <X size={24} />
              </button>
              <div className="flex flex-col items-center p-6 max-h-[80vh] overflow-y-auto">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full max-h-80 object-cover rounded-lg mb-6"
                />
                <h2 className="text-2xl font-bold mb-4">
                  {selectedProject.title}
                </h2>
                <div className="flex flex-wrap justify-center gap-4 mb-4">
                  {selectedProject.technologies.map((tech, techIndex) => (
                    <img
                      key={techIndex}
                      src={tech.image}
                      alt={tech.name}
                      className="w-16 h-16 object-contain rounded-full"
                    />
                  ))}
                </div>
                <div className="flex items-center justify-center gap-4 mb-4">
                  <p>Checkout the code:</p>
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="src/assets/github.svg"
                      alt="GitHub"
                      className="w-12 h-12 bg-white rounded-full object-contain"
                    />
                  </a>
                </div>
                <div className="flex items-center justify-center gap-4 mb-4">
                  <p>Checkout the post:</p>
                  <a
                    href={selectedProject.linkedinlink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="src/assets/linkedin.svg"
                      alt="LinkedIn"
                      className="w-10 h-10 bg-white object-contain"
                    />
                  </a>
                </div>
                <p className="mb-4 text-justify">
                  {selectedProject.description1}
                </p>
                <p className="mb-4 text-justify">
                  {selectedProject.description2}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
