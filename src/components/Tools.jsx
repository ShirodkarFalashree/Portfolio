import React from 'react';
import { Vortex } from "./ui/vortex"; // Import the Vortex component
import { motion } from 'framer-motion'; // Import framer-motion for animations

// Import technology icons from react-icons
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaGitAlt, FaJsSquare } from 'react-icons/fa';
import { SiRedux, SiTailwindcss, SiFigma, SiMongodb, SiNpm, SiMysql } from 'react-icons/si'; // Import icons for Redux, Tailwind, Figma, NPM, MySQL

// Data array with tool icons
const toolsData = [
  { icon: <FaReact className="w-10 h-10 text-blue-600" /> }, // React icon
  { icon: <FaNodeJs className="w-10 h-10 text-green-600" /> }, // Node.js icon
  { icon: <FaCss3Alt className="w-10 h-10 text-blue-400" /> }, // CSS3 icon
  { icon: <FaHtml5 className="w-10 h-10 text-orange-600" /> }, // HTML5 icon
  { icon: <SiMongodb className="w-10 h-10 text-green-500" /> }, // MongoDB icon
  { icon: <FaGitAlt className="w-10 h-10 text-orange-500" /> }, // Git icon
  { icon: <SiRedux className="w-10 h-10 text-purple-600" /> }, // Redux icon
  { icon: <SiFigma className="w-10 h-10 text-pink-500" /> }, // Figma icon
  { icon: <SiTailwindcss className="w-10 h-10 text-blue-400" /> }, // Tailwind CSS icon
  { icon: <FaJsSquare className="w-10 h-10 text-yellow-500" /> }, // JavaScript icon
  { icon: <SiNpm className="w-10 h-10 text-red-600" /> }, // NPM icon
  { icon: <SiMysql className="w-10 h-10 text-blue-600" /> }, // MySQL icon
];

// Framer Motion animation variants for the tools
const toolVariants = {
  hidden: { opacity: 0, y: 50 }, // Initial state (below the view)
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // Staggered delay for each tool based on its index
      duration: 0.5,
    },
  }),
};

const Tools = () => {
  return (
    <Vortex
      backgroundColor="black"
      rangeY={800}
      particleCount={500}
      baseHue={200}
      className="flex flex-col items-center justify-center px-4  w-full min-h-screen"
    >
      <h2 className="text-5xl font-bold text-white mb-2">Tools</h2>

      {/* Responsive grid for tools */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 items-center">
        {toolsData.map((tool, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-full flex justify-center items-center shadow-lg transform transition-transform duration-700 w-32 h-32" // Center icon and make container round
            custom={index} // Pass the index to the variants for staggered delay
            initial="hidden" // Initial hidden state
            whileInView="visible" // Trigger the animation when the section is in view
            variants={toolVariants} // Apply animation variants
            viewport={{ once: true }} // Animate only once when the section comes into view
            whileHover={{ rotate: 360 }} // 360 degree rotation on hover
          >
            <div className="text-5xl font-bold">{tool.icon}</div>
          </motion.div>
        ))}
      </div>
    </Vortex>
  );
};

export default Tools;
