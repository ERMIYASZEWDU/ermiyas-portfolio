import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Wrench, Network, HardDrive, Users, Shield } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const responsibilities = [
    {
      icon: <Wrench className="w-5 h-5" />,
      text: 'System troubleshooting and technical support',
    },
    {
      icon: <Network className="w-5 h-5" />,
      text: 'Network issue diagnosis and resolution',
    },
    {
      icon: <HardDrive className="w-5 h-5" />,
      text: 'Hardware and software maintenance',
    },
    {
      icon: <Users className="w-5 h-5" />,
      text: 'End-user support and training',
    },
    {
      icon: <Shield className="w-5 h-5" />,
      text: 'IT infrastructure security assistance',
    },
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-cyan-600 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 to-cyan-600"></div>

            {/* Experience Card */}
            <div className="relative pl-20 pb-12">
              {/* Timeline Dot */}
              <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-primary-600 border-4 border-dark-bg"></div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass rounded-2xl p-8"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-primary-600 to-primary-500">
                    <Briefcase className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">IT Support Specialist</h3>
                    <p className="text-primary-400 font-semibold mb-1">Tewos Technology</p>
                    <p className="text-gray-400 text-sm">2024 - Present</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    Providing comprehensive IT support services, ensuring smooth operations 
                    and maintaining robust technology infrastructure for clients.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    {responsibilities.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                        className="flex items-center gap-3 text-gray-300"
                      >
                        <div className="text-primary-400">{item.icon}</div>
                        <span className="text-sm">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Skills Used */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm text-gray-400 mb-3">Key Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {['Windows Server', 'Network Administration', 'Hardware Maintenance', 'Technical Support', 'System Troubleshooting'].map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs bg-primary-600/20 text-primary-400 rounded-full border border-primary-600/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
