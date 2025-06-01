import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail
} from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const footerLinks = [
    {
      title: "About",
      links: [
        { name: "Our Story", href: "#" },
        { name: "Mission", href: "#" },
        { name: "Team", href: "#" },
        { name: "Careers", href: "#" }
      ]
    },
    {
      title: "Academics",
      links: [
        { name: "Programs", href: "#" },
        { name: "Admissions", href: "#" },
        { name: "Calendar", href: "#" },
        { name: "Resources", href: "#" }
      ]
    },
    {
      title: "Connect",
      links: [
        { name: "Contact Us", href: "#" },
        { name: "Support", href: "#" },
        { name: "Campus Map", href: "#" },
        { name: "News", href: "#" }
      ]
    }
  ];

  const socialIcons = [
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    { icon: <Youtube size={20} />, href: "#", label: "YouTube" },
    { icon: <Mail size={20} />, href: "#", label: "Email" }
  ];

  return (
    <footer className="relative mt-20 pt-16 pb-8 bg-cyberpunk-darkBlue overflow-hidden">
      {/* Animated grid overlay */}
      <div className="cyber-grid-overlay opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and description */}
          <div className="space-y-4">
            <Logo className="h-12 w-auto" />
            <p className="text-gray-300 mt-4 max-w-xs">
              Pioneering the future of education with cutting-edge technology and innovative teaching methods.
            </p>
            
            {/* Social icons */}
            <div className="flex space-x-4 mt-6">
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-cyberpunk-cyan text-cyberpunk-cyan 
                             transition-all duration-300 hover:bg-cyberpunk-cyan hover:bg-opacity-20 hover:shadow-[0_0_10px_rgba(0,240,255,0.5)]"
                  whileHover={{ y: -3, scale: 1.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Footer links */}
          {footerLinks.map((column, i) => (
            <div key={i}>
              <h3 className="font-orbitron text-lg mb-4 text-cyberpunk-cyan">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, j) => (
                  <li key={j}>
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-cyberpunk-cyan transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Cyber Academy. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0 flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-cyberpunk-cyan text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-cyberpunk-cyan text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-cyberpunk-cyan text-sm">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;