
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award } from 'lucide-react';

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const experiences = [
    {
      title: "Software Engineer",
      company: "Akshay Software Technologies Pvt. Ltd.",
      period: "2024 - Present",
      description: "Specialized in SAP solutions and staffing systems. Developed HRMS products with advanced features including geotagging, dashboard modules, and WCF API integrations.",
      achievements: [
        "Developed comprehensive HRMS with geotagging functionality",
        "Built advanced dashboard modules for HR analytics",
        "Integrated WCF APIs for seamless data communication",
        "Implemented Loan Management and Leave Management systems"
      ]
    }
  ];

  return (
    <section id="experience" ref={ref} className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Professional Experience</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gradient-to-r from-gray-800 to-gray-700 p-8 rounded-2xl border-l-4 border-indigo-600 shadow-2xl"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <p className="text-indigo-400 text-lg font-semibold">{exp.company}</p>
                </div>
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg mt-4 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">{exp.description}</p>
              <div className="grid md:grid-cols-2 gap-6">
                {exp.achievements.map((achievement, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-start space-x-3 bg-gray-800/50 p-4 rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Award className="text-indigo-400 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-300 text-sm font-medium">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
