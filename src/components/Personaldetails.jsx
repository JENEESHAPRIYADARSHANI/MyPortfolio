import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import "../index.css";

export const PersonalDetails = () => {
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    setAnimationTriggered(true);
  }, []);

  return (
    <section className="dark:text-white">
      <div className="container max-w-5xl py-8 mx-auto">
        <div className="flex justify-center mb-6">
          <div className="text-center before:block before:w-24 before:h-3 before:mx-auto sm:before:mx-0">
          <h2 className="text-2xl font-mono font-semibold text-center   ">
              Personal Details
            </h2>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={animationTriggered ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="mx-auto rounded-lg py-10 shadow-sm dark:border-gray-700 w-full max-w-xl"
        >
          <dl className="space-y-4 text-sm dark:text-gray-200">
            {[
              { label: "Name", value: "Jeneesha Priyadarshani" },
              { label: "Age", value: "23 Years" },
              { label: "Phone Number", value: "+94 70 12 85 962" },
              { label: "City", value: "Horana" },
              { label: "Languages", value: "Sinhala | Tamil | English" }
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 gap-x-4 transition-transform transform hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg w-full"
              >
                <dt className="font-mono text-lg text-gray-900 dark:text-white whitespace-nowrap">
                  {item.label}
                </dt>
                <dd className="text-lg font-mono text-gray-700 dark:text-gray-200 flex-auto text-right">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
};
