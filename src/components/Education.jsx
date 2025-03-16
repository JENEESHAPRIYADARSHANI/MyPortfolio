import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "../index.css";

export const Education = () => {
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    setAnimationTriggered(true);
  }, []);

  return (
    <section className="dark:text-white">
      <div className="container max-w-7xl mx-auto py-8">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-2xl font-mono font-semibold text-center top-0 mb-8">
            Education
          </h2>
          <div className="relative w-full sm:w-10/12 lg:w-8/12 xl:w-7/12">
            {/* Education Timeline */}
            <div className="space-y-8 relative">
              {/* Line connecting the dots */}
              <motion.div
                initial={{ height: 0 }}
                animate={animationTriggered ? { height: "100%" } : {}}
                transition={{ duration: 1, delay: 0.2 }}
                className="absolute left-[-30px] top-5 w-1 bg-white/30"
              ></motion.div>

              {/* Entry 1 */}
              <motion.div
                key="prajapathi"
                initial={{ opacity: 0, y: 50 }}
                animate={animationTriggered ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
                className="flex items-center space-x-4 relative"
              >
                <div className="w-4 h-4 bg-blue-500 rounded-full absolute left-[-36px] top-0.5"></div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">
                    Prajapathi Girls' College
                  </h3>
                  <time className="text-xs text-gray-500 uppercase">2018</time>
                  <p className="mt-2">
                    G.C.E. Ordinary Level Examination 2018 - Achieved 9As.
                  </p>
                </div>
              </motion.div>

              {/* Entry 2 */}
              <motion.div
                key="taxila"
                initial={{ opacity: 0, y: 50 }}
                animate={animationTriggered ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className="flex items-center space-x-4 relative"
              >
                <div className="w-4 h-4 bg-blue-500 rounded-full absolute left-[-36px] top-0.5"></div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">
                    Taxila Central College
                  </h3>
                  <time className="text-xs text-gray-500 uppercase">2021</time>
                  <p className="mt-2">
                    G.C.E. Advanced Level Examination 2021 - Physical Science.
                    Passed with one B and two C passes.
                  </p>
                </div>
              </motion.div>

              {/* Entry 3 */}
              <motion.div
                key="nsbm"
                initial={{ opacity: 0, y: 50 }}
                animate={animationTriggered ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
                className="flex items-center space-x-4 relative"
              >
                <div className="w-4 h-4 bg-blue-500 rounded-full absolute left-[-36px] top-0.5"></div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">
                    NSBM Green University
                  </h3>
                  <time className="text-xs text-gray-500 uppercase">
                    OCT 2022 - DEC 2026
                  </time>
                  <p className="mt-2">
                    Undergraduate - BSc (Hons) in Computer Science.
                  </p>
                </div>
              </motion.div>

              {/* Spacer for last item */}
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 50 }}
                animate={animationTriggered ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 2, delay: 0.8 }}
                className="h-4"
              ></motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
