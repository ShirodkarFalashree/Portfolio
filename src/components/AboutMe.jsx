import React, { useRef, useState, useEffect } from "react";
import { Vortex } from "./ui/vortex";
import { motion, useInView } from "framer-motion";

const AboutMe = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: false });
    const [hasAnimated, setHasAnimated] = useState(false); // State to track animation

    // Effect to set hasAnimated to true when the section comes into view
    useEffect(() => {
        if (inView && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [inView, hasAnimated]);

    // Animation variants for text (appearing from bottom)
    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut" } },
    };

    // Animation variants for cards (sliding in from the left)
    const cardVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: (index) => ({
            opacity: 1,
            x: 0,
            transition: { duration: 1.0, ease: "easeOut", delay: index * 1.0 }, // Delay based on index
        }),
    };

    const cards = [
        { icon: '💻', title: 'Frontend Developer' },
        { icon: '🛠️', title: 'Backend Developer' },
        { icon: '📱', title: 'UI UX Designer' },
        { icon: '📝', title: 'Content Writer' },
    ];

    return (
        <Vortex
            backgroundColor="black"
            rangeY={800}
            particleCount={500}
            baseHue={120}
            className="flex flex-col items-center justify-center px-4 py-8 w-full h-full"
        >
            {/* Text Section with Motion */}
            <motion.div
                ref={ref} // Attach the ref here
                className="text-center mb-20"
                initial="hidden"
                animate={hasAnimated ? "visible" : "hidden"} // Change animation based on visibility
                variants={textVariants}
            >
                <h3 className="text-5xl font-bold text-white mt-4">About Me.</h3>
                <p className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
                    Hi there! I'm a software developer who loves working with JavaScript and enjoys using tools like React and Node.js to create amazing websites and applications. I’m all about making things user-friendly and efficient.

                    I believe that teamwork is key. I work closely with others to come up with creative solutions that tackle real-world problems. I’m a quick learner, always eager to pick up new skills and technologies.

                    Let’s team up to bring your ideas to life and build something great together!
                </p>
            </motion.div>

            {/* Cards Section with Motion */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        className="relative rounded-full shadow-lg text-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-[2px]"
                        initial="hidden"
                        animate={hasAnimated ? "visible" : "hidden"} // Change animation based on visibility
                        variants={cardVariants}
                        custom={index} // Pass the index for delay
                        whileHover={{ scale: 1.15 }} // Scale up on hover
                    >
                        <div className="bg-gray-800 rounded-full p-6 ">
                            <div className="text-4xl mb-2">{card.icon}</div>
                            <h4 className="text-lg font-bold text-white">{card.title}</h4>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Vortex>
    );
};

export default AboutMe;
