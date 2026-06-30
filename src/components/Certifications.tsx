import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const certifications = [
    {
      title: 'Machine Learning Specialization',
      issuer: 'Coursera / Stanford University',
      date: '2024',
      badge: '🏆',
    },
    {
      title: 'Python for Data Science',
      issuer: 'IBM / Coursera',
      date: '2023',
      badge: '🐍',
    },
    {
      title: 'Data Science Professional Certificate',
      issuer: 'Harvard University',
      date: '2023',
      badge: '📊',
    },
    {
      title: 'Deep Learning Fundamentals',
      issuer: 'DeepLearning.AI',
      date: '2024',
      badge: '🧠',
    },
    {
      title: 'SQL for Data Analysis',
      issuer: 'Udacity',
      date: '2023',
      badge: '💾',
    },
    {
      title: 'IT Support Specialist',
      issuer: 'Google / Coursera',
      date: '2022',
      badge: '🔧',
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-cyan-600 mx-auto mb-4"></div>
          <p className="text-gray-400">Professional credentials and continuous learning</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-xl p-6 hover:shadow-xl hover:shadow-primary-500/10 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">{cert.badge}</div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-white">{cert.title}</h3>
                    <CheckCircle size={20} className="text-green-500 flex-shrink-0 ml-2" />
                  </div>
                  <p className="text-primary-400 font-semibold text-sm mb-1">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm">{cert.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="glass rounded-2xl p-8 inline-block">
            <Award className="w-12 h-12 text-primary-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Continuous Learner</h3>
            <p className="text-gray-400 max-w-md">
              Committed to staying current with the latest developments in AI, Machine Learning, and Data Science
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
