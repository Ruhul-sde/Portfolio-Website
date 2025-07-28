
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail, Github, Linkedin, Brain, Code, Rocket } from 'lucide-react';
import AnimatedBrain from './AnimatedBrain';

export default function Hero() {
  const scrollToNext = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBrain />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Professional Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm border border-indigo-500/30 rounded-full px-6 py-3 mb-8"
          >
            <Brain className="w-5 h-5 text-indigo-400" />
            <span className="text-indigo-300 font-medium">Software Engineer & AI Enthusiast</span>
          </motion.div>

          {/* Main Heading */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
            >
              <span className="block text-white mb-2">Hello, I'm</span>
              <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ruhul Ain
              </span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light max-w-4xl mx-auto leading-relaxed"
            >
              <span className="block mb-2">Building the future with</span>
              <div className="flex flex-wrap justify-center items-center gap-4">
                <motion.span
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-semibold bg-[length:200%_100%]"
                >
                  Full-Stack Development
                </motion.span>
                <span className="text-gray-500">•</span>
                <motion.span
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent font-semibold bg-[length:200%_100%]"
                >
                  AI/ML Innovation
                </motion.span>
                <span className="text-gray-500">•</span>
                <motion.span
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                  className="bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent font-semibold bg-[length:200%_100%]"
                >
                  Modern UI/UX
                </motion.span>
              </div>
            </motion.div>
          </div>

          {/* Professional Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto my-12"
          >
            {[
              { icon: Code, number: "1+", label: "Years Experience", color: "text-blue-400" },
              { icon: Rocket, number: "15+", label: "Projects Delivered", color: "text-green-400" },
              { icon: Brain, number: "10+", label: "Technologies", color: "text-purple-400" },
              { icon: Github, number: "100%", label: "Client Satisfaction", color: "text-pink-400" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-indigo-500/50 transition-all duration-300">
                  <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`} />
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl transition-all duration-300"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </motion.button>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-transparent border-2 border-indigo-500 hover:bg-indigo-500 text-indigo-400 hover:text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300"
            >
              <span className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>Let's Connect</span>
              </span>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex justify-center space-x-6 mt-8"
          >
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "#contact", label: "Email" }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="group relative p-4 bg-gray-800/50 hover:bg-indigo-600/20 rounded-2xl border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300"
              >
                <social.icon className="w-6 h-6 text-gray-400 group-hover:text-indigo-400 transition-colors duration-300" />
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToNext}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="group p-2 rounded-full border border-gray-600 hover:border-indigo-500 transition-colors duration-300"
          >
            <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-indigo-400 transition-colors duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
