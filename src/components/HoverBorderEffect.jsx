import React from 'react';

const HoverBorderEffect = ({ children, className = '' }) => {
  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <div className="h-auto rounded-2xl border-2 border-transparent group-hover:border-blue-500 transition-all duration-300">
        {children}
      </div>
    </div>
  );
};

export default HoverBorderEffect;
