import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa"; // ✅ importer une icône sympa

const EducationSection: React.FC = () => {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden select-none p-6 md:p-12"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
        Education
      </h2>

      <motion.div
        className="w-full max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >

        {/* ESPRIT */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <a
            href="https://www.esprit.tn/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-semibold text-blue-600 hover:underline"
          >
            ESPRIT – École Supérieure Privée d'Ingénierie et de Technologie
          </a>
          <p className="text-gray-600 mt-2">
            Engineering degree in Computer Science with a specialization in mobile development.
          </p>
        </div>

        {/* ✅ Baccalauréat */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6 flex items-start gap-4 text-left">
          <FaGraduationCap className="text-blue-500 text-3xl mt-1" />
          <div>
            <p className="text-xl font-semibold text-gray-800">
              Baccalauréat Technique – Tunisie
            </p>
            <p className="text-gray-600">
              Mention Passable – Moyenne : <span className="font-bold">12.64</span>
            </p>
            <p className="text-gray-500 text-sm mt-1">2020</p>
          </div>
        </div>

      </motion.div>
    </motion.section>
  );
};

export default EducationSection;
