import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';
import profilePhoto from '../assets/photo_2026-06-29_09-03-33.jpg';

const Hero = () => {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ['AI Engineer', 'Data Scientist', 'Machine Learning Developer'];
  const fullText = roles[roleIndex];

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [roleIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden grid-bg">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-600/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        {/* Profile Image */}
        <motion.div variants={itemVariants} className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary-500 via-purple-500 to-cyan-500 p-1 glow-effect">
              <img 
                src={profilePhoto} 
                alt="Ermiyas Zewdu" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="heading-xl mb-6"
        >
          Ermiyas <span className="gradient-text">Zewdu</span>
        </motion.h1>

        <motion.div variants={itemVariants} className="h-16 mb-6">
          <p className="text-2xl md:text-4xl gradient-text font-semibold">
            {text}
            <span className="animate-pulse">|</span>
          </p>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto"
        >
          Turning data into intelligent systems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all hover:scale-105"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="px-8 py-4 glass rounded-lg font-semibold hover:bg-white/10 transition-all hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="/Ermiya_Resume.pdf"
            download
            className="px-8 py-4 glass rounded-lg font-semibold hover:bg-white/10 transition-all hover:scale-105 flex items-center gap-2"
          >
            <Download size={20} />
            Resume
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex gap-6 justify-center"
        >
          <a
            href="https://github.com/ERMIYASZEWDU"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 glass rounded-full hover:bg-primary-600/20 transition-all hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/ermiyas2"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 glass rounded-full hover:bg-primary-600/20 transition-all hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:ermiyaszewdu266@gmail.com"
            className="p-4 glass rounded-full hover:bg-primary-600/20 transition-all hover:scale-110"
          >
            <Mail size={24} />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown size={32} className="text-primary-400" />
      </motion.div>
    </section>
  );
};

export default Hero;
