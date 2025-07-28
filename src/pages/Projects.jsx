
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const projects = [
    {
      title: "AI-Powered Chatbot",
      description: "Advanced conversational AI system built with TensorFlow and PyTorch, featuring natural language processing and contextual understanding.",
      tech: ["Python", "TensorFlow", "PyTorch", "NLP", "React.js"],
      features: ["Natural Language Processing", "Context Understanding", "Multi-language Support", "Real-time Responses"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "HRMS with Geotagging",
      description: "Comprehensive Human Resource Management System with advanced geotagging capabilities and real-time dashboard analytics.",
      tech: ["React.js", "Node.js", "MongoDB", "Google Maps API", "Socket.io"],
      features: ["Employee Tracking", "Attendance Management", "Geolocation Services", "Real-time Dashboard"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Loan Management System",
      description: "Full-featured loan processing platform with automated workflows, document management, and advanced analytics.",
      tech: ["Java", "Spring Boot", "MySQL", "React.js", "Chart.js"],
      features: ["Automated Processing", "Document Management", "Payment Tracking", "Analytics Dashboard"],
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Advanced React UI Kit",
      description: "Modern, responsive UI component library built with React.js, Tailwind CSS, and Framer Motion for smooth animations.",
      tech: ["React.js", "Tailwind CSS", "Framer Motion", "TypeScript", "Storybook"],
      features: ["50+ Components", "Dark/Light Mode", "Smooth Animations", "Fully Responsive"],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="projects" ref={ref} className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-900 p-8 rounded-2xl hover:transform hover:scale-105 transition-all duration-300 group shadow-2xl border border-gray-700 hover:border-indigo-500/50"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>
                <div className="flex space-x-2">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="p-2 bg-gray-800 rounded-lg hover:bg-indigo-600 transition-colors duration-300 cursor-pointer"
                  >
                    <Github className="text-gray-400 hover:text-white transition-colors" size={18} />
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="p-2 bg-gray-800 rounded-lg hover:bg-indigo-600 transition-colors duration-300 cursor-pointer"
                  >
                    <ExternalLink className="text-gray-400 hover:text-white transition-colors" size={18} />
                  </motion.div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
              
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-4">Key Features:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-3 bg-gray-800/50 p-3 rounded-lg">
                      <div className={`w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full`}></div>
                      <span className="text-gray-300 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
