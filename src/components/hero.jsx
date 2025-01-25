import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Layers, PenTool } from 'lucide-react';

const Hero = () => {
  const [activeSkill, setActiveSkill] = useState(0);
  const skills = [
    { 
      icon: <PenTool className="w-16 h-16 text-blue-500" />, 
      text: "Crafting innovative design solutions" 
    },
    { 
      icon: <Layers className="w-16 h-16 text-green-500" />, 
      text: "Leading creative direction & strategy" 
    },
    { 
      icon: <Code className="w-16 h-16 text-purple-500" />, 
      text: "Building impactful user experiences" 
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkill((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Gradient Balls Background */}
      <motion.div 
        className="absolute top-0 left-0 w-[900px] h-[900px] bg-gradient-to-br from-blue-600/20 via-purple-600/15 to-pink-600/10 rounded-full -translate-x-1/2 -translate-y-1/2"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 0.9, 1],
          x: [0, 50, -50, 0],
          y: [0, -50, 50, 0]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-green-600/15 via-teal-600/10 to-cyan-600/5 rounded-full translate-x-1/2 translate-y-1/2"
        animate={{ 
          rotate: [0, -360],
          scale: [1, 0.9, 1.1, 1],
          x: [0, -50, 50, 0],
          y: [0, 50, -50, 0]
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center px-8 max-w-6xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-8xl font-bold mb-8 text-white tracking-tight"
        >
          Rohit Sharma
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl mb-12 text-gray-300"
        >
          Creative Director | Product Designer
        </motion.h2>

        {/* Dynamic Skills Showcase */}
        <motion.div 
          key={activeSkill}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center space-x-6 mb-16"
        >
          {skills[activeSkill].icon}
          <p className="text-2xl text-gray-200">
            {skills[activeSkill].text}
          </p>
        </motion.div>

        {/* Call to Action Buttons */}
        <div className="flex justify-center space-x-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-xl shadow-lg hover:bg-blue-700 transition-colors"
          >
            View Projects
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-white text-white px-8 py-4 rounded-lg text-xl hover:bg-white hover:text-black transition-all"
          >
            Download Resume
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Hero; 