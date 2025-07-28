
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code, Brain, User, Briefcase, FolderOpen, Mail } from 'lucide-react';

export default function Navbar() {
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
    { name: 'Home', href: '#home', icon: Code },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Brain },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Projects', href: '#projects', icon: FolderOpen },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-gray-900/80 backdrop-blur-md border-b border-white/10 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl blur-md"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Ruhul Ain
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-4 py-2 rounded-xl text-gray-300 hover:text-white transition-all duration-300"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="relative z-10 flex items-center space-x-2 font-medium">
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.05 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 transition-all duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                className="py-4 space-y-2 bg-gray-900/95 backdrop-blur-md rounded-2xl border border-white/10 mt-4 mx-4"
              >
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="w-full text-left px-6 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 rounded-xl mx-2"
                  >
                    <span className="flex items-center space-x-3">
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.name}</span>
                    </span>
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
