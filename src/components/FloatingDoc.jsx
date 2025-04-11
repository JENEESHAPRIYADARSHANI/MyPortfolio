import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export const FloatingDoc = () => {
  const items = [
    {
      title: "GitHub",
      href: "https://github.com/JENEESHAPRIYADARSHANI",
      icon: <FaGithub className="h-8 w-8" />,
    },
    {
      title: "LinkedIn",
      href: "https://linkedin.com/in/your-profile",
      icon: <FaLinkedin className="h-8 w-8" />,
    },
    {
      title: "Email",
      href: "mailto:your-jeneeliya2@gmail.com",
      icon: <FaEnvelope className="h-8 w-8" />,
    },
  ];

  const cvLink = "src/assets/Jeneesha_Priyadarshani.pdf";

  return (
    <>
      {/* Mobile View */}
      <div className="relative block md:hidden">
        <div className="absolute inset-x-0 flex flex-col gap-2">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{
                opacity: { duration: 0.3 },
                y: { duration: 0.3, delay: idx * 0.05 },
              }}
            >
              <a
                href={item.href}
                className="h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-900 flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-110"
              >
                {item.icon}
              </a>
            </motion.div>
          ))}

          {/* Download CV Icon Button (Mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
          >
            <a
              href={cvLink}
              download
              className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-all duration-300 ease-in-out"
            >
              <FaFileDownload className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="mx-auto ml-2 w-45 mt-6 hidden md:flex flex-col gap-4 items-start">
        <div className="flex h-16 gap-6 items-end rounded-2xl bg-gray-50 dark:bg-neutral-900 px-2 pb-4">
          {items.map((item) => (
            <IconContainer key={item.title} {...item} />
          ))}
        </div>

        {/* Download CV Button (Desktop) */}
        <a
          href={cvLink}
          download
          className="flex items-center gap-2 rounded-full bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700 transition-all duration-300 ease-in-out"
        >
          <FaFileDownload />
          Download CV
        </a>
      </div>
    </>
  );
};

const IconContainer = ({ title, icon, href }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : "_self"}
      rel="noopener noreferrer"
    >
      <motion.div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center relative transition-all duration-300 ease-in-out transform hover:scale-130"
        initial={{ scale: 1 }}
        animate={{ scale: hovered ? 1.1 : 1 }}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs text-neutral-700 bg-gray-100 dark:bg-neutral-800 dark:text-white rounded-md px-2 py-0.5"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <div className="flex items-center justify-center">{icon}</div>
      </motion.div>
    </a>
  );
};
