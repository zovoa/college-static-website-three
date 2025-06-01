import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import CoursesSection from './components/sections/CoursesSection';
import EventsSection from './components/sections/EventsSection';
import AchievementsSection from './components/sections/AchievementsSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  // Change page title when component mounts
  useEffect(() => {
    document.title = "Cyber Academy | Future of Education";
    
    // Optional: Add any global animations or effects here
    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
  <BrowserRouter basename="/college-static-website-three">
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-cyberpunk-black text-white overflow-hidden"
    >
      <div className="cyber-grid-overlay" />
      
      <Header />
      
      <main>
        <HeroSection />
        <AboutSection />
        <CoursesSection />
        <EventsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </motion.div>
  </BrowserRouter>
);
}

export default App;