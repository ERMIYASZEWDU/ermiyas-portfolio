import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Brain,
  Database,
  BarChart3,
  Globe,
  Settings,
  BookOpen,
  Cloud,
  LineChart,
  PieChart,
  FileSpreadsheet
} from 'lucide-react';

// Technology Logo Component
const TechLogo = ({ src, alt, className = "w-6 h-6" }: { src: string; alt: string; className?: string }) => (
  <img src={src} alt={alt} className={`${className} object-contain`} />
);

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      category: 'Programming Languages',
      icon: <Globe className="w-5 h-5" />,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { 
          name: 'Python', 
          icon: <TechLogo src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />, 
          color: 'text-yellow-400' 
        },
        { 
          name: 'Java', 
          icon: <TechLogo src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />, 
          color: 'text-orange-500' 
        },
        { 
          name: 'JavaScript', 
          icon: <TechLogo src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />, 
          color: 'text-yellow-300' 
        },
        { 
          name: 'SQL', 
          icon: <TechLogo src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" />, 
          color: 'text-blue-400' 
        },
        { 
          name: 'HTML5', 
          icon: <TechLogo src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />, 
          color: 'text-orange-400' 
        },
        { 
          name: 'CSS3', 
          icon: <TechLogo src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />, 
          color: 'text-blue-500' 
        },
      ],
    },
    {
      category: 'AI & Machine Learning',
      icon: <Brain className="w-5 h-5" />,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { 
          name: 'Scikit-learn', 
          icon: <TechLogo src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" alt="Scikit-learn" />, 
          color: 'text-orange-400' 
        },
        { 
          name: 'TensorFlow', 
          icon: <TechLogo src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" />, 
          color: 'text-orange-500' 
        },
        { 
          name: 'Pandas', 
          icon: <TechLogo src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" alt="Pandas" />, 
          color: 'text-blue-400' 
        },
        { 
          name: 'NumPy', 
          icon: <TechLogo src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" alt="NumPy" />, 
          color: 'text-blue-500' 
        },
        { 
          name: 'OpenCV', 
          icon: <TechLogo src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" alt="OpenCV" />, 
          color: 'text-red-500' 
        },
      ],
    },
    {
      category: 'Data Science & Analytics',
      icon: <BarChart3 className="w-5 h-5" />,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { 
          name: 'Matplotlib', 
          icon: <TechLogo src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" alt="Matplotlib" />, 
          color: 'text-blue-400' 
        },
        { 
          name: 'Power BI', 
          icon: <TechLogo src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" alt="Power BI" />, 
          color: 'text-yellow-500' 
        },
        { 
          name: 'Excel', 
          icon: <FileSpreadsheet className="w-6 h-6" />, 
          color: 'text-green-500' 
        },
        { 
          name: 'Data Analysis', 
          icon: <LineChart className="w-6 h-6" />, 
          color: 'text-purple-400' 
        },
        { 
          name: 'Data Visualization', 
          icon: <PieChart className="w-6 h-6" />, 
          color: 'text-cyan-400' 
        },
      ],
    },
    {
      category: 'Web Development',
      icon: <Globe className="w-5 h-5" />,
      color: 'from-cyan-500 to-blue-500',
      skills: [
        { 
          name: 'React', 
          icon: <TechLogo src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />, 
          color: 'text-cyan-400' 
        },
        { 
          name: 'Tailwind CSS', 
          icon: <TechLogo src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="Tailwind CSS" />, 
          color: 'text-cyan-500' 
        },
        { 
          name: 'Bootstrap', 
          icon: <TechLogo src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" />, 
          color: 'text-purple-500' 
        },
        { 
          name: 'PHP', 
          icon: <TechLogo src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" />, 
          color: 'text-purple-600' 
        },
      ],
    },
    {
      category: 'Databases',
      icon: <Database className="w-5 h-5" />,
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { 
          name: 'MySQL', 
          icon: <TechLogo src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />, 
          color: 'text-blue-500' 
        },
        { 
          name: 'PostgreSQL', 
          icon: <TechLogo src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />, 
          color: 'text-blue-600' 
        },
        { 
          name: 'Firebase', 
          icon: <TechLogo src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" />, 
          color: 'text-orange-500' 
        },
      ],
    },
    {
      category: 'Tools & Platforms',
      icon: <Settings className="w-5 h-5" />,
      color: 'from-orange-500 to-red-500',
      skills: [
        { 
          name: 'Git', 
          icon: <TechLogo src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />, 
          color: 'text-orange-500' 
        },
        { 
          name: 'GitHub', 
          icon: <TechLogo src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />, 
          color: 'text-gray-400' 
        },
        { 
          name: 'VS Code', 
          icon: <TechLogo src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" />, 
          color: 'text-blue-500' 
        },
        { 
          name: 'Jupyter Notebook', 
          icon: <TechLogo src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" alt="Jupyter Notebook" />, 
          color: 'text-orange-400' 
        },
        { 
          name: 'Google Colab', 
          icon: <Cloud className="w-6 h-6" />, 
          color: 'text-yellow-500' 
        },
        { 
          name: 'Linux', 
          icon: <TechLogo src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux" />, 
          color: 'text-green-400' 
        },
        { 
          name: 'XAMPP', 
          icon: <Settings className="w-6 h-6" />, 
          color: 'text-orange-600' 
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.05,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-dark-card relative overflow-hidden" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-cyan-600/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            My Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-cyan-600 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to build intelligent systems and data-driven solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={categoryVariants}
              className="group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} shadow-lg`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">
                  {category.category}
                </h3>
                <div className={`flex-1 h-px bg-gradient-to-r ${category.color} ml-4 opacity-30`}></div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={skillVariants}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="group/skill relative"
                  >
                    {/* Skill Card */}
                    <div className="glass rounded-xl p-4 h-24 flex flex-col items-center justify-center cursor-pointer border border-white/5 hover:border-primary-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm">
                      {/* Icon */}
                      <div className={`${skill.color} group-hover/skill:scale-110 transition-transform duration-300 mb-2`}>
                        {skill.icon}
                      </div>
                      
                      {/* Skill Name */}
                      <span className="text-xs text-gray-400 group-hover/skill:text-white transition-colors duration-300 text-center font-medium leading-tight">
                        {skill.name}
                      </span>

                      {/* Hover Effect Border */}
                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${category.color} opacity-0 group-hover/skill:opacity-20 transition-opacity duration-300 -z-10`}></div>
                      
                      {/* Glow Effect */}
                      <div className={`absolute -inset-1 rounded-xl bg-gradient-to-r ${category.color} opacity-0 group-hover/skill:opacity-20 blur transition-opacity duration-300 -z-20`}></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Decoration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-6 inline-block">
            <div className="flex items-center gap-4">
              <Brain className="w-8 h-8 text-primary-400" />
              <div className="text-left">
                <h4 className="text-lg font-semibold text-white mb-1">Continuous Learning</h4>
                <p className="text-gray-400 text-sm">Always exploring new technologies and frameworks</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
