
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Server, Database, Brain, Palette, Globe, Smartphone, Cloud } from 'lucide-react';

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      gradient: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React.js", level: 95 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Framer Motion", level: 88 },
        { name: "HTML5/CSS3", level: 95 }
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      gradient: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 88 },
        { name: "Java", level: 85 },
        { name: "Python", level: 87 },
        { name: "RESTful APIs", level: 92 },
        { name: "GraphQL", level: 80 }
      ]
    },
    {
      title: "Database & Cloud",
      icon: Database,
      gradient: "from-purple-500 to-pink-500",
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "AWS", level: 75 },
        { name: "Firebase", level: 85 },
        { name: "Redis", level: 78 }
      ]
    },
    {
      title: "AI/ML & Data Science",
      icon: Brain,
      gradient: "from-orange-500 to-red-500",
      skills: [
        { name: "TensorFlow", level: 85 },
        { name: "PyTorch", level: 82 },
        { name: "Scikit-learn", level: 80 },
        { name: "Pandas", level: 88 },
        { name: "NumPy", level: 90 },
        { name: "OpenCV", level: 75 }
      ]
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      gradient: "from-pink-500 to-rose-500",
      skills: [
        { name: "Figma", level: 85 },
        { name: "Adobe XD", level: 80 },
        { name: "Responsive Design", level: 95 },
        { name: "User Research", level: 78 },
        { name: "Prototyping", level: 85 },
        { name: "Design Systems", level: 88 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Globe,
      gradient: "from-indigo-500 to-blue-500",
      skills: [
        { name: "Git/GitHub", level: 95 },
        { name: "Docker", level: 80 },
        { name: "SAP Solutions", level: 85 },
        { name: "Agile/Scrum", level: 90 },
        { name: "CI/CD", level: 82 },
        { name: "Testing (Jest)", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" ref={ref} className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl"></div>
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
            <Brain className="w-5 h-5 text-indigo-400" />
            <span className="text-indigo-300 font-medium">Technical Expertise</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Skills &
            <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of modern technologies and frameworks that power innovative solutions.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + categoryIndex * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:border-indigo-500/50 transition-all duration-500"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-8">
                <div className={`w-14 h-14 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <div className={`w-12 h-1 bg-gradient-to-r ${category.gradient} rounded-full mt-2 group-hover:w-20 transition-all duration-300`}></div>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="group/skill"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium group-hover/skill:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="text-indigo-400 font-semibold text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative h-2 bg-gray-700/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          delay: 0.8 + categoryIndex * 0.1 + skillIndex * 0.05,
                          duration: 1,
                          ease: "easeOut"
                        }}
                        className={`h-full bg-gradient-to-r ${category.gradient} rounded-full relative`}
                      >
                        <motion.div
                          animate={{ 
                            opacity: [0.5, 1, 0.5],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 bg-white/20 rounded-full"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Additional Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Git", "Docker", "Kubernetes", "Jenkins", "JIRA", "Confluence",
              "VS Code", "IntelliJ IDEA", "Postman", "Figma", "Adobe Creative Suite",
              "Linux", "Windows", "macOS", "Agile", "Scrum", "DevOps"
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.4 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="bg-gradient-to-r from-gray-700/50 to-gray-800/50 backdrop-blur-sm border border-gray-600/50 hover:border-indigo-500/50 text-gray-300 hover:text-white px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
