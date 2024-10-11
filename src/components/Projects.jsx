import React, { useEffect, useRef, useState } from "react";
import { Vortex } from "./ui/vortex"; // Import the Vortex component
import { motion } from "framer-motion"; // For smooth animations
import images from "../assets";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const projectsData = [
  {
    title: "Here Fashion",
    description: "This e-commerce website offers a seamless and user-friendly shopping experience, designed to meet the diverse needs of customers. With intuitive navigation and powerful filtering options, users can effortlessly browse through a wide range of products. The platform prioritizes accessibility and responsiveness, ensuring that every visitor enjoys a smooth shopping journey, whether on desktop or mobile. Key features include personalized recommendations, detailed product information, and a secure checkout process, making it easy for customers to find exactly what they're looking for and complete their purchases with confidence.",
    techStack: ["React", "Redux", "Tailwind CSS"],
    Repo: "https://github.com/ShirodkarFalashree/Redux-ecom",
    link: "https://here-fashion.netlify.app/",
    image: images.proj1,
  },
  {
    title: "BhLog",
    description: "This blogging website provides a user-friendly platform for individuals to share their thoughts and ideas. Equipped with a comprehensive suite of word formatting tools, it allows users to create and edit posts effortlessly. With features like rich text formatting, media embedding, and customizable templates, users can produce visually appealing and engaging content that captures their audience's attention. Whether you're sharing personal stories, professional insights, or creative pieces, this blogging website is designed to make your writing experience smooth and enjoyable.",
    techStack: ["React", "Tailwind CSS", "MongoDB"],
    Repo: "https://github.com/ShirodkarFalashree/BhLog",
    link: "https://bhlog.vercel.app/",
    image: images.proj2,
  },
  {
    title: "Two good Co. clone",
    description: "This project is a clone of a website that features captivating cursor animations and utilizes Locomotive Scroll for smooth, scroll-based interactions. The design incorporates dynamic visual effects that enhance user engagement, providing an immersive browsing experience. With seamless transitions and responsive animations, this clone showcases the potential of modern web development techniques to create visually stunning interfaces.",
    techStack: ["JavaScript", "Locomotive JS", "GSAP"],
    Repo: "https://github.com/ShirodkarFalashree/two-good-clone",
    link: "https://two-good-clone-eight.vercel.app/",
    image: images.proj3,
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set visibility to true when in view
          observer.disconnect(); // Stop observing after the first intersection
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is in view
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <Vortex
      backgroundColor="black"
      rangeY={800}
      particleCount={500}
      baseHue={200}
      className="flex flex-col items-center justify-center px-4 py-8 w-full min-h-screen"
    >
      <h2 className="text-5xl font-bold text-white mb-8">Projects</h2>

      <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
            whileHover={{ scale: 1.05 }} // Scale on hover
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }} // Animate based on visibility
            initial={{ opacity: 0, x: 50 }} // Initial state
            transition={{
              duration: 0.2, // Duration of the animation
              delay: isVisible ? index * 0.5 : 0, // Staggered delay based on index
            }}
          >
            <img 
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md mb-4" // Style the image
            />
            <h3 className="text-xl font-semibold text-white mt-4">{project.title}</h3>
            <p className="text-gray-300 mt-2">{project.description}</p>
            <p className="text-gray-200 mt-4 font-bold text-lg">Tech Stack: {project.techStack.join(", ")}</p>
            <a
              href={project.Repo}
              className="flex gap-2 mt-4 text-white text-3xl items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
             Github Repo :<FaGithub />

            </a>
            <br />
            <a
              href={project.link}
              className=" mt-2 text-white text-3xl flex justify-center gap-2 items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Web : <TbWorldWww />
            </a>
          </motion.div>
        ))}
      </div>
    </Vortex>
  );
};

export default Projects;
