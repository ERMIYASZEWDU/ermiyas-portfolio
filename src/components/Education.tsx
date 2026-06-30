import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const education = [
    {
      degree: 'Intelligent Data & AI Engineering',
      level: 'Advanced Studies',
      institution: 'Addis Ababa University',
      program: 'Qiyas Program',
      period: '2025 - 2026',
      description: 'Specialized program focusing on advanced AI, Machine Learning, Data Engineering, and Intelligent Systems.',
      icon: <Award className="w-8 h-8" />,
      color: 'from-purple-600 to-pink-600',
    },
    {
      degree: 'Bachelor of Computer Science',
      level: 'Undergraduate Degree',
      institution: 'University',
      program: 'Computer Science',
      period: '2020 - 2024',
      description: 'Comprehensive foundation in algorithms, data structures, software engineering, and computer systems.',
      icon: <GraduationCap className="w-8 h-8" />,
      color: 'from-primary-600 to-cyan-600',
    },
  ];

  return (
    <section id="education" className="py-20 bg-dark-card relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-cyan-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical Timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 via-purple-600 to-cyan-600 hidden md:block"></div>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary-600 border-4 border-dark-card z-10 hidden md:block"></div>

                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glass rounded-2xl p-8 md:w-11/12"
                >
                  <div className="flex items-start gap-6">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${edu.color} flex-shrink-0`}>
                      {edu.icon}
                    </div>

                    <div className="flex-1 text-left">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                        <p className="text-primary-400 font-semibold">{edu.institution}</p>
                        <p className="text-gray-400 text-sm mt-1">{edu.program} • {edu.period}</p>
                      </div>

                      <p className="text-gray-300 leading-relaxed mb-4">{edu.description}</p>

                      <div className="inline-block px-4 py-2 bg-primary-600/20 text-primary-400 rounded-lg text-sm border border-primary-600/30">
                        {edu.level}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
