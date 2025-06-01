import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import Logo from '../ui/Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Animation variants
  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      }
    }),
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Events', href: '#events' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-cyberpunk-darkBlue bg-opacity-80 backdrop-blur-md shadow-[0_0_15px_rgba(0,240,255,0.3)]' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Logo className="h-12 w-auto" />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
              className="group relative px-2 py-1 font-orbitron text-sm uppercase tracking-wider transition-colors"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-cyberpunk-cyan transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
          
          <motion.a
            href="#contact"
            custom={navItems.length}
            initial="hidden"
            animate="visible"
            variants={navItemVariants}
            className="neon-button font-orbitron text-sm uppercase tracking-wider"
          >
            Enroll Now
          </motion.a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-1"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-cyberpunk-cyan" />
          ) : (
            <Menu className="h-6 w-6 text-cyberpunk-cyan" />
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? 'auto' : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-cyberpunk-darkBlue bg-opacity-95 backdrop-blur-md"
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item, i) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center py-2 px-4 border-l-2 border-cyberpunk-cyan font-orbitron text-sm uppercase tracking-wider"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <ChevronRight className="h-4 w-4 mr-2 text-cyberpunk-cyan" />
                {item.name}
              </a>
            ))}
            
            <a
              href="#contact"
              className="neon-button mt-4 text-center font-orbitron text-sm uppercase tracking-wider"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Enroll Now
            </a>
          </nav>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;