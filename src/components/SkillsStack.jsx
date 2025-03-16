import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Skills from './Skills'; 

const SkillsStack = ({ skills }) => {
  const [selected, setSelected] = useState(null);

  const handleClick = (card) => {
    setSelected(selected?.id === card.id ? null : card);
  };

  return (
    <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-6 md:px-8">
      {skills.map((card) => (
        <motion.div
          key={card.id}
          onClick={() => handleClick(card)}
          className={`relative overflow-hidden rounded-lg cursor-pointer p-4 border border-blue-100 transition-all duration-300 
            ${
              selected?.id === card.id
                ? 'col-span-1 sm:col-span-2 md:col-span-3 row-span-2 bg-white/20 scale-105 backdrop-blur-lg '
                : 'hover:scale-105'
            }`}
          layoutId={`card-${card.id}`}
        >
          <Skills title={card.title} skills={card.skills} />
          {selected?.id === card.id && (
            <motion.div
              className="absolute inset-0 bg-black flex flex-wrap justify-center items-center text-white text-lg font-bold gap-4 p-4"
              layoutId={`content-${card.id}`}
            >
              {card.skills.map((skill) => (
                <div key={skill.name} className="flex flex-col font-mono items-center">
                  {skill.image ? (
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-20 h-20 sm:w-24 sm:h-24 object-contain p-2 bg-white/10 rounded-lg"
                    />
                  ) : (
                    skill.icon
                  )}
                  <p className="text-sm mt-1">{skill.name}</p>
                </div>
              ))}
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsStack;
