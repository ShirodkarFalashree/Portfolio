import React from "react";
import { Vortex } from "./ui/vortex";

const AboutMe = () => {
    return (
        <Vortex
            backgroundColor="black"
            rangeY={800}
            particleCount={500}
            baseHue={120}
            className="flex flex-col items-center justify-center px-4 py-8 w-full h-full"
        >
            <div className="text-center">
                <h3 className="text-5xl font-bold text-white mt-4">About Me.</h3>
                <p className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
                    Hi there! I'm a software developer who loves working with JavaScript and enjoys using tools like React and Node.js to create amazing websites and applications. I’m all about making things user-friendly and efficient.

                    I believe that teamwork is key. I work closely with others to come up with creative solutions that tackle real-world problems. I’m a quick learner, always eager to pick up new skills and technologies.

                    Let’s team up to bring your ideas to life and build something great together!

                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                    <div className="text-3xl mb-2">💻</div>
                    <h4 className="text-lg font-bold text-white">Frontend Web Developer</h4>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                    <div className="text-3xl mb-2">📱</div>
                    <h4 className="text-lg font-bold text-white">React Native Develo per</h4>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                    <div className="text-3xl mb-2">🛠️</div>
                    <h4 className="text-lg font-bold text-white">Backend Developer</h4>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                    <div className="text-3xl mb-2">✂️</div>
                    <h4 className="text-lg font-bold text-white">Video Editing</h4>
                </div>
            </div>
        </Vortex>
    );
};

export default AboutMe;
