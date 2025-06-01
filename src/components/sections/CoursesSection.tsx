import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Cpu, Headset as VrHeadset, Shield, Network, Bot, ChevronRight } from 'lucide-react';
import NeonCard from '../ui/NeonCard';
import NeonButton from '../ui/NeonButton';
import GlitchText from '../ui/GlitchText';

interface Course {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: 'cyan' | 'pink' | 'purple' | 'yellow';
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: "Neural Interface Development",
    description: "Learn to design and program neural interfaces for direct brain-computer communication.",
    icon: <Cpu size={36} />,
    color: "cyan",
    category: "Engineering",
    difficulty: "Advanced",
    duration: "16 weeks"
  },
  {
    id: 2,
    title: "Quantum Encryption",
    description: "Master the principles and applications of quantum cryptography for unhackable communications.",
    icon: <Shield size={36} />,
    color: "pink",
    category: "Cybersecurity",
    difficulty: "Advanced",
    duration: "14 weeks"
  },
  {
    id: 3,
    title: "Full-Stack Metaverse Development",
    description: "Build immersive, persistent virtual worlds with advanced networking and physics.",
    icon: <VrHeadset size={36} />,
    color: "purple",
    category: "Programming",
    difficulty: "Intermediate",
    duration: "20 weeks"
  },
  {
    id: 4,
    title: "Advanced Synthetic Intelligence",
    description: "Create and deploy autonomous AI systems with ethical constraints and human-like reasoning.",
    icon: <Bot size={36} />,
    color: "cyan",
    category: "AI & ML",
    difficulty: "Advanced",
    duration: "18 weeks"
  },
  {
    id: 5,
    title: "Digital Identity Protection",
    description: "Learn to secure personal and corporate digital identities against next-gen threats.",
    icon: <Shield size={36} />,
    color: "yellow",
    category: "Cybersecurity",
    difficulty: "Beginner",
    duration: "12 weeks"
  },
  {
    id: 6,
    title: "Holographic Interface Design",
    description: "Design intuitive holographic user interfaces for spatial computing environments.",
    icon: <Code size={36} />,
    color: "pink",
    category: "Design",
    difficulty: "Intermediate",
    duration: "10 weeks"
  },
  {
    id: 7,
    title: "Decentralized Network Architecture",
    description: "Design resilient mesh networks for autonomous systems and smart city infrastructure.",
    icon: <Network size={36} />,
    color: "purple",
    category: "Networking",
    difficulty: "Intermediate",
    duration: "14 weeks"
  },
  {
    id: 8,
    title: "Augmented Reality Systems",
    description: "Build next-generation AR applications for industrial, medical, and entertainment uses.",
    icon: <VrHeadset size={36} />,
    color: "cyan",
    category: "Programming",
    difficulty: "Beginner",
    duration: "16 weeks"
  }
];

interface FilterState {
  category: string;
  difficulty: string;
}

const CoursesSection: React.FC = () => {
  const [filter, setFilter] = useState<FilterState>({
    category: 'All',
    difficulty: 'All'
  });
  const [hoveredCourse, setHoveredCourse] = useState<number | null>(null);

  const categories = ['All', ...Array.from(new Set(courses.map(course => course.category)))];
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredCourses = courses.filter(course => {
    return (
      (filter.category === 'All' || course.category === filter.category) &&
      (filter.difficulty === 'All' || course.difficulty === filter.difficulty)
    );
  });

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    setFilter(prev => ({ ...prev, [key]: value }));
  };

  return (
    <section id="courses" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="cyber-grid-overlay"></div>
      
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
              <span className="text-cyberpunk-purple font-orbitron uppercase tracking-wider">Our Programs</span>
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
                CUTTING-EDGE COURSES
              </GlitchText>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-300 max-w-3xl mx-auto text-lg"
            >
              Expand your knowledge and master the technologies that will define the future.
              Our specialized programs are designed to keep you at the forefront of innovation.
            </motion.p>
          </div>
          
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-10 flex flex-col md:flex-row gap-4 justify-center"
          >
            <div className="flex flex-wrap justify-center gap-2">
              <span className="text-white font-orbitron text-sm mr-2 my-auto">Category:</span>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleFilterChange('category', category)}
                  className={`px-4 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter.category === category
                      ? 'bg-cyberpunk-cyan text-black shadow-[0_0_10px_rgba(0,240,255,0.5)]'
                      : 'bg-transparent border border-gray-600 text-gray-300 hover:border-cyberpunk-cyan'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              <span className="text-white font-orbitron text-sm mr-2 my-auto">Difficulty:</span>
              {difficulties.map((difficulty) => (
                <button
                  key={difficulty}
                  onClick={() => handleFilterChange('difficulty', difficulty)}
                  className={`px-4 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter.difficulty === difficulty
                      ? 'bg-cyberpunk-purple text-white shadow-[0_0_10px_rgba(110,13,255,0.5)]'
                      : 'bg-transparent border border-gray-600 text-gray-300 hover:border-cyberpunk-purple'
                  }`}
                >
                  {difficulty}
                </button>
              ))}
            </div>
          </motion.div>
          
          {/* Courses grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onHoverStart={() => setHoveredCourse(course.id)}
                  onHoverEnd={() => setHoveredCourse(null)}
                >
                  <NeonCard 
                    glowColor={course.color} 
                    className="h-full"
                  >
                    <div className="flex flex-col h-full">
                      <div className="mb-4">
                        <div className={`inline-block p-3 rounded-full text-cyberpunk-${course.color}`}>
                          {course.icon}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-orbitron mb-2 text-white">
                        {course.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-4 flex-grow">{course.description}</p>
                      
                      <div className="mt-auto">
                        <div className="flex justify-between items-center mb-4 text-sm">
                          <span className="bg-cyberpunk-darkBlue px-2 py-1 rounded text-cyberpunk-cyan">
                            {course.difficulty}
                          </span>
                          <span className="text-gray-400">{course.duration}</span>
                        </div>
                        
                        <AnimatePresence>
                          {hoveredCourse === course.id && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              transition={{ duration: 0.2 }}
                            >
                              <a 
                                href="#" 
                                className="flex items-center text-cyberpunk-cyan font-orbitron text-sm"
                              >
                                View Course Details
                                <ChevronRight className="h-4 w-4 ml-1" />
                              </a>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </NeonCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <NeonButton href="#" color="purple">
              View All Programs
            </NeonButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;