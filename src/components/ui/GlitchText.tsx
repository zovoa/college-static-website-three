import React from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  glitchLevel?: 'low' | 'medium' | 'high';
}

const GlitchText: React.FC<GlitchTextProps> = ({
  children,
  className = '',
  as = 'h2',
  glitchLevel = 'medium',
}) => {
  // Convert the children to string to use as data-text
  const textContent = React.Children.toArray(children).join('');
  
  // Define animation strength based on glitch level
  const getGlitchAnimation = () => {
    switch (glitchLevel) {
      case 'low':
        return {
          glitchIntensity: [0, 0.2, 0, 0.1, 0],
          glitchSpeed: 8,
          glitchProbability: 0.2,
        };
      case 'high':
        return {
          glitchIntensity: [0, 0.8, 0.2, 0.9, 0],
          glitchSpeed: 3,
          glitchProbability: 0.7,
        };
      default: // medium
        return {
          glitchIntensity: [0, 0.4, 0.1, 0.5, 0],
          glitchSpeed: 5,
          glitchProbability: 0.4,
        };
    }
  };

  const { glitchIntensity, glitchSpeed, glitchProbability } = getGlitchAnimation();

  // Randomly trigger glitch animation
  const shouldGlitch = Math.random() < glitchProbability;

  const Component = motion[as] as any; // TypeScript workaround for dynamic components

  return (
    <Component
      className={`relative overflow-hidden font-orbitron ${className}`}
      data-text={textContent}
    >
      <span className="relative z-10">{children}</span>
      
      {/* Cyan Glitch Layer */}
      <motion.span
        className="absolute left-0 top-0 w-full h-full text-cyberpunk-cyan opacity-0"
        animate={shouldGlitch ? {
          x: [0, -3, 0, -2, 0],
          opacity: glitchIntensity,
        } : {}}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          repeatDelay: glitchSpeed,
        }}
        aria-hidden="true"
      >
        {children}
      </motion.span>
      
      {/* Pink Glitch Layer */}
      <motion.span
        className="absolute left-0 top-0 w-full h-full text-cyberpunk-pink opacity-0"
        animate={shouldGlitch ? {
          x: [0, 3, 0, 2, 0],
          opacity: glitchIntensity,
        } : {}}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          repeatDelay: glitchSpeed,
        }}
        aria-hidden="true"
      >
        {children}
      </motion.span>
    </Component>
  );
};

export default GlitchText;