import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const articles = [
    {
      title: 'Getting Started with Machine Learning: A Beginner\'s Guide',
      excerpt: 'Learn the fundamentals of ML, from basic concepts to your first model. Perfect for beginners looking to break into the field.',
      category: 'Machine Learning',
      readTime: '8 min read',
      date: 'Coming Soon',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Understanding Neural Networks: From Perceptron to Deep Learning',
      excerpt: 'Dive deep into how neural networks work, exploring architectures and training techniques used in modern AI.',
      category: 'Deep Learning',
      readTime: '12 min read',
      date: 'Coming Soon',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Data Preprocessing Techniques Every Data Scientist Should Know',
      excerpt: 'Master the art of cleaning, transforming, and preparing data for machine learning models.',
      category: 'Data Science',
      readTime: '10 min read',
      date: 'Coming Soon',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Feature Engineering: The Secret to Better ML Models',
      excerpt: 'Discover advanced techniques for creating powerful features that improve model performance.',
      category: 'Machine Learning',
      readTime: '15 min read',
      date: 'Coming Soon',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Python Libraries for Data Science: A Complete Guide',
      excerpt: 'Explore essential Python libraries including Pandas, NumPy, Matplotlib, and Scikit-learn.',
      category: 'Python',
      readTime: '10 min read',
      date: 'Coming Soon',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'Model Evaluation Metrics: Choosing the Right One',
      excerpt: 'Learn when to use accuracy, precision, recall, F1-score, and other evaluation metrics.',
      category: 'Machine Learning',
      readTime: '8 min read',
      date: 'Coming Soon',
      color: 'from-indigo-500 to-purple-500',
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
            Learning <span className="gradient-text">Hub</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-cyan-600 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on AI, Machine Learning, and Data Science
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-2xl overflow-hidden group cursor-pointer"
            >
              {/* Gradient Header */}
              <div className={`h-32 bg-gradient-to-br ${article.color} p-6 flex items-end relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <BookOpen className="w-12 h-12 text-white/90 relative z-10" />
              </div>

              <div className="p-6">
                {/* Category and Read Time */}
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 text-xs bg-primary-600/20 text-primary-400 rounded-full border border-primary-600/30">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <Clock size={14} />
                    {article.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors line-clamp-2">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-gray-400 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-xs text-gray-500">{article.date}</span>
                  <span className="flex items-center gap-1 text-primary-400 text-sm font-semibold group-hover:gap-2 transition-all">
                    Read More <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Coming Soon Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="glass rounded-2xl p-8 inline-block">
            <BookOpen className="w-12 h-12 text-primary-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Blog Coming Soon</h3>
            <p className="text-gray-400 max-w-md">
              I'm working on creating valuable content about AI, Machine Learning, and Data Science. Stay tuned!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
