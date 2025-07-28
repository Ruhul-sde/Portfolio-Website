
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Brain, Globe } from 'lucide-react';

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-8 h-8" />,
      skills: ["React.js", "JavaScript", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3"],
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Backend Development",
      icon: <Database className="w-8 h-8" />,
      skills: ["Node.js", "Java", "Python", "Express.js", "MongoDB", "SQL"],
      color: "from-green-500 to-teal-600"
    },
    {
      title: "AI/ML & Data Science",
      icon: <Brain className="w-8 h-8" />,
      skills: ["TensorFlow", "PyTorch", "Machine Learning", "Deep Learning", "Data Analysis"],
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Tools & Technologies",
      icon: <Globe className="w-8 h-8" />,
      skills: ["Git", "SAP", "CAD/CAM", "3D Design", "WCF APIs", "REST APIs"],
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="skills" ref={ref} className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-900 p-6 rounded-2xl hover:transform hover:scale-105 transition-all duration-300 shadow-xl border border-gray-700 hover:border-indigo-500/50"
            >
              <div className={`bg-gradient-to-r ${category.color} p-3 rounded-lg w-fit mb-4`}>
                <div className="text-white">{category.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-700 hover:bg-indigo-600/20 text-gray-300 hover:text-indigo-300 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 cursor-default"
                  >
                    {skill}
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
