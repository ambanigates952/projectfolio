import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SkillSection from '../components/SkillSection';
import ExperienceTimeline from '../components/ExperienceTimeline';
import CallToAction from '../components/CallToAction';
import ContactForm from '../components/ContactForm';

const Home: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState(0);
  const skills = [
    "Crafting innovative design solutions",
    "Leading creative direction & strategy",
    "Building impactful user experiences"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkill((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Rohit_Sharma_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Head>
        <title>Rohit Sharma - Product Designer</title>
        <meta name="description" content="Portfolio of Rohit Sharma - Creative Director & Product Designer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-white font-bold text-xl">
              Rohit.design
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="#skills" className="text-gray-300 hover:text-white">Skills</Link>
              <Link href="#experience" className="text-gray-300 hover:text-white">Experience</Link>
              <Link href="#contact" className="text-gray-300 hover:text-white">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <section className="hero min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
          <div className="gradient-ball ball-1"></div>
          <div className="gradient-ball ball-2"></div>

          <div className="relative z-10 text-center px-4">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-fade-in">
              Rohit Sharma
            </h1>
            <h2 className="text-2xl md:text-4xl text-gray-300 mb-12 animate-fade-in-delay">
              Creative Director | Product Designer
            </h2>

            <div className="skill-showcase mb-16 animate-fade-in-delay-2">
              <p className="text-xl md:text-2xl text-gray-200">
                {skills[activeSkill]}
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-6">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-lg text-xl hover:bg-blue-700 transition">
                View Projects
              </button>
              <button 
                onClick={handleDownloadResume}
                className="px-8 py-4 border border-white text-white rounded-lg text-xl hover:bg-white hover:text-black transition"
              >
                Download Resume
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home; 