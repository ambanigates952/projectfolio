import React from 'react';
import type { FC } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

const CallToAction: FC = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)]" />

      <div className="container relative z-10 mx-auto px-4 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Main Heading */}
          <div className="space-y-4">
            <motion.h2 
              className="text-7xl md:text-9xl font-bold tracking-tight"
              style={{
                background: 'linear-gradient(to right, #FFFFFF 0%, #4A4A4A 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 80px rgba(255,255,255,0.1)'
              }}
            >
              LET'S CONNECT
            </motion.h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Ready to bring your next big idea to life? I'm always excited to collaborate on innovative projects.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-3 gap-8 my-16">
            {[
              {
                icon: <Mail className="w-6 h-6 text-blue-400" />,
                text: "sharmarohitt08@gmail.com",
                bg: "bg-blue-500/10",
                href: "mailto:sharmarohitt08@gmail.com"
              },
              {
                icon: <Phone className="w-6 h-6 text-green-400" />,
                text: "7011582252",
                bg: "bg-green-500/10",
                href: "tel:+917011582252"
              },
              {
                icon: <MapPin className="w-6 h-6 text-purple-400" />,
                text: "R-10/151, Rajnagar, Ghaziabad",
                bg: "bg-purple-500/10",
                href: "https://maps.google.com/?q=R-10/151,Rajnagar,Ghaziabad"
              }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ y: -5, scale: 1.02 }}
                className="flex flex-col items-center space-y-3 p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all cursor-pointer group"
              >
                <div className={`w-12 h-12 ${item.bg} rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <p className="text-gray-300">{item.text}</p>
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a 
              href="mailto:sharmarohitt08@gmail.com"
              className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-lg text-xl font-semibold hover:bg-gray-100 transition group"
            >
              <Mail className="w-6 h-6" />
              Start a Conversation
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction; 