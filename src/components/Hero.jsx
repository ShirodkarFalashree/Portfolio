import React from "react";
import { Vortex } from "./ui/vortex";
import { motion } from "framer-motion";

const Hero = () => {
  // Define animation variants
  const variants = {
    hidden: { opacity: 0, y: 50 }, // Initial state
    visible: { opacity: 1, y: 0 },  // Final state
  };

  return (
    <section className="bg-gray-900 dark:bg-dark-bg text-gray-100 dark:text-dark-text flex items-center justify-center h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-4 py-8 w-full h-full overflow-x-hidden"
      >
        {/* Apply motion.div for animation */}
        <motion.p
          className="text-center text-2xl sm:text-2xl text-gray-200 align-ce"
          initial="hidden"  // Set initial state
          animate="visible" // Start the animation
          exit="hidden"     // Define exit state if needed
          variants={variants}
          transition={{ duration: 1.0 }} // Animation duration
        >
          Let's merge logic with creativity for seamless experiences
        </motion.p>
        <motion.span
          className="text-xl sm:text-2xl text-gray-300"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 1.0, delay: 0.2 }} // Slight delay for staggered effect
        >
          with
        </motion.span>
        <motion.h1
          className="text-4xl sm:text-8xl font-bold text-gray-100"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 1.0, delay: 0.4 }} // Delay for staggered effect
        >
          Falashree Shirodkar
        </motion.h1>
      </Vortex>
    </section>
  );
};

export default Hero;
