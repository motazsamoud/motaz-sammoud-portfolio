import React from "react";
import { motion } from "framer-motion";
import {
  FaAws,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiFlutter,
  SiDart,
  SiSpring,
  SiNextdotjs,
  SiVuedotjs,
} from "react-icons/si";

// @ts-ignore
import alzmindLogo from "../assets/logo.png";
// @ts-ignore
import awsCert from "../assets/aws.png";
// @ts-ignore
import interLogo from "../assets/inter.png";
// @ts-ignore
import teamwillLogo from "../assets/teamwill.png";

const ExperienceSection: React.FC = () => {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden select-none p-6 md:p-12"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
        Experience
      </h2>
      <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-6">
        From mobile development to DevOps and full-stack solutions, here’s what
        I’ve built and learned.
      </p>

      <motion.div
        className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {/* AlzMind App */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center gap-2 mb-2">
            <img src={alzmindLogo} alt="AlzMind" className="w-10 h-10" />
            <h3 className="text-2xl font-semibold text-gray-800">AlzMind App</h3>
          </div>
          <p className="text-gray-600 mt-2">
            A smart app to connect Alzheimer patients, their doctors, and their
            families. Built using Flutter for both mobile and web with Firebase
            integration and clean architecture.
          </p>
          <div className="flex gap-2 text-blue-500 mt-4">
            <SiFlutter size={24} />
            <SiDart size={24} />
            <FaGitAlt size={24} />
            <FaDocker size={24} />
          </div>
        </div>

        {/* Tutorial App */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
            <FaReact className="text-blue-500" /> Tutorial App
          </h3>
          <p className="text-gray-600 mt-2">
            Developed a MERN stack app with scraped course data for ESPRIT
            students.
          </p>
          <div className="flex gap-2 text-blue-500 mt-4">
            <FaGitAlt size={24} />
            <SiMongodb size={24} />
            <FaNodeJs size={24} />
            <FaPython size={24} />
            <FaReact size={24} />
          </div>
        </div>

        {/* TEAMWILL Internship */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <a
            href="https://www.teamwillgroup.com/fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 mb-2"
          >
            <img
              src={teamwillLogo}
              alt="TEAMWILL"
              className="w-10 h-10 rounded"
            />
            <h3 className="text-2xl font-semibold text-gray-800">
              Web Development Intern – TEAMWILL
            </h3>
          </a>
          <p className="text-gray-600 mt-2">
            Contributed to a hybrid web project using Spring Boot, MVC, and
            modern frontend frameworks like Vue.js and Next.js.
          </p>
          <div className="flex gap-2 text-green-600 mt-4">
            <SiSpring size={24} />
            <SiNextdotjs size={24} />
            <SiVuedotjs size={24} />
            <FaGitAlt size={24} />
          </div>
        </div>

        {/* INTERCOM Internship */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <a
            href="https://www.intercom-technologies.fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 mb-2"
          >
            <img
              src={interLogo}
              alt="INTERCOM"
              className="w-10 h-10 rounded"
            />
            <h3 className="text-2xl font-semibold text-gray-800">
              Mobile Dev Intern – INTERCOM
            </h3>
          </a>
          <p className="text-gray-600 mt-2">
            Developed a cross-platform mobile app using Flutter. Applied Clean
            Architecture and Firebase integration for user and data management.
          </p>
          <div className="flex gap-2 text-purple-500 mt-4">
            <SiFlutter size={24} />
            <SiDart size={24} />
            <FaGitAlt size={24} />
          </div>
        </div>

        {/* AWS Certification */}
        <div className="bg-white p-6 rounded-lg shadow-lg col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-2">
            <img src={awsCert} alt="AWS Certified" className="w-10 h-10" />
            <h3 className="text-2xl font-semibold text-gray-800">
              AWS Certified Cloud Practitioner
            </h3>
          </div>
          <p className="text-gray-600">
            Certified in AWS Cloud fundamentals including cloud architecture,
            billing & pricing, and deployment models.
          </p>
          <div className="flex gap-2 text-yellow-500 mt-4">
            <FaAws size={24} />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ExperienceSection;
