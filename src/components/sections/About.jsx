"use client";

import { RevealOnScroll } from "../RevealOnScroll";
import { Education } from "../Education";
import { PersonalDetails } from "../Personaldetails";
import SkillsStack from "../SkillsStack"; 

import htmlImage from "/src/assets/html.svg";
import cssImage from "/src/assets/css.png";
import jsImage from "/src/assets/js.svg";
import reactImage from "/src/assets/react.svg";
import tailwindImage from "/src/assets/tailwind.svg";
import phpImage from "/src/assets/php.svg";
import javaImage from "/src/assets/java.svg";
import cSharpImage from "/src/assets/cSharp.svg";
import aspCoreImage from "/src/assets/aspCore.png";
import mysqlImage from "/src/assets/mySql.jpeg";

export const About = () => {
  const skills = [
    {
      id: 1,
      title: "Frontend",
      skills: [
        { name: "HTML", image: htmlImage },
        { name: "CSS", image: cssImage },
        { name: "JavaScript", image: jsImage },
        { name: "React", image: reactImage },
        { name: "Tailwind CSS", image: tailwindImage },
      ],
    },
    {
      id: 2,
      title: "Backend",
      skills: [
        { name: "PHP", image: phpImage },
        { name: "Java", image: javaImage },
        { name: "C#", image: cSharpImage },
      ],
    },
    {
      id: 3,
      title: "Frameworks",
      skills: [{ name: "ASP.NET Core", image: aspCoreImage }],
    },
    {
      id: 4,
      title: "Database",
      skills: [{ name: "MySQL", image: mysqlImage }],
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 px-4"
    >
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-mono font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-7 lg:gap-12 mb-8">
            <div className="lg:col-span-4 flex flex-col w-full min-h-full p-2 hover:-translate-y-1  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <Education />
            </div>

            <div className="lg:col-span-3 flex flex-col w-full min-h-full p-2 hover:-translate-y-1  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <PersonalDetails />
            </div>
          </div>

          <h2 className="mt-25 mb-8 text-3xl sm:text-4xl font-mono font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Skills Stack
          </h2>

          <SkillsStack skills={skills} />
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
