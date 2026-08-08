/**
 * REAL PORTFOLIO DATA - Extracted from Portfolio Components
 * This file contains the ACTUAL data displayed on your portfolio website
 * Last Updated: January 30, 2026
 */

export const portfolioData = {
  // Personal Information
  personal: {
    name: "Ermiyas Zewdu Assefa",
    title: "Computer Science Graduate | Intelligent Data & AI Engineering Student",
    bio: "I'm a Computer Science graduate currently pursuing advanced studies in Intelligent Data & AI Engineering at Addis Ababa University's prestigious Qiyas Program. With hands-on experience as an IT Support Specialist at Tewos Technology, I've developed a deep understanding of both the technical infrastructure and the practical applications of technology in solving real-world challenges. My passion lies in building intelligent systems that leverage Machine Learning, Data Science, and AI to transform raw data into meaningful decisions.",
    role: "IT Support Specialist at Tewos Technology",
    focus: ["AI/ML Specialist", "Data Engineering", "Problem Solver"],
  },

  // Education (from Education.tsx)
  education: [
    {
      degree: "Intelligent Data & AI Engineering",
      level: "Advanced Studies",
      institution: "Addis Ababa University",
      program: "Qiyas Program",
      period: "2025 - 2026",
      description: "Specialized program focusing on advanced AI, Machine Learning, Data Engineering, and Intelligent Systems.",
      status: "Current"
    },
    {
      degree: "Bachelor of Computer Science",
      level: "Undergraduate Degree",
      institution: "University",
      program: "Computer Science",
      period: "2020 - 2024",
      description: "Comprehensive foundation in algorithms, data structures, software engineering, and computer systems.",
      status: "Completed"
    },
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
      technologies: ["Windows Server", "Network Administration", "Hardware Maintenance", "Technical Support", "System Troubleshooting"]
    },
  ],

  // Projects (from Projects.tsx - REAL PROJECTS)
  projects: [
    {
      title: "House Price Prediction",
      problem: "Real estate pricing is complex and varies based on multiple factors making it difficult to determine accurate property values.",
      solution: "Built a regression model using Random Forest and XGBoost to predict house prices based on location, size, amenities, and market trends.",
      tech: ["Python", "Scikit-learn", "Pandas", "XGBoost", "Feature Engineering"],
      github: "https://github.com/ERMIYASZEWDU/House-Price-Prediction",
      category: "Machine Learning"
    },
    {
      title: "Customer Churn Prediction",
      problem: "Companies lose revenue when customers leave without warning. Early detection can enable retention strategies.",
      solution: "Developed a classification model to predict customer churn with 89% accuracy using ensemble methods and feature importance analysis.",
      tech: ["Python", "Classification", "Random Forest", "GridSearchCV", "SMOTE"],
      github: "https://github.com/ERMIYASZEWDU/customer-churn-prediction",
      category: "Machine Learning"
    },
    {
      title: "Sales Data Dashboard",
      problem: "Business stakeholders need clear, actionable insights from complex sales data across multiple regions and time periods.",
      solution: "Created an interactive visualization dashboard using Python and Plotly to analyze sales trends, regional performance, and customer segments.",
      tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "Plotly"],
      github: "https://github.com/ERMIYASZEWDU/sales-analytics-dashboard",
      category: "Data Analytics"
    },
    {
      title: "Student Performance Prediction",
      problem: "Educational institutions need to identify at-risk students early to provide targeted support.",
      solution: "Built a predictive model to forecast student academic performance based on attendance, assignments, and demographic factors.",
      tech: ["Python", "Regression", "Feature Selection", "Model Evaluation", "Data Preprocessing"],
      github: "https://github.com/ERMIYASZEWDU/studestudent-performance-predictionnt-performance-prediction",
      category: "Machine Learning"
    },
    {
      title: "Employee Salary Prediction",
      problem: "HR departments need data-driven salary recommendations to maintain competitive and fair compensation structures.",
      solution: "Developed a regression model to predict employee salaries based on experience, education, role, and industry benchmarks.",
      tech: ["Python", "Linear Regression", "Feature Engineering", "NumPy", "Scikit-learn"],
      github: "https://github.com/ERMIYASZEWDU/employee-salary-prediction",
      category: "Machine Learning"
    },
    {
      title: "AI Chatbot (NLP)",
      problem: "Customer service teams are overwhelmed with repetitive queries that could be automated.",
      solution: "Built an intelligent chatbot using NLP techniques to handle common customer inquiries with intent recognition and entity extraction.",
      tech: ["Python", "NLP", "NLTK", "Intent Classification", "Regex"],
      github: "https://github.com/ERMIYASZEWDU/ai-chatbot-nlp",
      demo: "https://ai-chatbot-nlp1.streamlit.app/",
      category: "NLP & AI"
    },
  ],

  // Skills (from Skills.tsx - REAL SKILLS)
  skills: {
    "Programming Languages": ["Python", "Java", "JavaScript", "PHP", "SQL"],
    "AI & Machine Learning": ["Scikit-learn", "TensorFlow", "Pandas", "NumPy", "OpenCV"],
    "Data Science & Analytics": ["Matplotlib", "Power BI", "Excel", "Data Analysis", "Data Visualization"],
    "Web Development": ["React", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
    "Databases": ["MySQL", "PostgreSQL", "Firebase"],
    "Tools & Platforms": ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Google Colab", "Linux", "XAMPP"],
  },

  // Certifications (from Certifications.tsx - REAL CERTS)
  certifications: [
    { title: "Web Development", issuer: "Udacity", date: "2024" },
    { title: "Artificial Intelligence", issuer: "Udacity", date: "2024" },
    { title: "Data Science", issuer: "Udacity", date: "2024" },
    { title: "Android Development", issuer: "Udacity", date: "2024" },
    { title: "Graphics Designer", issuer: "Udemy", date: "2024" },
  ],

  // Contact & Links
  contact: {
    email: "ermiyaszewdu266@gmail.com",
    github: "https://github.com/ERMIYASZEWDU",
    linkedin: "https://www.linkedin.com/in/ermiyas2",
    portfolio: "https://ermiyas-portfolio-ten.vercel.app/",
    message: "Feel free to reach out through the contact section on this portfolio!"
  },

  // Interests & Strengths
  interests: [
    "Artificial Intelligence",
    "Machine Learning",
    "Data Science",
    "Data Engineering",
    "Full Stack Development",
    "Problem Solving with AI"
  ],

  strengths: [
    "Building intelligent systems with Machine Learning",
    "Transforming raw data into actionable insights",
    "Strong foundation in algorithms and data structures",
    "Practical problem-solving with AI/ML",
    "End-to-end project development",
  ],
};

export type PortfolioData = typeof portfolioData;
