import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code, 
  Brain, 
  Database, 
  Wrench,
  FileCode,
  Settings,
  Coffee,
  Globe,
  BarChart3,
  Calculator,
  PieChart,
  TrendingUp,
  GitBranch,
  BookOpen,
  Monitor,
  Cloud
} from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      category: 'Programming',
      icon: <Code className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Python', level: 90, icon: <FileCode className="w-5 h-5" /> },
        { name: 'SQL', level: 85, icon: <Database className="w-5 h-5" /> },
        { name: 'Java', level: 75, icon: <Coffee className="w-5 h-5" /> },
        { name: 'JavaScript', level: 80, icon: <Globe className="w-5 h-5" /> },
        { name: 'HTML/CSS', level: 85, icon: <Code className="w-5 h-5" /> },
      ],
    },
    {
      category: 'AI & Machine Learning',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Regression', level: 88, icon: <TrendingUp className="w-5 h-5" /> },
        { name: 'Classification', level: 90, icon: <BarChart3 className="w-5 h-5" /> },
        { name: 'Clustering', level: 82, icon: <PieChart className="w-5 h-5" /> },
        { name: 'Model Evaluation', level: 85, icon: <Calculator className="w-5 h-5" /> },
        { name: 'Feature Engineering', level: 87, icon: <Settings className="w-5 h-5" /> },
      ],
    },
    {
      category: 'Data Tools',
      icon: <Database className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Pandas', level: 92, icon: <BarChart3 className="w-5 h-5" /> },
        { name: 'NumPy', level: 88, icon: <Calculator className="w-5 h-5" /> },
        { name: 'Matplotlib', level: 85, icon: <PieChart className="w-5 h-5" /> },
        { name: 'Scikit-learn', level: 90, icon: <Brain className="w-5 h-5" /> },
      ],
    },
    {
      category: 'Tools & Platforms',
      icon: <Wrench className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git / GitHub', level: 85, icon: <GitBranch className="w-5 h-5" /> },
        { name: 'Jupyter Notebook', level: 90, icon: <BookOpen className="w-5 h-5" /> },
        { name: 'VS Code', level: 92, icon: <Monitor className="w-5 h-5" /> },
        { name: 'Google Colab', level: 88, icon: <Cloud className="w-5 h-5" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-dark-card relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            Skills <span className="gradient-text">Dashboard</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-cyan-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass rounded-2xl p-8 hover:shadow-xl hover:shadow-primary-500/10 transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{category.category}</h3>
              </div>

              <div className="grid grid-cols-5 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`p-4 rounded-xl bg-gradient-to-br ${category.color}/20 border border-primary-500/30 flex items-center justify-center hover:shadow-lg transition-all cursor-pointer group`}
                    title={skill.name}
                  >
                    <div className="text-primary-400 group-hover:text-white transition-colors">
                      {skill.icon}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
