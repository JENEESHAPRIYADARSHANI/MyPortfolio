

import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Social media icons

export const Footer = () => {
  return (
    <footer className="bg-white/10 text-white py-10 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-center sm:text-left mb-4 sm:mb-0">
            &copy; Jeneesha. All Rights Reserved.
          </p>

          <div className="flex space-x-4">
            
           
            <a href="https://www.instagram.com/jeneesha_priyadarshani/profilecard" className="text-white hover:text-pink-500">
              <FaInstagram size={24} />
            </a>
            <a href="www.linkedin.com/in/jeneesha-priyadarshani-40734a253" className="text-white hover:text-blue-700">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};


