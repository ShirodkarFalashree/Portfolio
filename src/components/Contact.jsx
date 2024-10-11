import React, { useState, useRef } from "react";
import { Vortex } from "./ui/vortex"; // Import the Vortex component
import emailjs from '@emailjs/browser'; // Import EmailJS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Send email using EmailJS
    emailjs.sendForm(
      'service_uqfofpb', // Your EmailJS service ID
      'template_jh5xccv', // Your EmailJS template ID
      formRef.current, // The form reference as the third parameter
      'JGnx-aH8FvN0QfhGM' // Your EmailJS public key
    )
      .then(
        (result) => {
          console.log('Email successfully sent:', result.text);
          alert('Message sent successfully!');
          setLoading(false);
          // Reset the form after sending
          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          console.error('Error sending email:', error);
          alert('Failed to send the message. Please try again.');
          setLoading(false);
        }
      );
  };

  return (
    <Vortex
      backgroundColor="black"
      rangeY={800}
      particleCount={500}
      baseHue={200}
      className="flex flex-col items-center justify-center px-4 py-8 w-full min-h-screen"
    >
      <h3 className="text-5xl text-white mb-10 font-bold">Contact</h3>
      <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
        
        {/* Container for the form and social media icons with increased width */}
        <div className=' bg-gray-800 p-10 rounded-2xl flex flex-col gap-8 w-full'>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'
          >
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className='bg-gray-700 py-4 px-6 text-white placeholder-gray-400 rounded-lg outline-none border-none font-medium'
              />
            </label>

            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                className='bg-gray-700 py-4 px-6 text-white placeholder-gray-400 rounded-lg outline-none border-none font-medium'
              />
            </label>

            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Message</span>
              <textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='What do you want to say?'
                className='bg-gray-700 py-4 px-6 placeholder-gray-400 text-white rounded-lg outline-none border-none font-medium'
              />
            </label>

            <button
              type='submit'
              className='bg-indigo-600 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>

          {/* Social Media Icons Section */}
          <h3 className="text-3xl text-white mt-5">Get connected on Social Media</h3>
          <div className="flex space-x-6 mt-4">
            <a href="https://github.com/ShirodkarFalashree" target="_blank" rel="noopener noreferrer" className="text-white text-2xl">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://twitter.com/FalashreeS" target="_blank" rel="noopener noreferrer" className="text-white text-2xl">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.linkedin.com/in/shirodkarfalashree/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
           
          </div>
        </div>

      </div>
    </Vortex>
  );
};

export default Contact;
