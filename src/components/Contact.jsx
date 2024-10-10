import React from "react";
import { Vortex } from "./ui/vortex"; // Import the Vortex component

const Contact = () => {
  return (
<Vortex
      backgroundColor="black"
      rangeY={800}
      particleCount={500}
      baseHue={200}
      className="flex flex-col items-center justify-center px-4 py-8 w-full min-h-screen"
    >     
     <div className="container mx-auto px-4 md:px-8 text-white">
        <h2 className="text-4xl font-bold text-center mb-6">Get in Touch</h2>
        <p className="text-center text-lg mb-12">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. Feel free to reach out!
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 p-4">
            <form className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <label className="block text-gray-300 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 rounded bg-gray-700 text-gray-100 focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 rounded bg-gray-700 text-gray-100 focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full p-3 rounded bg-gray-700 text-gray-100 focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full p-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-200 text-white font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="md:w-1/2 p-4">
            <h3 className="text-2xl font-bold mb-4">Contact Me</h3>
            <p className="text-gray-400 mb-2">Feel free to reach out through any of the following platforms:</p>
            <ul className="space-y-2">
              <li>
                <a href="mailto:your-email@example.com" className="text-blue-400 hover:underline">
                  Email: your-email@example.com
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/your-profile" className="text-blue-400 hover:underline">
                  LinkedIn: your-profile
                </a>
              </li>
              <li>
                <a href="https://github.com/your-username" className="text-blue-400 hover:underline">
                  GitHub: your-username
                </a>
              </li>
              {/* Add more social media links as needed */}
            </ul>
          </div>
        </div>
      </div>
    </Vortex>
  );
};

export default Contact;
