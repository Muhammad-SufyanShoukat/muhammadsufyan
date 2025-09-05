'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Home, User, Code, Briefcase, Mail, ChevronDown, Github, Linkedin } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  // const scrollToSection = (href: string) => {
  //   setIsOpen(false);
    
  //   // Small delay to allow mobile menu to close first
  //   setTimeout(() => {
  //     const element = document.querySelector(href);
  //     if (element) {
  //       const navHeight = 80; // Account for fixed navigation height
  //       const elementPosition = element.offsetTop - navHeight;
  //       window.scrollTo({
  //         top: elementPosition,
  //         behavior: 'smooth'
  //       });
  //     }
  //   }, 100);
  // };

  const scrollToSection = (href: string) => {
  setIsOpen(false);

  // Small delay to allow mobile menu to close first
  setTimeout(() => {
    const element = document.querySelector(href);
    if (element instanceof HTMLElement) { // ✅ Type guard
      const navHeight = 80; // Account for fixed navigation height
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }, 100);
};

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg'
          : 'bg-gray-900/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Portfolio
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                <item.icon size={18} />
                <span>{item.name}</span>
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors text-gray-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden overflow-hidden bg-gray-900/98 backdrop-blur-md rounded-lg mt-2 shadow-xl border border-gray-700"
        >
          <div className="py-6 px-4 space-y-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isOpen ? 1 : 0, 
                  x: isOpen ? 0 : -20 
                }}
                transition={{ 
                  delay: isOpen ? index * 0.1 : 0,
                  duration: 0.3 
                }}
                whileHover={{ 
                  x: 8, 
                  backgroundColor: "rgba(59, 130, 246, 0.1)",
                  scale: 1.02
                }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center space-x-4 w-full text-left px-6 py-4 rounded-xl text-gray-300 hover:text-blue-400 transition-all duration-200 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <item.icon size={22} className="relative z-10" />
                <span className="relative z-10 font-medium">{item.name}</span>
                <motion.div 
                  className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  whileHover={{ x: 2 }}
                >
                  <ChevronDown size={16} className="rotate-[-90deg]" />
                </motion.div>
              </motion.button>
            ))}
            
            {/* Mobile Social Links */}
            <div className="pt-4 mt-4 border-t border-gray-700">
              <div className="flex justify-center space-x-6">
                <motion.a
                  href="https://github.com/Muhammad-SufyanShoukat"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-gray-800 hover:bg-blue-900/30 transition-colors duration-200"
                >
                  <Github size={20} className="text-gray-400" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/muhammad-sufyan12/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-gray-800 hover:bg-blue-900/30 transition-colors duration-200"
                >
                  <Linkedin size={20} className="text-gray-400" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;