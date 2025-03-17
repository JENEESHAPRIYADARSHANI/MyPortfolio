import { motion } from "framer-motion"; // Import Framer Motion
import { FloatingDoc } from "../FloatingDoc";
import { useState, useEffect } from "react";
import profilePic from "../../assets/profile.jpg";

export const Home = () => {
  const phrases = ["Web Developer", "Full Stack Developer"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentPhrase = phrases[index];
    let timeout;

    if (isTyping) {
      if (text.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setText(currentPhrase.slice(0, text.length + 1));
        }, 100);
      } else {
        setTimeout(() => setIsTyping(false), 1000);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(currentPhrase.slice(0, text.length - 1));
        }, 50);
      } else {
        setIsTyping(true);
        setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isTyping, index]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center relative px-6 md:px-16 py-8"
    >
      {/* Left Section: Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -100 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 3, ease: "easeIn" }} 
        className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0 mt-12 md:mt-4"
      >
        <h2 className="text-2xl md:text-6xl font-semibold font-mono bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight text-gray-900">
          Hey, It's Me.
          <br />
          Jeneesha
        </h2>
        <p className="mt-4 text-lg md:text-xl text-white font-mono text-gray-700">
          <h3 className="text-2xl md:text-4xl font-semibold font-mono">
            and I am a{" "}
            <span className="text-blue-400 font-mono whitespace-nowrap text-2xl md:text-3xl">
              {text}
              {showCursor && <span className="text-cyan-400">|</span>}
            </span>
          </h3>
          <br />
          I am an enthusiastic undergraduate passionate about web development and innovation.
          I thrive in dynamic environments, love problem-solving, and seek opportunities
          to collaborate and make a meaningful impact through technology.
        </p>
        <FloatingDoc />
      </motion.div>

      {/* Right Section: Profile Image */}
      <motion.div
        initial={{ opacity: 0, x: 100 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 3, ease: "easeIn" }} 
        className="w-full md:w-1/2 flex justify-center"
      >
        <div className="absolute w-3/4 md:w-[35%] h-[80%] bg-blue-500 rounded-full blur-[90px] opacity-60 animate-pulse transition-all duration-500 -z-10"></div>
        <img
          className="rounded-full w-52 h-52 sm:w-70 sm:h-70 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover shadow-lg"
          src={profilePic}
          alt="Jeneesha's Profile"
        />
      </motion.div>
    </section>
  );
};
