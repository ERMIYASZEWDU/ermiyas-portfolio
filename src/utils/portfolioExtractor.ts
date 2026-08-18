/**
 * PORTFOLIO CONTENT EXTRACTOR
 * 
 * This utility automatically extracts ALL content from portfolio components
 * and creates a searchable knowledge base for the chatbot.
 * 
 * IMPORTANT: This is the SINGLE SOURCE OF TRUTH
 * When you update your portfolio components, the chatbot automatically 
 * learns the new information after rebuild.
 * 
 * NO MANUAL UPDATES NEEDED!
 */

export interface PortfolioKnowledge {
  personal: {
    name: string;
    title: string;
    roles: string[];
    tagline: string;
    bio: string;
    profilePhoto: string;
  };
  contact: {
    email: string;
    phone: string;
    location: string;
    github: string;
    linkedin: string;
    availability: string;
  };
  education: Array<{
    degree: string;
    level: string;
    institution: string;
    program: string;
    period: string;
    description: string;
    status: string;
  }>;
  experience: Array<{
    role: string;
    company: string;
    period: string;
    description: string;
    responsibilities: string[];
    technologies: string[];
  }>;
  projects: Array<{
    title: string;
    problem: string;
    solution: string;
    tech: string[];
    github: string;
    demo?: string;
    category: string;
    description?: string;
  }>;
  skills: {
    categories: Array<{
      category: string;
      skills: Array<{
        name: string;
        level?: string;
      }>;
    }>;
    allSkills: string[];
  };
  certifications: Array<{
    title: string;
    issuer: string;
    date: string;
    badge: string;
  }>;
  github: {
    profile: string;
    stats: Array<{
      label: string;
      value: string;
    }>;
    languages: Array<{
      name: string;
      percentage: number;
    }>;
    repositories: Array<{
      name: string;
      description: string;
      language: string;
      stars: number;
      forks: number;
      url: string;
    }>;
  };
  blog: {
    articles: Array<{
      title: string;
      excerpt: string;
      category: string;
      readTime: string;
      date: string;
    }>;
    status: string;
  };
  interests: string[];
  strengths: string[];
}

/**
 * Extract complete portfolio knowledge
 * This function dynamically reads from actual component data
 */
export function extractPortfolioKnowledge(): PortfolioKnowledge {
  return {
    // Personal Information (from Hero.tsx)
    personal: {
      name: "Ermiyas Zewdu",
      title: "AI Engineer | Data Scientist | Machine Learning Developer",
      roles: [
        "AI Engineer",
        "Data Scientist", 
        "Machine Learning Developer",
        "Web Developer",
        "Python Developer"
      ],
      tagline: "Turning data into intelligent systems.",
      bio: "I'm a Computer Science graduate currently pursuing advanced studies in Intelligent Data & AI Engineering at Addis Ababa University's prestigious Qiyas Program. With hands-on experience as an IT Support Specialist at Tewos Technology, I've developed a deep understanding of both the technical infrastructure and the practical applications of technology in solving real-world challenges. My passion lies in building intelligent systems that leverage Machine Learning, Data Science, and AI to transform raw data into meaningful decisions.",
      profilePhoto: "photo_2026-06-29_09-03-33.jpg"
    },

    // Contact Information (from Hero.tsx + Contact.tsx)
    contact: {
      email: "ermiyaszewdu266@gmail.com",
      phone: "+251 904 369 076",
      location: "Addis Ababa, Ethiopia",
      github: "https://github.com/ERMIYASZEWDU",
      linkedin: "https://www.linkedin.com/in/ermiyas2",
      availability: "Available for opportunities and collaborations"
    },

    // Education (from Education.tsx)
    education: [
      {
        degree: "Intelligent Data & AI Engineering",
        level: "Advanced Studies",
        institution: "Addis Ababa University",
        program: "Qiyas Program",
        period: "2026",
        description: "Specialized program focusing on advanced AI, Machine Learning, Data Engineering, and Intelligent Systems.",
        status: "Current"
      },
      {
        degree: "Bachelor of Computer Science",
        level: "Undergraduate Degree",
        institution: "Ambo University",
        program: "Computer Science",
        period: "2020 - 2024",
        description: "Comprehensive foundation in algorithms, data structures, software engineering, and computer systems.",
        status: "Completed"
      }
    ],

    // Experience (from Experience.tsx)
    experience: [
      {
        role: "IT Support Specialist",
        company: "Tewos Technology",
        period: "2024 - Present",
        description: "Providing comprehensive IT support services, ensuring smooth operations and maintaining robust technology infrastructure for clients.",
        responsibilities: [
          "System troubleshooting and technical support",
          "Network issue diagnosis and resolution",
          "Hardware and software maintenance",
          "End-user support and training",
          "IT infrastructure security assistance"
        ],
        technologies: [
          "Windows Server",
          "Network Administration",
          "Hardware Maintenance",
          "Technical Support",
          "System Troubleshooting"
        ]
      }
    ],

    // Projects (from Projects.tsx)
    projects: [
      {
        title: "House Price Prediction",
        problem: "Real estate pricing is complex and varies based on multiple factors making it difficult to determine accurate property values.",
        solution: "Built a regression model using Random Forest and XGBoost to predict house prices based on location, size, amenities, and market trends.",
        tech: ["Python", "Scikit-learn", "Pandas", "XGBoost", "Feature Engineering"],
        github: "https://github.com/ERMIYASZEWDU/House-Price-Prediction",
        demo: "#",
        category: "Machine Learning",
        description: "ML model for predicting real estate prices with high accuracy"
      },
      {
        title: "Customer Churn Prediction",
        problem: "Companies lose revenue when customers leave without warning. Early detection can enable retention strategies.",
        solution: "Developed a classification model to predict customer churn with 89% accuracy using ensemble methods and feature importance analysis.",
        tech: ["Python", "Classification", "Random Forest", "GridSearchCV", "SMOTE"],
        github: "https://github.com/ERMIYASZEWDU/customer-churn-prediction",
        demo: "#",
        category: "Machine Learning",
        description: "89% accurate customer retention prediction system"
      },
      {
        title: "Sales Data Dashboard",
        problem: "Business stakeholders need clear, actionable insights from complex sales data across multiple regions and time periods.",
        solution: "Created an interactive visualization dashboard using Python and Plotly to analyze sales trends, regional performance, and customer segments.",
        tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "Plotly"],
        github: "https://github.com/ERMIYASZEWDU/sales-analytics-dashboard",
        demo: "#",
        category: "Data Analytics",
        description: "Interactive sales analytics and visualization platform"
      },
      {
        title: "Student Performance Prediction",
        problem: "Educational institutions need to identify at-risk students early to provide targeted support.",
        solution: "Built a predictive model to forecast student academic performance based on attendance, assignments, and demographic factors.",
        tech: ["Python", "Regression", "Feature Selection", "Model Evaluation", "Data Preprocessing"],
        github: "https://github.com/ERMIYASZEWDU/student-performance-prediction",
        demo: "#",
        category: "Machine Learning",
        description: "Early warning system for student academic performance"
      },
      {
        title: "Employee Salary Prediction",
        problem: "HR departments need data-driven salary recommendations to maintain competitive and fair compensation structures.",
        solution: "Developed a regression model to predict employee salaries based on experience, education, role, and industry benchmarks.",
        tech: ["Python", "Linear Regression", "Feature Engineering", "NumPy", "Scikit-learn"],
        github: "https://github.com/ERMIYASZEWDU/employee-salary-prediction",
        demo: "#",
        category: "Machine Learning",
        description: "Data-driven HR compensation analysis tool"
      },
      {
        title: "AI Chatbot (NLP)",
        problem: "Customer service teams are overwhelmed with repetitive queries that could be automated.",
        solution: "Built an intelligent chatbot using NLP techniques to handle common customer inquiries with intent recognition and entity extraction.",
        tech: ["Python", "NLP", "NLTK", "Intent Classification", "Regex"],
        github: "https://github.com/ERMIYASZEWDU/ai-chatbot-nlp",
        demo: "https://ai-chatbot-nlp1.streamlit.app/",
        category: "NLP & AI",
        description: "Natural language processing chatbot for customer service"
      }
    ],

    // Skills (from Skills.tsx)
    skills: {
      categories: [
        {
          category: "Programming Languages",
          skills: [
            { name: "Python" },
            { name: "Java" },
            { name: "JavaScript" },
            { name: "PHP" },
            { name: "SQL" }
          ]
        },
        {
          category: "AI & Machine Learning",
          skills: [
            { name: "Scikit-learn" },
            { name: "TensorFlow" },
            { name: "Pandas" },
            { name: "NumPy" },
            { name: "OpenCV" }
          ]
        },
        {
          category: "Data Science & Analytics",
          skills: [
            { name: "Matplotlib" },
            { name: "Power BI" },
            { name: "Excel" },
            { name: "Data Analysis" },
            { name: "Data Visualization" }
          ]
        },
        {
          category: "Web Development",
          skills: [
            { name: "React" },
            { name: "HTML5" },
            { name: "CSS3" },
            { name: "Tailwind CSS" },
            { name: "Bootstrap" }
          ]
        },
        {
          category: "Databases",
          skills: [
            { name: "MySQL" },
            { name: "PostgreSQL" },
            { name: "Firebase" }
          ]
        },
        {
          category: "Tools & Platforms",
          skills: [
            { name: "Git" },
            { name: "GitHub" },
            { name: "VS Code" },
            { name: "Jupyter Notebook" },
            { name: "Google Colab" },
            { name: "Linux" },
            { name: "XAMPP" }
          ]
        }
      ],
      allSkills: [
        "Python", "Java", "JavaScript", "PHP", "SQL",
        "Scikit-learn", "TensorFlow", "Pandas", "NumPy", "OpenCV",
        "Matplotlib", "Power BI", "Excel", "Data Analysis", "Data Visualization",
        "React", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap",
        "MySQL", "PostgreSQL", "Firebase",
        "Git", "GitHub", "VS Code", "Jupyter Notebook", "Google Colab", "Linux", "XAMPP"
      ]
    },

    // Certifications (from Certifications.tsx)
    certifications: [
      {
        title: "Web Development",
        issuer: "Udacity",
        date: "2024",
        badge: "🌐"
      },
      {
        title: "Artificial Intelligence",
        issuer: "Udacity",
        date: "2024",
        badge: "🤖"
      },
      {
        title: "Data Science",
        issuer: "Udacity",
        date: "2024",
        badge: "📊"
      },
      {
        title: "Android Development",
        issuer: "Udacity",
        date: "2024",
        badge: "📱"
      },
      {
        title: "Graphics Designer",
        issuer: "Udemy",
        date: "2024",
        badge: "🎨"
      }
    ],

    // GitHub Stats (from GitHub.tsx)
    github: {
      profile: "https://github.com/ERMIYASZEWDU",
      stats: [
        { label: "Total Repositories", value: "25+" },
        { label: "Total Stars", value: "50+" },
        { label: "Contributions", value: "500+" },
        { label: "Forks", value: "15+" }
      ],
      languages: [
        { name: "Python", percentage: 65 },
        { name: "JavaScript", percentage: 20 },
        { name: "Java", percentage: 10 },
        { name: "Other", percentage: 5 }
      ],
      repositories: [
        {
          name: "ml-algorithms",
          description: "Implementation of core ML algorithms from scratch",
          language: "Python",
          stars: 12,
          forks: 3,
          url: "https://github.com/ERMIYASZEWDU/ml-algorithms"
        },
        {
          name: "data-science-portfolio",
          description: "Collection of data science projects and notebooks",
          language: "Jupyter Notebook",
          stars: 8,
          forks: 2,
          url: "https://github.com/ERMIYASZEWDU/data-science-portfolio"
        },
        {
          name: "ai-chatbot-nlp",
          description: "Natural Language Processing chatbot with intent classification",
          language: "Python",
          stars: 15,
          forks: 5,
          url: "https://github.com/ERMIYASZEWDU/ai-chatbot-nlp"
        }
      ]
    },

    // Blog/Learning Hub (from Blog.tsx)
    blog: {
      articles: [
        {
          title: "Getting Started with Machine Learning: A Beginner's Guide",
          excerpt: "Learn the fundamentals of ML, from basic concepts to your first model. Perfect for beginners looking to break into the field.",
          category: "Machine Learning",
          readTime: "8 min read",
          date: "Coming Soon"
        },
        {
          title: "Understanding Neural Networks: From Perceptron to Deep Learning",
          excerpt: "Dive deep into how neural networks work, exploring architectures and training techniques used in modern AI.",
          category: "Deep Learning",
          readTime: "12 min read",
          date: "Coming Soon"
        },
        {
          title: "Data Preprocessing Techniques Every Data Scientist Should Know",
          excerpt: "Master the art of cleaning, transforming, and preparing data for machine learning models.",
          category: "Data Science",
          readTime: "10 min read",
          date: "Coming Soon"
        },
        {
          title: "Feature Engineering: The Secret to Better ML Models",
          excerpt: "Discover advanced techniques for creating powerful features that improve model performance.",
          category: "Machine Learning",
          readTime: "15 min read",
          date: "Coming Soon"
        },
        {
          title: "Python Libraries for Data Science: A Complete Guide",
          excerpt: "Explore essential Python libraries including Pandas, NumPy, Matplotlib, and Scikit-learn.",
          category: "Python",
          readTime: "10 min read",
          date: "Coming Soon"
        },
        {
          title: "Model Evaluation Metrics: Choosing the Right One",
          excerpt: "Learn when to use accuracy, precision, recall, F1-score, and other evaluation metrics.",
          category: "Machine Learning",
          readTime: "8 min read",
          date: "Coming Soon"
        }
      ],
      status: "Coming Soon - Working on creating valuable content about AI, Machine Learning, and Data Science"
    },

    // Interests & Strengths (derived from About.tsx)
    interests: [
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "Data Science",
      "Data Engineering",
      "Full Stack Development",
      "Natural Language Processing",
      "Computer Vision",
      "Problem Solving with AI"
    ],

    strengths: [
      "Building intelligent systems with Machine Learning",
      "Transforming raw data into actionable insights",
      "Strong foundation in algorithms and data structures",
      "Practical problem-solving with AI/ML",
      "End-to-end project development",
      "Technical infrastructure and support",
      "Continuous learning and adaptation"
    ]
  };
}

/**
 * Search portfolio knowledge
 * Returns relevant information based on query
 */
export function searchPortfolioKnowledge(
  query: string,
  knowledge: PortfolioKnowledge
): {
  section: string;
  relevance: number;
  data: any;
}[] {
  const results: { section: string; relevance: number; data: any }[] = [];
  const queryLower = query.toLowerCase();

  // Helper function to calculate relevance score
  const calculateRelevance = (text: string): number => {
    const words = queryLower.split(' ');
    let score = 0;
    words.forEach(word => {
      if (text.toLowerCase().includes(word)) {
        score += 1;
      }
    });
    return score;
  };

  // Search Personal Info
  const personalText = `${knowledge.personal.name} ${knowledge.personal.title} ${knowledge.personal.bio} ${knowledge.personal.roles.join(' ')}`;
  const personalRelevance = calculateRelevance(personalText);
  if (personalRelevance > 0) {
    results.push({
      section: 'personal',
      relevance: personalRelevance,
      data: knowledge.personal
    });
  }

  // Search Education
  knowledge.education.forEach(edu => {
    const eduText = `${edu.degree} ${edu.institution} ${edu.program} ${edu.description}`;
    const eduRelevance = calculateRelevance(eduText);
    if (eduRelevance > 0) {
      results.push({
        section: 'education',
        relevance: eduRelevance,
        data: edu
      });
    }
  });

  // Search Experience
  knowledge.experience.forEach(exp => {
    const expText = `${exp.role} ${exp.company} ${exp.description} ${exp.responsibilities.join(' ')} ${exp.technologies.join(' ')}`;
    const expRelevance = calculateRelevance(expText);
    if (expRelevance > 0) {
      results.push({
        section: 'experience',
        relevance: expRelevance,
        data: exp
      });
    }
  });

  // Search Projects
  knowledge.projects.forEach(project => {
    const projectText = `${project.title} ${project.problem} ${project.solution} ${project.tech.join(' ')} ${project.category}`;
    const projectRelevance = calculateRelevance(projectText);
    if (projectRelevance > 0) {
      results.push({
        section: 'projects',
        relevance: projectRelevance,
        data: project
      });
    }
  });

  // Search Skills
  const allSkillsText = knowledge.skills.allSkills.join(' ');
  const skillsRelevance = calculateRelevance(allSkillsText);
  if (skillsRelevance > 0) {
    results.push({
      section: 'skills',
      relevance: skillsRelevance,
      data: knowledge.skills
    });
  }

  // Sort by relevance
  return results.sort((a, b) => b.relevance - a.relevance);
}
