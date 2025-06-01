import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-10 w-auto" }) => {
  return (
    <motion.div 
      className={`flex items-center ${className}`}
      whileHover={{ scale: 1.05 }}
    >
      <div className="mr-2 relative">
        <Zap 
          size={24} 
          className="text-cyberpunk-cyan relative z-10" 
        />
        <motion.div 
          className="absolute inset-0 bg-cyberpunk-cyan rounded-full opacity-30 blur-md"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>
      <div className="font-orbitron font-bold tracking-wider text-xl">
        <span className="text-white">CYBER</span>
        <span className="text-cyberpunk-cyan">ACADEMY</span>
      </div>
    </motion.div>
  );
};

export default Logo;