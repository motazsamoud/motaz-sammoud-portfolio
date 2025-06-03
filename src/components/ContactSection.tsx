import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const ContactSection: React.FC = () => {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden select-none p-6 md:p-12"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
        Contact
      </h2>
      <motion.div
        className="w-full max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-lg md:text-xl text-gray-200 mb-6">
          Feel free to reach out to me on LinkedIn, GitHub, Facebook, Instagram,
          or via email!
        </p>
        <a
          href="mailto:motaz.sammoud11@gmail.com"
          className=" text-white hover:text-blue-400  mb-4 block"
        >
          <FaEnvelope className="inline mr-2" /> motaz.sammoud11@gmail.com
        </a>
        <div className="flex justify-center space-x-6 text-white text-2xl">
          <a
            href="https://www.linkedin.com/in/motaz-sammoud-64881a244/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-blue-600" />
          </a>
          <a
            href="https://github.com/motazsamoud?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-gray-700" />
          </a>
          <a
            href="https://www.facebook.com/motaz.sammoud.2025/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="hover:text-blue-700" />
          </a>
          <a
            href="https://www.instagram.com/motazsammoud/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-pink-600" />
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ContactSection;
