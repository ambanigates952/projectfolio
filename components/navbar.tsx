import { FC } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar: FC = () => {
  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-white font-bold text-xl">
            Rohit.design
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#skills" className="text-gray-300 hover:text-white transition">
              Skills
            </Link>
            <Link href="#experience" className="text-gray-300 hover:text-white transition">
              Experience
            </Link>
            <Link href="#projects" className="text-gray-300 hover:text-white transition">
              Projects
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-white transition">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 