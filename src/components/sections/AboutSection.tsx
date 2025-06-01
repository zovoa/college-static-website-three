import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShieldCheck, Lightbulb, Users, Award } from 'lucide-react';
import NeonCard from '../ui/NeonCard';
import GlitchText from '../ui/GlitchText';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: 'cyan' | 'pink' | 'purple' | 'yellow';
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, color, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <NeonCard glowColor={color} className="h-full">
        <div className="flex flex-col items-center text-center">
          <div className={`mb-4 text-cyberpunk-${color} p-3 rounded-full`}>
            {icon}
          </div>
          <h3 className="text-xl font-orbitron mb-2 text-white">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </NeonCard>
    </motion.div>
  );
};

const AboutSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const features = [
    {
      icon: <Lightbulb size={32} />,
      title: "Innovative Curriculum",
      description: "Our programs blend cutting-edge technology with forward-thinking educational approaches.",
      color: "cyan" as const,
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Industry Partnerships",
      description: "Connect with leading tech companies and gain real-world experience through our partnerships.",
      color: "pink" as const,
    },
    {
      icon: <Users size={32} />,
      title: "Expert Faculty",
      description: "Learn from industry professionals and academic experts at the forefront of their fields.",
      color: "purple" as const,
    },
    {
      icon: <Award size={32} />,
      title: "Future-Ready Skills",
      description: "Develop the technical and creative skills needed to thrive in tomorrow's digital landscape.",
      color: "yellow" as const,
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="cyber-grid-overlay"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-cyberpunk-cyan font-orbitron uppercase tracking-wider">Who We Are</span>
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
              >
                REDEFINING EDUCATION
              </GlitchText>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-300 max-w-3xl mx-auto text-lg"
            >
              Cyber Academy is where technology and education converge, creating an 
              immersive learning environment that prepares students for the digital 
              frontier of tomorrow.
            </motion.p>
          </div>
          
          {/* Main content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            {/* Left column - Image */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg neon-border">
                <img 
                  src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Futuristic classroom with advanced technology" 
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-cyberpunk-darkBlue via-transparent to-transparent opacity-60"></div>
              </div>
            </motion.div>
            
            {/* Right column - Text content */}
            <div className="flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-orbitron mb-4 text-cyberpunk-cyan">Our Mission</h3>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-gray-300 mb-4"
              >
                At Cyber Academy, we're on a mission to revolutionize education through technology. 
                We believe learning should be an immersive, interactive experience that prepares 
                students for the challenges of tomorrow's digital landscape.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-gray-300 mb-6"
              >
                Our cutting-edge curriculum combines traditional academic excellence with the 
                latest advancements in virtual reality, artificial intelligence, and digital 
                collaboration tools. We're not just teaching subjects—we're creating the next 
                generation of innovators, problem-solvers, and digital pioneers.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {["Immersive Learning", "Advanced Technology", "Industry Experts", "Global Community"].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-cyberpunk-cyan rounded-full mr-2"></div>
                    <span className="text-white text-sm">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
          
          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                color={feature.color}
                delay={0.1 * (index + 1)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;