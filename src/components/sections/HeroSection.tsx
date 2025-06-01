import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, useTexture, Stars } from '@react-three/drei';
import NeonButton from '../ui/NeonButton';
import GlitchText from '../ui/GlitchText';

// Simple 3D Logo Component
const Logo3D = () => {
  return (
    <mesh rotation={[0, Math.PI * 0.25, 0]}>
      <torusKnotGeometry args={[1, 0.3, 128, 32]} />
      <meshStandardMaterial 
        color="#00F0FF" 
        emissive="#00F0FF"
        emissiveIntensity={2}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
};

// Grid Component
const CyberGrid = () => {
  return (
    <group>
      <gridHelper 
        args={[40, 40, '#00F0FF', '#00F0FF']} 
        position={[0, -2, 0]} 
      />
      <gridHelper 
        args={[40, 20, '#FF3864', '#FF3864']} 
        position={[0, -2.5, 0]} 
        rotation={[0, Math.PI / 4, 0]} 
      />
    </group>
  );
};

const HeroSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.8], [0, 100]);
  
  return (
    <section 
      ref={ref}
      id="home" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00F0FF" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FF3864" />
          
          <Logo3D />
          <CyberGrid />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </div>
      
      {/* Content */}
      <motion.div 
        className="container mx-auto px-4 text-center relative z-10"
        style={{ opacity, y }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <GlitchText 
            as="h1" 
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 text-white"
            glitchLevel="medium"
          >
            CYBER ACADEMY
          </GlitchText>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl font-exo text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          <span className="neon-text">Pioneering</span> the future of education with cutting-edge technology and
          <span className="neon-text-pink"> immersive</span> learning experiences
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <NeonButton href="#courses">
            Explore Courses
          </NeonButton>
          
          <NeonButton href="#about" color="pink">
            Learn More
          </NeonButton>
        </motion.div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, 10, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "loop"
        }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-cyberpunk-cyan flex justify-center pt-1">
          <motion.div 
            className="w-1 h-2 bg-cyberpunk-cyan rounded-full"
            animate={{ 
              y: [0, 4, 0],
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;