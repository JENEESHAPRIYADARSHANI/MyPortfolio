import React, { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { motion } from "framer-motion";
import image1 from "../../assets/3.png";
import image2 from "../../assets/1.png";
import image3 from "../../assets/2.png";
import image4 from "../../assets/4.png";

export const Accademics = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2]);

  const results = [
    { id: 1, title: "Y1S1", imageSrc: image1, altText: "Y1S1" },
    { id: 2, title: "Y1S2", imageSrc: image2, altText: "Y1S2" },
    { id: 3, title: "Y2S1", imageSrc: image3, altText: "Y2S1" },
    { id: 4, title: "Y2S2", imageSrc: image4, altText: "Y2S2" },
  ];

  const positions = ["left", "center", "right"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5, opacity: 1 },
    left: { x: "-40%", scale: 0.8, zIndex: 3, opacity: 0.7 },
    right: { x: "40%", scale: 0.8, zIndex: 3, opacity: 0.7 },
  };

  const handleNext = () => {
    setPositionIndexes((prevIndexes) =>
      prevIndexes.map((prevIndex) => (prevIndex + 1) % results.length)
    );
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) =>
      prevIndexes.map(
        (prevIndex) => (prevIndex - 1 + results.length) % results.length
      )
    );
  };

  return (
    <section
      id="accademics"
      className="min-h-screen flex flex-col items-center justify-center py-10 px-4"
    >
      <RevealOnScroll>
        {/* Title Section */}
        <h2 className="text-3xl sm:text-3xl md:text-4xl font-mono font-bold mb-6 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Academic Performance
        </h2>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          {/* Image Animation Section */}
          <div className="relative flex items-center justify-center bg-black h-[400px] sm:h-[500px] md:h-[600px] w-full sm:w-[800px] md:w-[1100px] overflow-hidden rounded-lg">
            {/* Show only 3 images at a time */}
            {positions.map((pos, i) => {
              const result = results[positionIndexes[i]];
              return (
                <motion.div
                  key={result.id}
                  className="absolute flex flex-col items-center"
                  initial="center"
                  animate={pos}
                  variants={imageVariants}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={result.imageSrc}
                    alt={result.altText}
                    className="rounded-lg w-[600px] sm:w-[600px] md:w-[800px]"
                  />
                  {pos === "center" && (
                    <p className="text-white text-sm sm:text-lg bg-black bg-opacity-50 px-3 py-1 rounded-md mt-2 z-10">
                      {result.title}
                    </p>
                  )}
                </motion.div>
              );
            })}

            {/* Back & Next Buttons */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
              <button
                className="text-white text-xs sm:text-sm bg-blue-500 py-2 px-4 sm:px-5 rounded-md transition hover:bg-blue-600"
                onClick={handleBack}
              >
                Back
              </button>
              <button
                className="text-white text-xs sm:text-sm bg-blue-500 py-2 px-4 sm:px-5 rounded-md transition hover:bg-blue-600"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div>

          {/* GPA Section */}
          <div className="relative w-50 sm:w-60 p-4 sm:p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-blue-400/50">
            <p className="text-white text-lg sm:text-base font-semibold tracking-wider">
              Student ID: <span className="text-blue-300">26969</span>
            </p>
            <p className="text-sm sm:text-xl font-bold text-blue-400 mt-2">
              GPA: 3.83
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
