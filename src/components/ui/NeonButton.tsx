import React from 'react';
import { motion } from 'framer-motion';

interface NeonButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  color?: 'cyan' | 'pink' | 'purple';
  className?: string;
  fullWidth?: boolean;
}

const NeonButton: React.FC<NeonButtonProps> = ({
  children,
  href,
  onClick,
  color = 'cyan',
  className = '',
  fullWidth = false,
}) => {
  // Define color styles based on the color prop
  const getColorStyles = () => {
    switch (color) {
      case 'pink':
        return {
          borderColor: 'border-cyberpunk-pink',
          shadow: 'shadow-[0_0_10px_rgba(255,56,100,0.5)]',
          hoverShadow: 'hover:shadow-[0_0_20px_rgba(255,56,100,0.8)]',
          bgColor: 'bg-cyberpunk-pink',
        };
      case 'purple':
        return {
          borderColor: 'border-cyberpunk-purple',
          shadow: 'shadow-[0_0_10px_rgba(110,13,255,0.5)]',
          hoverShadow: 'hover:shadow-[0_0_20px_rgba(110,13,255,0.8)]',
          bgColor: 'bg-cyberpunk-purple',
        };
      default:
        return {
          borderColor: 'border-cyberpunk-cyan',
          shadow: 'shadow-[0_0_10px_rgba(0,240,255,0.5)]',
          hoverShadow: 'hover:shadow-[0_0_20px_rgba(0,240,255,0.8)]',
          bgColor: 'bg-cyberpunk-cyan',
        };
    }
  };

  const colorStyles = getColorStyles();

  // Common button styles
  const buttonStyles = `
    relative overflow-hidden px-6 py-2 rounded-md bg-transparent 
    border ${colorStyles.borderColor} text-white 
    transition-all duration-300 ${colorStyles.shadow} ${colorStyles.hoverShadow}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `;

  // The animated component
  const ButtonContent = () => (
    <>
      <span className="relative z-10 font-orbitron font-medium">
        {children}
      </span>
      <motion.span
        className={`absolute inset-0 ${colorStyles.bgColor} opacity-10`}
        initial={{ opacity: 0.1 }}
        whileHover={{ opacity: 0.2 }}
        transition={{ duration: 0.3 }}
      />
    </>
  );

  // Render as link or button based on props
  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonStyles}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        <ButtonContent />
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={buttonStyles}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <ButtonContent />
    </motion.button>
  );
};

export default NeonButton;