import React from "react";
import { motion } from "framer-motion";
import {
  FaAws,
  FaDocker,
  FaGitAlt,
  FaJenkins,
  FaReact,
  FaNodeJs,
  FaAngular,
  FaJava,
  FaGithub,
  FaAndroid,
} from "react-icons/fa";
import {
  SiTerraform,
  SiAzuredevops,
  SiKubernetes,
  SiPrometheus,
  SiGrafana,
  SiAnsible,
  SiNextdotjs,
  SiDjango,
  SiFlask,
  SiLaravel,
  SiNestjs,
  SiSymfony,
  SiSpring,
  SiJavascript,
  SiDotnet,
  SiKotlin,
  SiSwift,
  SiFlutter,
  SiDart,
  SiVuedotjs,
} from "react-icons/si";

const SkillsSection: React.FC = () => {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden select-none p-6 md:p-12"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Skills</h2>

      <motion.div
        className="w-full max-w-5xl flex flex-col space-y-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {/* Cloud Section */}
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-xl font-semibold text-gray-300">Cloud</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex flex-col items-center">
              <FaAws className="text-5xl text-[#FF9900]" />
              <span className="text-sm mt-1 text-white">AWS</span>
            </div>
          </div>
        </div>

        {/* DevOps Section */}
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-xl font-semibold text-gray-300">DevOps</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[ 
              { icon: FaGitAlt, name: 'Git', color: '#F05033' },
              { icon: FaGithub, name: 'GitHub', color: '#ffffff' },
              { icon: SiAnsible, name: 'Ansible', color: '#EE0000' },
              { icon: SiTerraform, name: 'Terraform', color: '#623CE4' },
              { icon: SiKubernetes, name: 'Kubernetes', color: '#326CE5' },
              { icon: FaDocker, name: 'Docker', color: '#2496ED' },
              { icon: FaJenkins, name: 'Jenkins', color: '#D24939' },
              { icon: SiPrometheus, name: 'Prometheus', color: '#E6522C' },
              { icon: SiGrafana, name: 'Grafana', color: '#F46800' },
              { icon: SiAzuredevops, name: 'Azure DevOps', color: '#0078D7' },
            ].map((tool, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <tool.icon className="text-5xl" style={{ color: tool.color }} />
                <span className="text-sm mt-1 text-white">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Web Development Section */}
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-xl font-semibold text-gray-300">Web Development</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: FaReact, name: 'React', color: '#61DAFB' },
              { icon: SiNextdotjs, name: 'Next.js', color: '#000' },
              { icon: FaNodeJs, name: 'Node.js', color: '#68A063' },
              { icon: SiNestjs, name: 'NestJS', color: '#E0234E' },
              { icon: FaAngular, name: 'Angular', color: '#DD0031' },
              { icon: SiSpring, name: 'Spring Boot', color: '#6DB33F' },
              { icon: SiDotnet, name: '.NET', color: '#512BD4' },
              { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
              { icon: SiLaravel, name: 'Laravel', color: '#FF2D20' },
              { icon: SiSymfony, name: 'Symfony', color: '#000' },
              { icon: SiVuedotjs, name: 'Vue.js', color: '#42b883' },
              { icon: SiDjango, name: 'Django', color: '#092E20' },
              { icon: SiFlask, name: 'Flask', color: '#000' },
            ].map((tool, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <tool.icon className="text-5xl" style={{ color: tool.color }} />
                <span className="text-sm mt-1 text-white">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Development Section */}
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-xl font-semibold text-gray-300">Mobile Development</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: SiFlutter, name: 'Flutter', color: '#02569B' },
              { icon: SiDart, name: 'Dart', color: '#0175C2' },
              { icon: FaAndroid, name: 'Android', color: '#3DDC84' },
              { icon: FaJava, name: 'Java', color: '#007396' },
              { icon: SiKotlin, name: 'Kotlin', color: '#7F52FF' },
              { icon: SiSwift, name: 'Swift (iOS)', color: '#FA7343' },
            ].map((tool, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <tool.icon className="text-5xl" style={{ color: tool.color }} />
                <span className="text-sm mt-1 text-white">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default SkillsSection;
