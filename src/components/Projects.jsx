"use client"; // If using Next.js app directory

import React from "react";
import { Vortex } from "./ui/vortex"; // Import the Vortex component
import { motion } from "framer-motion"; // For smooth animations

const projectsData = [
  {
    title: "Project 1",
    description: "A project description that highlights key features and technologies used.",
    techStack: ["React", "Node.js", "Tailwind CSS"],
    link: "#", // Update with actual link
  },
  {
    title: "Project 2",
    description: "This project solves a specific problem using modern tech.",
    techStack: ["JavaScript", "Express", "MongoDB"],
    link: "#", // Update with actual link
  },
  {
    title: "Project 3",
    description: "A creative project built with a focus on UX and performance.",
    techStack: ["Next.js", "Firebase", "Framer Motion"],
    link: "#", // Update with actual link
  },
];

const Projects = () => {
  return (
    <Vortex
      backgroundColor="black"
      rangeY={800}
      particleCount={500}
      baseHue={200}
      className="flex flex-col items-center justify-center px-4 py-8 w-full min-h-screen"
    >
      <h2 className="text-4xl font-bold text-white mb-8">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="text-gray-300 mt-2">{project.description}</p>
            <p className="text-gray-400 mt-4">Tech Stack: {project.techStack.join(", ")}</p>
            <a
              href={project.link}
              className="inline-block mt-4 text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </Vortex>
  );
};

export default Projects;
