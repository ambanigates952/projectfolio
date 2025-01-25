import { FC } from 'react';
import Link from 'next/link';
import { Linkedin, Mail, Dribbble } from 'lucide-react';

const Footer: FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold">Rohit Sharma</h3>
            <p className="text-gray-400">Creative Director & Product Designer</p>
          </div>
          <div className="flex space-x-6">
            <Link 
              href="https://dribbble.com/birdieffect_studios" 
              target="_blank" 
              className="hover:text-pink-500 transition"
              aria-label="Dribbble Profile"
            >
              <Dribbble size={24} />
            </Link>
            <Link 
              href="https://www.linkedin.com/in/rohit-sharma-18750b261/" 
              target="_blank" 
              className="hover:text-blue-500 transition"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </Link>
            <Link 
              href="mailto:sharmarohitt08@gmail.com" 
              className="hover:text-red-500 transition"
              aria-label="Email Contact"
            >
              <Mail size={24} />
            </Link>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Rohit Sharma. All rights reserved. 
            <span className="block md:inline md:ml-2">
              Check out my work on{' '}
              <Link 
                href="https://dribbble.com/birdieffect_studios"
                target="_blank"
                className="text-pink-500 hover:text-pink-400 transition"
              >
                Dribbble
              </Link>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 