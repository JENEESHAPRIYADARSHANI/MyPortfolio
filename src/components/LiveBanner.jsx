import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa"; 


export const LiveBanner = ({ liveLink }) => {
  return (
    <div className="absolute top-2 right-2 bg-blue-600 text-white px-3 py-1 rounded-lg flex items-center gap-1 shadow-lg">
      <span className="text-sm font-semibold font-mono">Live:</span>
      <a
        href={liveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-200"
      >
        <FaExternalLinkAlt className="w-5 h-5" />
      </a>
    </div>
  );
};
