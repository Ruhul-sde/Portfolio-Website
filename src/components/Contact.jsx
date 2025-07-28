
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="contact" ref={ref} className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, innovative projects, or just having a great conversation about technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div 
              className="flex items-center space-x-4 p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 rounded-xl">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">Email</h3>
                <p className="text-gray-300">ruhul.ain@example.com</p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-center space-x-4 p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-gradient-to-r from-green-600 to-teal-600 p-4 rounded-xl">
                <Phone className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">Phone</h3>
                <p className="text-gray-300">+91 XXXXX XXXXX</p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-center space-x-4 p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-gradient-to-r from-orange-600 to-red-600 p-4 rounded-xl">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">Location</h3>
                <p className="text-gray-300">West Bengal, India</p>
              </div>
            </motion.div>

            <div className="flex space-x-4 pt-6">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="bg-gray-800 hover:bg-gradient-to-r hover:from-gray-700 hover:to-indigo-600 p-4 rounded-xl transition-all duration-300 shadow-lg"
              >
                <Github className="text-white" size={24} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="bg-gray-800 hover:bg-gradient-to-r hover:from-gray-700 hover:to-blue-600 p-4 rounded-xl transition-all duration-300 shadow-lg"
              >
                <Linkedin className="text-white" size={24} />
              </motion.a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-gray-800 text-white p-4 rounded-xl border border-gray-700 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 focus:outline-none transition-all duration-300 hover:border-gray-600"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="bg-gray-800 text-white p-4 rounded-xl border border-gray-700 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 focus:outline-none transition-all duration-300 hover:border-gray-600"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-gray-800 text-white p-4 rounded-xl border border-gray-700 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 focus:outline-none transition-all duration-300 hover:border-gray-600"
            />
            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full bg-gray-800 text-white p-4 rounded-xl border border-gray-700 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 focus:outline-none transition-all duration-300 resize-none hover:border-gray-600"
            ></textarea>
            <motion.button
              whileHover={{ 
                scale: 1.02, 
                boxShadow: "0 10px 25px rgba(79, 70, 229, 0.4)" 
              }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
