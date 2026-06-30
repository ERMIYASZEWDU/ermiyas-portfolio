import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, GitFork, Star, Calendar } from 'lucide-react';

const GitHub = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { label: 'Total Repositories', value: '25+', icon: <Github className="w-6 h-6" /> },
    { label: 'Total Stars', value: '50+', icon: <Star className="w-6 h-6" /> },
    { label: 'Contributions', value: '500+', icon: <Calendar className="w-6 h-6" /> },
    { label: 'Forks', value: '15+', icon: <GitFork className="w-6 h-6" /> },
  ];

  const languages = [
    { name: 'Python', percentage: 65, color: 'bg-blue-500' },
    { name: 'JavaScript', percentage: 20, color: 'bg-yellow-500' },
    { name: 'Java', percentage: 10, color: 'bg-red-500' },
    { name: 'Other', percentage: 5, color: 'bg-gray-500' },
  ];

  const repositories = [
    {
      name: 'ml-algorithms',
      description: 'Implementation of core ML algorithms from scratch',
      language: 'Python',
      stars: 12,
      forks: 3,
    },
    {
      name: 'data-science-portfolio',
      description: 'Collection of data science projects and notebooks',
      language: 'Jupyter Notebook',
      stars: 8,
      forks: 2,
    },
    {
      name: 'ai-chatbot-nlp',
      description: 'Natural Language Processing chatbot with intent classification',
      language: 'Python',
      stars: 15,
      forks: 5,
    },
  ];

  return (
    <section className="py-20 bg-dark-card relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            GitHub <span className="gradient-text">Showcase</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-cyan-600 mx-auto mb-4"></div>
          <p className="text-gray-400">Open source contributions and project repositories</p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-xl p-6 text-center hover:scale-105 transition-transform"
            >
              <div className="text-primary-400 flex justify-center mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Languages Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass rounded-2xl p-8 mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Most Used Languages</h3>
          <div className="space-y-4">
            {languages.map((lang, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">{lang.name}</span>
                  <span className="text-primary-400 font-semibold">{lang.percentage}%</span>
                </div>
                <div className="h-3 bg-dark-bg rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${lang.percentage}%` } : {}}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className={`h-full ${lang.color} rounded-full`}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Featured Repositories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">Featured Repositories</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {repositories.map((repo, index) => (
              <motion.a
                key={index}
                href={`https://github.com/ermiyasassefa/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="glass rounded-xl p-6 hover:bg-white/5 transition-all block"
              >
                <div className="flex items-start justify-between mb-4">
                  <Github className="w-6 h-6 text-primary-400" />
                  <div className="flex gap-3 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Star size={14} /> {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork size={14} /> {repo.forks}
                    </span>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{repo.name}</h4>
                <p className="text-sm text-gray-400 mb-4">{repo.description}</p>
                <span className="inline-block px-3 py-1 text-xs bg-primary-600/20 text-primary-400 rounded-full border border-primary-600/30">
                  {repo.language}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/ermiyasassefa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all"
          >
            <Github size={20} />
            View All Repositories
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHub;
