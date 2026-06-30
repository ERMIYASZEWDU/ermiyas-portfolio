import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, link: 'https://github.com/ERMIYASZEWDU', label: 'GitHub' },
    { icon: <Linkedin size={20} />, link: 'https://www.linkedin.com/in/ermiyas2', label: 'LinkedIn' },
    { icon: <Mail size={20} />, link: 'mailto:ermiyaszewdu266@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-dark-card border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Ermiyas Zewdu</h3>
            <p className="text-gray-400 mb-4">
              AI Engineer & Data Scientist building intelligent systems that transform data into decisions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-2 glass rounded-lg hover:bg-primary-600/20 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="mailto:ermiyaszewdu266@gmail.com" className="hover:text-primary-400 transition-colors">
                  ermiyaszewdu266@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+251904369076" className="hover:text-primary-400 transition-colors">
                  +251 904 369 076
                </a>
              </li>
              <li>Addis Ababa, Ethiopia</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <p className="text-gray-400 text-sm text-center">
              © {currentYear} Ermiyas Zewdu. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
