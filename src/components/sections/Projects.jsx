import React from "react";
import { Carousel } from "../Carousel";
import htmlImg from "../../assets/html.svg";
import cssImg from "../../assets/css.png";
import jsImg from "../../assets/js.svg";
import phpImg from "../../assets/php.svg";
import mysqlImg from "../../assets/mySql.jpeg";
import logoImg from "../../assets/logo.png";
import quickplateImg from "../../assets/quickplate.jpg";
import reactImg from "../../assets/react.svg";
import tailwindImg from "../../assets/tailwind.svg";
import portfolioImg from "../../assets/portfolio.png";

export const Projects = () => {
  const projects = [
    {
      title: "Ovinray Hotel Management Web Application",
      role: "Leader | Backend Developer",
      technologies: [
        { name: "HTML", image: htmlImg },
        { name: "CSS", image: cssImg },
        { name: "JS", image: jsImg },
        { name: "PHP", image: phpImg },
        { name: "MYSQL", image: mysqlImg },
      ],
      link: "https://github.com/JENEESHAPRIYADARSHANI/room-reservation-system",
      image: logoImg,
      description1: ` 
      As part of my Web Application Development module in Y1S2, I led the team to create a comprehensive web application for an imaginary hotel,     
     I was responsible for backend development and used PHP and MySQL. 
      `,
      description2: 'The system includes key features such as Google login authentication, a real-time room booking system with availability notifications, automated booking confirmation emails, social media integration, an admin panel for guest management, a booking statistics dashboard, a guest checkout system, and dynamic content management for modifying webpage content and managing gallery images.',      
      linkedinlink: "https://www.linkedin.com/posts/jeneesha-priyadarshani-40734a253_as-part-of-my-web-application-development-activity-7291891542804377600-9VkY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6FXccBi4KZbGpm_CpmSzOOVYckvZY6920",
    },
    {
      title: "QuickPlate Food Delivery System",
      role: "Implement Real-Time Order Tracking",
      technologies: [
        { name: "HTML", image: htmlImg },
        { name: "CSS", image: cssImg },
        { name: "JS", image: jsImg },
        { name: "PHP", image: phpImg },
        { name: "MySQL", image: mysqlImg },
      ],
      link: "https://github.com/JMAdikari/SF-CourseWork",
      image: quickplateImg,
      description1: ` 
        As part of my System Fundamentals module in Y2S2, our group developed a food delivery system offering restaurant listing, menu management, order placement, real-time tracking, user authentication, and payment integration.
      `,
      description2: ` 
        I was responsible for implementing real-time order tracking, enabling users to monitor their orders live and communicate with delivery staff. Additionally, I integrated automated email notifications to enhance the customer experience. This project provided hands-on experience in real-time data synchronization and seamless communication between users, delivery personnel, and restaurants.
      `,
      linkedinlink: "https://www.linkedin.com/posts/jeneesha-priyadarshani-40734a253_webdevelopment-fooddeliverytech-realtimetracking-activity-7294407184774221825-7Ys1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6FXccBi4KZbGpm_CpmSzOOVYckvZY6920",
    }, 
    {
      title: "Personal Portfolio",     
      role: "Frontend Developer",
      technologies: [
        { name: "React", image: reactImg },
        { name: "Tailwind CSS", image: tailwindImg },
    
      ],
      link: "https://github.com/JENEESHAPRIYADARSHANI/portfolio",
      image: portfolioImg,
      description1: ` 
      My portfolio was built using React, Tailwind CSS, and Framer Motion to create a modern, responsive, and interactive experience
      `,
      description2: ` 
       I used React and tailwind CSS because they provide a fast and dynamic UI and Tailwind CSS ensures a clean and efficient design with minimal CSS overhead, respectively. 
       I used framer Motion for a smooth animations.
      `,
      linkedinlink: "portfolio link",
    }, 
  ];

  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-3xl md:text-4xl font-mono font-bold mb-6 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <Carousel projects={projects} />
      </div>
    </section>
  );
};
