
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Building } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="about" ref={ref} className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-gray-300 space-y-6"
          >
            <p className="text-lg leading-relaxed">
              I'm a passionate Software Engineer with 1 year of professional experience at Akshay Software Technologies Pvt. Ltd., 
              specializing in SAP solutions and staffing systems. As a Computer Science graduate from Cooch Behar Government Engineering College (2024), 
              I bring a strong foundation in both theoretical knowledge and practical application.
            </p>
            <p className="text-lg leading-relaxed">
              My expertise spans Full-Stack Development with the MERN stack, AI/ML technologies, and modern UI/UX design. 
              I'm passionate about creating innovative solutions that bridge the gap between cutting-edge technology and user-centric design.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors duration-300">
                <Calendar className="text-indigo-400 mb-3" size={24} />
                <h4 className="font-semibold text-white text-lg">Experience</h4>
                <p className="text-gray-300">1+ Years Professional</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors duration-300">
                <Building className="text-indigo-400 mb-3" size={24} />
                <h4 className="font-semibold text-white text-lg">Company</h4>
                <p className="text-gray-300">Akshay Software Technologies</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-indigo-600 pl-6 py-4 bg-gray-800/50 rounded-r-lg">
                <h4 className="font-semibold text-white text-xl">Bachelor of Technology</h4>
                <p className="text-indigo-400 font-medium">Computer Science & Engineering</p>
                <p className="text-gray-400">Cooch Behar Government Engineering College</p>
                <p className="text-gray-400 text-sm">2020 - 2024</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
