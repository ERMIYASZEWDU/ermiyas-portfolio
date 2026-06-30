import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Brain, Sparkles } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const highlights = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Computer Science Graduate',
      description: 'Strong foundation in algorithms, data structures, and software engineering',
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI/ML Specialist',
      description: 'Building intelligent systems with Machine Learning and Deep Learning',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data Engineering',
      description: 'Transforming raw data into actionable insights',
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Problem Solver',
      description: 'Passionate about solving real-world problems with AI',
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-cyan-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a <span className="text-primary-400 font-semibold">Computer Science graduate</span> currently 
              pursuing advanced studies in <span className="text-primary-400 font-semibold">Intelligent Data & AI Engineering</span> at 
              Addis Ababa University's prestigious Qiyas Program.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With hands-on experience as an <span className="text-primary-400 font-semibold">IT Support Specialist</span> at 
              Tewos Technology, I've developed a deep understanding of both the technical infrastructure and 
              the practical applications of technology in solving real-world challenges.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My passion lies in building <span className="text-primary-400 font-semibold">intelligent systems</span> that 
              leverage Machine Learning, Data Science, and AI to transform raw data into meaningful decisions. 
              I'm driven by the endless possibilities of automation and the power of data-driven insights.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Whether it's predicting customer behavior, analyzing complex datasets, or building ML models 
              from scratch, I approach every project with curiosity, rigor, and a commitment to excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass rounded-xl p-6 text-center"
              >
                <div className="text-primary-400 mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
