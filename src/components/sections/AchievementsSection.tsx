import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, BookOpen, Award, Briefcase } from 'lucide-react';
import GlitchText from '../ui/GlitchText';

interface StatProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  color: string;
  delay: number;
}

const StatCounter: React.FC<StatProps> = ({ icon, value, label, color, delay }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (isInView) {
      const duration = 2000; // ms
      const frameDuration = 1000 / 60; // 60fps
      const totalFrames = Math.round(duration / frameDuration);
      let frame = 0;
      
      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const currentCount = Math.floor(value * progress);
        
        setCount(currentCount);
        
        if (frame === totalFrames) {
          clearInterval(counter);
          setCount(value);
        }
      }, frameDuration);
      
      return () => clearInterval(counter);
    }
  }, [isInView, value]);
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className={`text-cyberpunk-${color} flex justify-center mb-4`}>
        {icon}
      </div>
      
      <div className="relative">
        <motion.span 
          className={`text-4xl md:text-5xl font-orbitron font-bold neon-text text-cyberpunk-${color}`}
          animate={isInView ? { 
            textShadow: [
              `0 0 5px rgba(var(--${color}-rgb), 0.7), 0 0 10px rgba(var(--${color}-rgb), 0.5)`,
              `0 0 10px rgba(var(--${color}-rgb), 0.9), 0 0 20px rgba(var(--${color}-rgb), 0.7)`,
              `0 0 5px rgba(var(--${color}-rgb), 0.7), 0 0 10px rgba(var(--${color}-rgb), 0.5)`,
            ]
          } : {}}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
        >
          {count}
        </motion.span>
        <span className="text-4xl md:text-5xl font-orbitron font-bold text-cyberpunk-cyan">+</span>
      </div>
      
      <p className="text-gray-300 mt-2 text-lg">{label}</p>
    </motion.div>
  );
};

const AchievementsSection: React.FC = () => {
  const stats = [
    {
      icon: <Users size={48} />,
      value: 3500,
      label: "Students Enrolled",
      color: "cyan",
      delay: 0.1,
    },
    {
      icon: <BookOpen size={48} />,
      value: 120,
      label: "Specialized Courses",
      color: "pink",
      delay: 0.2,
    },
    {
      icon: <Award size={48} />,
      value: 98,
      label: "Awards Won",
      color: "purple",
      delay: 0.3,
    },
    {
      icon: <Briefcase size={48} />,
      value: 250,
      label: "Industry Partners",
      color: "yellow",
      delay: 0.4,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-cyberpunk-darkBlue">
      {/* Background elements */}
      <div className="cyber-grid-overlay opacity-20"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-cyberpunk-yellow font-orbitron uppercase tracking-wider">Our Impact</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <GlitchText 
                as="h2" 
                className="text-3xl md:text-4xl font-bold mt-2 mb-4"
                glitchLevel="medium"
              >
                ACHIEVEMENTS & MILESTONES
              </GlitchText>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-300 max-w-3xl mx-auto text-lg"
            >
              Cyber Academy has established itself as a leader in technological education.
              Here's a glimpse of our impact and accomplishments over the years.
            </motion.p>
          </div>
          
          {/* Stats grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((stat, index) => (
              <StatCounter
                key={index}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                color={stat.color}
                delay={stat.delay}
              />
            ))}
          </div>
          
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-24 relative"
          >
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-cyberpunk-cyan opacity-30"></div>
            
            {[
              { 
                year: "2020", 
                title: "Academy Founding", 
                description: "Cyber Academy was established with a vision to revolutionize technological education."
              },
              { 
                year: "2021", 
                title: "First Graduating Class", 
                description: "Our pioneering cohort of 150 students graduated with a 98% job placement rate."
              },
              { 
                year: "2023", 
                title: "Global Expansion", 
                description: "Opened satellite campuses in Tokyo, Berlin, and Singapore, bringing our curriculum worldwide."
              },
              { 
                year: "2024", 
                title: "Industry Recognition", 
                description: "Named 'Most Innovative Educational Institution' by the Global Tech Council."
              }
            ].map((milestone, index) => (
              <div 
                key={index} 
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                <div className="w-1/2">
                  <div className={`${index % 2 === 0 ? 'ml-12' : 'mr-12'}`}>
                    <div className={`p-6 rounded-lg bg-cyberpunk-darkBlue bg-opacity-80 border border-cyberpunk-${index % 2 === 0 ? 'pink' : 'cyan'}`}>
                      <h3 className="text-xl font-orbitron mb-2 text-white">{milestone.title}</h3>
                      <p className="text-gray-300">{milestone.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-cyberpunk-darkBlue border-4 border-cyberpunk-cyan flex items-center justify-center z-10">
                  <span className="font-orbitron font-bold text-cyberpunk-cyan">{milestone.year}</span>
                </div>
                
                <div className="w-1/2"></div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;