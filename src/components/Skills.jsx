import React from 'react';

const Skills = ({ title, skills }) => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-2xl font-semibold text-center mb-4">{title}</h3>
      <div className="grid grid-cols-3 gap-4">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center justify-center">
            {skill.image ? (
              <img
                src={skill.image}
                alt={skill.name}
                className="w-22 h-22 object-contain p-1 rounded-md" 
              />
            ) : (
              skill.icon
            )}
            <p className="text-sm mt-2 text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
