import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink, TrendingUp, Users, BarChart3, GraduationCap, DollarSign, MessageSquare } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: 'House Price Prediction',
      icon: <TrendingUp className="w-6 h-6" />,
      problem: 'Real estate pricing is complex and varies based on multiple factors making it difficult to determine accurate property values.',
      solution: 'Built a regression model using Random Forest and XGBoost to predict house prices based on location, size, amenities, and market trends.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'XGBoost', 'Feature Engineering'],
      github: 'https://github.com/ERMIYASZEWDU/house-price-prediction',
      demo: '#',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Customer Churn Prediction',
      icon: <Users className="w-6 h-6" />,
      problem: 'Companies lose revenue when customers leave without warning. Early detection can enable retention strategies.',
      solution: 'Developed a classification model to predict customer churn with 89% accuracy using ensemble methods and feature importance analysis.',
      tech: ['Python', 'Classification', 'Random Forest', 'GridSearchCV', 'SMOTE'],
      github: 'https://github.com/ERMIYASZEWDU/churn-prediction',
      demo: '#',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Sales Data Dashboard',
      icon: <BarChart3 className="w-6 h-6" />,
      problem: 'Business stakeholders need clear, actionable insights from complex sales data across multiple regions and time periods.',
      solution: 'Created an interactive visualization dashboard using Python and Plotly to analyze sales trends, regional performance, and customer segments.',
      tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Plotly'],
      github: 'https://github.com/ERMIYASZEWDU/sales-dashboard',
      demo: '#',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Student Performance Prediction',
      icon: <GraduationCap className="w-6 h-6" />,
      problem: 'Educational institutions need to identify at-risk students early to provide targeted support.',
      solution: 'Built a predictive model to forecast student academic performance based on attendance, assignments, and demographic factors.',
      tech: ['Python', 'Regression', 'Feature Selection', 'Model Evaluation', 'Data Preprocessing'],
      github: 'https://github.com/ERMIYASZEWDU/student-performance',
      demo: '#',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Employee Salary Prediction',
      icon: <DollarSign className="w-6 h-6" />,
      problem: 'HR departments need data-driven salary recommendations to maintain competitive and fair compensation structures.',
      solution: 'Developed a regression model to predict employee salaries based on experience, education, role, and industry benchmarks.',
      tech: ['Python', 'Linear Regression', 'Feature Engineering', 'NumPy', 'Scikit-learn'],
      github: 'https://github.com/ERMIYASZEWDU/salary-prediction',
      demo: '#',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'AI Chatbot (NLP)',
      icon: <MessageSquare className="w-6 h-6" />,
      problem: 'Customer service teams are overwhelmed with repetitive queries that could be automated.',
      solution: 'Built an intelligent chatbot using NLP techniques to handle common customer inquiries with intent recognition and entity extraction.',
      tech: ['Python', 'NLP', 'NLTK', 'Intent Classification', 'Regex'],
      github: 'https://github.com/ERMIYASZEWDU/ai-chatbot',
      demo: '#',
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-cyan-600 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real-world machine learning solutions that transform data into intelligent systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-2xl overflow-hidden group"
            >
              {/* Project Header */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>

              <div className="p-6">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {project.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>

                {/* Problem */}
                <div className="mb-3">
                  <p className="text-xs font-semibold text-gray-400 uppercase mb-1">Problem</p>
                  <p className="text-sm text-gray-300 leading-relaxed">{project.problem}</p>
                </div>

                {/* Solution */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-400 uppercase mb-1">Solution</p>
                  <p className="text-sm text-gray-300 leading-relaxed">{project.solution}</p>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-400 uppercase mb-2">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-dark-bg text-primary-400 rounded border border-primary-600/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-dark-bg hover:bg-primary-600/20 rounded-lg transition-colors border border-white/10"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-gradient-to-r from-primary-600 to-primary-500 hover:shadow-lg hover:shadow-primary-500/50 rounded-lg transition-all"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
