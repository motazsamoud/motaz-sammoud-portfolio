import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/Me.jpg";

const ProfileSection: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden select-none bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="absolute top-0 left-0 w-full h-full bg-opacity-40" />

      <motion.img
        src={profileImage}
        alt="Motaz Sammoud"
        className="w-40 h-40 md:w-60 md:h-60 rounded-full border-4 border-white mb-6 object-contain shadow-xl z-10 select-none bg-white"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4 text-white z-10 select-none"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Motaz Sammoud
      </motion.h1>

      <motion.p
        className="text-2xl md:text-3xl text-gray-100 z-10 select-none"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        Full Stack Engineer & DevOps Specialist
      </motion.p>

      <motion.p
        className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mt-4 px-6 z-10 select-none"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        I’m a computer engineer specialized in full stack development (frontend & backend) for both web and mobile platforms. I have strong expertise in DevOps and Cloud Computing, especially with AWS. My mission is to deliver scalable, secure, and high-performance digital solutions by combining clean architecture with innovative technologies.
      </motion.p>
    </section>
  );
};

export default ProfileSection;
