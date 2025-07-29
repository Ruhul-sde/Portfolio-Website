
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail, Github, Linkedin, Brain, Code, Rocket, Star, Zap } from 'lucide-react';
import AnimatedBrain from './AnimatedBrain';

export default function Hero() {
  const scrollToNext = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBrain />
      
      {/* Improved overlay with subtle texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-transparent to-gray-900/60 backdrop-blur-[1px]" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Enhanced Professional Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-md border border-indigo-400/20 rounded-full px-8 py-4 mb-8 shadow-2xl"
          >
            <div className="relative">
              <Brain className="w-6 h-6 text-indigo-400" />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-indigo-400/20 blur-sm"
              />
            </div>
            <span className="text-indigo-300 font-semibold text-lg">Software Engineer & AI Enthusiast</span>
            <Zap className="w-5 h-5 text-yellow-400" />
          </motion.div>

          {/* Professional Main Heading */}
          <div className="space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight"
            >
              <motion.span 
                className="block text-white mb-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
              >
                Hello, I'm
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
              >
                Ruhul Amin
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 blur-lg rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ delay: 1.2, duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
              className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light max-w-5xl mx-auto leading-relaxed"
            >
              <motion.span 
                className="block mb-6 text-gray-200 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.6 }}
              >
                Transforming ideas into digital reality through
              </motion.span>
              
              <div className="space-y-4">
                {[
                  { 
                    text: "Full-Stack Development", 
                    colors: "from-blue-500 to-indigo-600", 
                    delay: 1.3,
                    description: "MERN Stack • SAP Solutions • APIs"
                  },
                  { 
                    text: "AI & Machine Learning", 
                    colors: "from-emerald-500 to-teal-600", 
                    delay: 1.5,
                    description: "TensorFlow • PyTorch • Intelligent Systems"
                  },
                  { 
                    text: "Modern UI/UX Design", 
                    colors: "from-purple-500 to-pink-600", 
                    delay: 1.7,
                    description: "React • Tailwind • Framer Motion"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: item.delay, 
                      duration: 0.6, 
                      ease: "easeOut" 
                    }}
                    className="group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.02, x: 10 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-indigo-400/30 transition-all duration-300"
                    >
                      <motion.h3
                        className={`text-2xl md:text-3xl font-semibold mb-2 bg-gradient-to-r ${item.colors} bg-clip-text text-transparent`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: item.delay + 0.2, duration: 0.6 }}
                      >
                        {item.text}
                      </motion.h3>
                      <motion.p
                        className="text-gray-400 text-base font-normal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: item.delay + 0.4, duration: 0.6 }}
                      >
                        {item.description}
                      </motion.p>
                      
                      {/* Subtle hover effect */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${item.colors} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                        initial={false}
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Enhanced Professional Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto my-16"
          >
            {[
              { icon: Code, number: "1+", label: "Years Experience", color: "text-blue-400", bgColor: "from-blue-500/10 to-blue-600/5" },
              { icon: Rocket, number: "15+", label: "Projects Delivered", color: "text-green-400", bgColor: "from-green-500/10 to-green-600/5" },
              { icon: Brain, number: "10+", label: "Technologies", color: "text-purple-400", bgColor: "from-purple-500/10 to-purple-600/5" },
              { icon: Star, number: "100%", label: "Client Satisfaction", color: "text-pink-400", bgColor: "from-pink-500/10 to-pink-600/5" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="group relative"
              >
                <div className={`bg-gradient-to-br ${stat.bgColor} backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-indigo-400/30 transition-all duration-500 shadow-xl`}>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <stat.icon className={`w-10 h-10 ${stat.color} mx-auto mb-4 filter drop-shadow-lg`} />
                  </motion.div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-mono">{stat.number}</div>
                  <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
                  
                  {/* Hover effect background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.02 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-10 py-5 rounded-2xl font-semibold text-lg shadow-2xl transition-all duration-300"
            >
              <span className="relative z-10 flex items-center space-x-3">
                <Download className="w-6 h-6" />
                <span>Download Resume</span>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              <motion.div
                className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-2xl blur-xl"
                initial={false}
              />
            </motion.button>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-transparent border-2 border-indigo-400/50 hover:bg-indigo-500/20 text-indigo-300 hover:text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
            >
              <span className="flex items-center space-x-3">
                <Mail className="w-6 h-6" />
                <span>Let's Connect</span>
              </span>
              <motion.div
                className="absolute inset-0 border-2 border-indigo-400 rounded-2xl scale-110 opacity-0 group-hover:opacity-50 transition-all duration-300"
                initial={false}
              />
            </motion.a>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex justify-center space-x-8 mt-12"
          >
            {[
              { icon: Github, href: "#", label: "GitHub", color: "hover:bg-gray-600/20" },
              { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-600/20" },
              { icon: Mail, href: "#contact", label: "Email", color: "hover:bg-green-600/20" }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className={`group relative p-5 bg-white/5 ${social.color} rounded-2xl border border-white/10 hover:border-indigo-400/50 transition-all duration-300 backdrop-blur-sm`}
              >
                <social.icon className="w-7 h-7 text-gray-300 group-hover:text-white transition-colors duration-300" />
                <span className="sr-only">{social.label}</span>
                
                {/* Tooltip */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg pointer-events-none"
                >
                  {social.label}
                </motion.div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToNext}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.1 }}
            className="group p-4 rounded-full border-2 border-white/20 hover:border-indigo-400/50 transition-all duration-300 backdrop-blur-sm bg-white/5"
          >
            <ChevronDown className="w-6 h-6 text-gray-300 group-hover:text-indigo-400 transition-colors duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
