import { useState } from "react";

// Importing images
import linkedinLogo from "../../assets/linkedin.svg";
import microsoftLogo from "../../assets/microsoft.svg";
import UoMLogo from "../../assets/UoM.jpeg";
import hackerrankLogo from "../../assets/hackerrank.jpeg";
import soloLearnLogo from "../../assets/soloLearn.jpeg";
import simplilearnLogo from "../../assets/simplilearn.jpeg";
import pmiLogo from "../../assets/pmi.png";
import qasLogo from "../../assets/qas.jpeg";

export const Certificate = () => {
  const [showAll, setShowAll] = useState(false);

  const certifications = [
    {
      title:
        "Career Essentials in Software Development by Microsoft and LinkedIn",
      logo: [linkedinLogo, microsoftLogo],
      keyAreas: ["Programming", "Software Development"],
      link: "https://www.linkedin.com/learning/certificates/b8e3e14b794855e7136e94f3309c91dc1a36d7101bb835dd48bf0f221472ef25?trk=share_certificate",
    },
    {
      title: "Introduction to Career Skills in Software Development",
      logo: [linkedinLogo],
      keyAreas: [
        "Software Development",
        "Career Management",
        "Tech Career Skills",
      ],
      link: "https://www.linkedin.com/learning/certificates/07133637911608b2f2073e7ab6b18bac360ba7e649b9bf49f9cf714c21113d33?trk=share_certificate",
    },
    {
      title: "Programming Foundations: Fundamentals",
      logo: [linkedinLogo],
      keyAreas: ["Programming"],
      link: "https://www.linkedin.com/learning/certificates/6ca536ac0ecb3188edecc6a48d69c1f170054abc5a09d75a2f4933b2b18c091f?trk=share_certificate",
    },
    {
      title: "Python for Beginners",
      logo: [UoMLogo],
      keyAreas: ["Python (Basics)"],
      link: "https://open.uom.lk/lms/mod/customcert/view.php?id=675&downloadown=1",
    },
    {
      title: "Web Design for Beginners",
      logo: [UoMLogo],
      keyAreas: ["Web Design"],
      link: "https://open.uom.lk/lms/mod/customcert/view.php?id=697&downloadown=1",
    },
    {
      title: "Java (Basics)",
      logo: [hackerrankLogo],
      keyAreas: ["Java"],
      link: "https://www.hackerrank.com/certificates/6632a105475a",
    },
    {
      title: "Introduction to JavaScript",
      logo: [soloLearnLogo],
      keyAreas: ["JavaScript"],
      link: "https://www.sololearn.com/certificates/CC-T0XG2U2C",
    },
    {
      title: "ReactJS for Beginners",
      logo: [simplilearnLogo],
      keyAreas: ["React"],
      link: "https://simpli-web.app.link/e/Vls34wuEIRb",
    },
    {
      title: "Project Management Foundations",
      logo: [
        linkedinLogo,
        pmiLogo,
        qasLogo,
      ],
      keyAreas: ["Project Management"],
      showAllButton: true,
    },
  ];

  const additionalCertifications = [
    {
      title: "Project Management Foundations",
      logo: [linkedinLogo],
      keyAreas: ["Project Management"],
      link: "https://www.linkedin.com/learning/certificates/e137a0316612816a780b18a8f8788db7702135089d65f74c3047b36198c2cf63?trk=share_certificate",
    },
    {
      title: "Project Management Foundations",
      logo: [linkedinLogo, qasLogo],
      keyAreas: ["Project Management"],
      link: "https://www.linkedin.com/learning/certificates/1058ea8d67cacf33d7c39ad7ed53e960bd5178004248b53697f6dd8cbcb71d6f?trk=share_certificate",
    },
    {
      title: "Project Management Foundations",
      logo: [linkedinLogo, pmiLogo],
      keyAreas: ["Project Management"],
      link: "https://www.linkedin.com/learning/certificates/8da731c3b255b80a708851f43d6c5452e9898cb9634ecd1e6264cb60f3b68db3?trk=share_certificate",
    },
  ];

  return (
    <section
      id="certificate"
      className="min-h-screen flex items-center justify-center px-4 py-8"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-3xl md:text-4xl font-mono font-bold mb-6 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Certifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col"
            >
              <div className="flex items-center space-x-2">
                {cert.logo.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt="certificate"
                    className="w-12 h-12 rounded-lg"
                  />
                ))}
              </div>

              <h5 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">
                {cert.title}
              </h5>

              <div className="flex flex-wrap gap-2 my-4">
                {cert.keyAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm bg-white/100 text-blue-600 rounded-2xl"
                  >
                    {area}
                  </span>
                ))}
              </div>

              {cert.showAllButton && (
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="inline-flex font-medium items-center text-blue-100 hover:underline mt-auto"
                >
                  {showAll ? "Show Less" : "See All"}
                  <svg
                    className="w-3 h-3 ml-2 rtl:rotate-[270deg]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                    />
                  </svg>
                </button>
              )}

              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex font-medium items-center text-blue-100 hover:underline mt-auto"
                >
                  Certificate
                  <svg
                    className="w-3 h-3 ml-2 rtl:rotate-[270deg]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                    />
                  </svg>
                </a>
              )}
            </div>
          ))}

          {/* Additional certifications appear when "See All" is clicked */}
          {showAll &&
            additionalCertifications.map((cert, index) => (
              <div
                key={index}
                className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col"
              >
                <div className="flex items-center space-x-2">
                  {cert.logo.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt="certificate"
                      className="w-12 h-12 rounded-lg"
                    />
                  ))}
                </div>

                <h5 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">
                  {cert.title}
                </h5>

                <div className="flex flex-wrap gap-2 my-4">
                  {cert.keyAreas.map((area, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm bg-white/100 text-blue-600 rounded-2xl"
                    >
                      {area}
                    </span>
                  ))}
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex font-medium items-center text-blue-100 hover:underline mt-auto"
                >
                  Certificate
                </a>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
