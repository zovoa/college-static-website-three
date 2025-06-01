import React from 'react';
import { motion } from 'framer-motion';

interface NeonCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'pink' | 'purple' | 'yellow';
  hoverEffect?: boolean;
  onClick?: () => void;
}

const NeonCard: React.FC<NeonCardProps> = ({
  children,
  className = '',
  glowColor = 'cyan',
  hoverEffect = true,
  onClick,
}) => {
  // Define glow color styles
  const getGlowStyles = () => {
    switch (glowColor) {
      case 'pink':
        return 'before:border-cyberpunk-pink before:shadow-[0_0_15px_rgba(255,56,100,0.5)]';
      case 'purple':
        return 'before:border-cyberpunk-purple before:shadow-[0_0_15px_rgba(110,13,255,0.5)]';
      case 'yellow':
        return 'before:border-cyberpunk-yellow before:shadow-[0_0_15px_rgba(255,223,0,0.5)]';
      default:
        return 'before:border-cyberpunk-cyan before:shadow-[0_0_15px_rgba(0,240,255,0.5)]';
    }
  };

  const cardVariants = {
    initial: { y: 0, scale: 1 },
    hover: hoverEffect 
      ? { y: -8, scale: 1.02, transition: { duration: 0.3 } } 
      : {},
  };

  return (
    <motion.div
      className={`
        relative overflow-hidden bg-cyberpunk-darkBlue bg-opacity-70 backdrop-blur-sm rounded-lg p-6
        before:content-[''] before:absolute before:inset-0 before:rounded-lg before:border before:z-[-1]
        ${getGlowStyles()}
        ${className}
      `}
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default NeonCard;