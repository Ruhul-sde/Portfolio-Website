
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, GraduationCap, Briefcase, Award, Code2, Brain, Users } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const achievements = [
    {
      icon: GraduationCap,
      title: "Computer Science Graduate",
      subtitle: "Cooch Behar Government Engineering College (2024)",
      description: "Graduated with strong foundation in software engineering principles and modern development practices."
    },
    {
      icon: Briefcase,
      title: "Professional Experience",
      subtitle: "Akshay Software Technologies Pvt. Ltd.",
      description: "1+ years of hands-on experience in SAP solutions, HRMS development, and enterprise applications."
    },
    {
      icon: Code2,
      title: "Full-Stack Expertise",
      subtitle: "MERN Stack & Modern Technologies",
      description: "Proficient in React.js, Node.js, MongoDB, Express.js, and cutting-edge development tools."
    },
    {
      icon: Brain,
      title: "AI/ML Innovation",
      subtitle: "TensorFlow & PyTorch",
      description: "Developing intelligent solutions with machine learning and artificial intelligence technologies."
    }
  ];

  const stats = [
    { icon: Calendar, label: "Experience", value: "1+ Years" },
    { icon: Code2, label: "Projects", value: "15+ Completed" },
    { icon: Users, label: "Clients", value: "100% Satisfied" },
    { icon: Award, label: "Technologies", value: "10+ Mastered" }
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm border border-indigo-500/30 rounded-full px-6 py-3 mb-6"
          >
            <Users className="w-5 h-5 text-indigo-400" />
            <span className="text-indigo-300 font-medium">About Me</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Crafting Digital
            <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Experiences
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A passionate software engineer dedicated to building innovative solutions that bridge 
            cutting-edge technology with exceptional user experiences.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Professional Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Briefcase className="w-7 h-7 text-indigo-400 mr-3" />
                Professional Journey
              </h3>
              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  I'm a dedicated <span className="text-indigo-400 font-semibold">Software Engineer</span> with 
                  <span className="text-purple-400 font-semibold"> 1+ years of professional experience</span> at 
                  Akshay Software Technologies Pvt. Ltd., where I specialize in 
                  <span className="text-indigo-400 font-semibold"> SAP solutions</span> and 
                  <span className="text-purple-400 font-semibold"> enterprise application development</span>.
                </p>
                <p className="text-lg leading-relaxed">
                  As a <span className="text-indigo-400 font-semibold">Computer Science graduate (2024)</span> from 
                  Cooch Behar Government Engineering College, I bring a strong foundation in software engineering 
                  principles combined with hands-on industry experience in modern development practices.
                </p>
                <p className="text-lg leading-relaxed">
                  My expertise spans <span className="text-indigo-400 font-semibold">Full-Stack Development (MERN stack)</span>, 
                  <span className="text-purple-400 font-semibold"> AI/ML technologies</span>, and 
                  <span className="text-green-400 font-semibold"> modern UI/UX design</span>. 
                  I'm passionate about creating scalable, efficient solutions that solve real-world problems.
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center hover:border-indigo-500/50 transition-all duration-300"
                >
                  <stat.icon className="w-8 h-8 text-indigo-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors duration-300">
                      {achievement.title}
                    </h4>
                    <p className="text-indigo-400 font-semibold text-sm mb-3">
                      {achievement.subtitle}
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Professional Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-indigo-600/10 to-purple-600/10 backdrop-blur-sm border border-indigo-500/20 rounded-3xl p-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ delay: 1.4 }}
              className="mb-8"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
            </motion.div>
            <blockquote className="text-2xl md:text-3xl text-gray-200 font-light italic mb-6 leading-relaxed">
              "Technology is not just about writing code—it's about creating possibilities, 
              solving real problems, and building the digital future that enhances human potential."
            </blockquote>
            <div className="flex items-center justify-center space-x-2 text-indigo-400 font-semibold">
              <span className="w-8 h-0.5 bg-indigo-400"></span>
              <span>My Development Philosophy</span>
              <span className="w-8 h-0.5 bg-indigo-400"></span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
