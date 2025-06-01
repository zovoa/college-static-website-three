import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import NeonCard from '../ui/NeonCard';
import GlitchText from '../ui/GlitchText';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  imageUrl: string;
  color: 'cyan' | 'pink' | 'purple' | 'yellow';
}

const events: Event[] = [
  {
    id: 1,
    title: "Neural Interface Symposium",
    description: "Join world-leading experts for discussions on the future of brain-computer interfaces and neural augmentation.",
    date: "June 15, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Main Auditorium",
    imageUrl: "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    color: "cyan"
  },
  {
    id: 2,
    title: "Cybersecurity Hackathon",
    description: "Test your skills against simulated next-gen threats in our annual cybersecurity competition.",
    date: "July 8-10, 2025",
    time: "All Day Event",
    location: "Tech Labs, Building C",
    imageUrl: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    color: "pink"
  },
  {
    id: 3,
    title: "AR/VR Career Expo",
    description: "Connect with leading technology companies seeking talent in augmented and virtual reality development.",
    date: "August 22, 2025",
    time: "1:00 PM - 6:00 PM",
    location: "Innovation Center",
    imageUrl: "https://images.pexels.com/photos/6804581/pexels-photo-6804581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    color: "purple"
  },
  {
    id: 4,
    title: "AI Ethics Conference",
    description: "Explore the ethical implications of advanced AI systems and synthetic intelligence with industry leaders.",
    date: "September 5, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Conference Hall, Building A",
    imageUrl: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    color: "yellow"
  },
  {
    id: 5,
    title: "Quantum Computing Workshop",
    description: "Hands-on introduction to quantum computing principles and programming for beginners and enthusiasts.",
    date: "October 12, 2025",
    time: "10:00 AM - 3:00 PM",
    location: "Quantum Lab, Building D",
    imageUrl: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    color: "cyan"
  }
];

const EventsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const visibleEvents = events.slice(currentIndex, currentIndex + (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1));
  
  const nextSlide = () => {
    if (currentIndex < events.length - 1) {
      setCurrentIndex(prev => 
        Math.min(prev + 1, events.length - (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1))
      );
    }
  };
  
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <section id="events" className="py-24 relative overflow-hidden">
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
              <span className="text-cyberpunk-pink font-orbitron uppercase tracking-wider">What's Happening</span>
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
                UPCOMING EVENTS
              </GlitchText>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-300 max-w-3xl mx-auto text-lg"
            >
              Explore our calendar of innovative events, workshops, and industry conferences
              designed to expand your horizons and connect you with like-minded innovators.
            </motion.p>
          </div>
          
          {/* Events carousel */}
          <div className="relative">
            <div 
              ref={carouselRef}
              className="overflow-hidden"
            >
              <motion.div 
                className="flex gap-6"
                initial={false}
                animate={{ x: -currentIndex * (100 / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1)) + '%' }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {events.map((event, index) => (
                  <motion.div
                    key={event.id}
                    className="min-w-full md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <NeonCard glowColor={event.color} className="h-full">
                      <div className="relative h-48 mb-4 overflow-hidden rounded-md">
                        <img 
                          src={event.imageUrl} 
                          alt={event.title} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-cyberpunk-black to-transparent opacity-70"></div>
                      </div>
                      
                      <h3 className="text-xl font-orbitron mb-3 text-white">{event.title}</h3>
                      <p className="text-gray-300 mb-4">{event.description}</p>
                      
                      <div className="space-y-2 mt-auto">
                        <div className="flex items-center text-sm text-gray-300">
                          <Calendar size={16} className="mr-2 text-cyberpunk-pink" />
                          {event.date}
                        </div>
                        
                        <div className="flex items-center text-sm text-gray-300">
                          <Clock size={16} className="mr-2 text-cyberpunk-pink" />
                          {event.time}
                        </div>
                        
                        <div className="flex items-center text-sm text-gray-300">
                          <MapPin size={16} className="mr-2 text-cyberpunk-pink" />
                          {event.location}
                        </div>
                      </div>
                    </NeonCard>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`absolute left-0 top-1/2 -translate-y-1/2 -ml-5 z-10 bg-cyberpunk-darkBlue bg-opacity-80 p-2 rounded-full 
                         border border-cyberpunk-cyan shadow-[0_0_10px_rgba(0,240,255,0.5)]
                         ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
              aria-label="Previous event"
            >
              <ChevronLeft size={24} className="text-cyberpunk-cyan" />
            </button>
            
            <button
              onClick={nextSlide}
              disabled={currentIndex >= events.length - (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1)}
              className={`absolute right-0 top-1/2 -translate-y-1/2 -mr-5 z-10 bg-cyberpunk-darkBlue bg-opacity-80 p-2 rounded-full 
                         border border-cyberpunk-cyan shadow-[0_0_10px_rgba(0,240,255,0.5)]
                         ${currentIndex >= events.length - (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1) ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
              aria-label="Next event"
            >
              <ChevronRight size={24} className="text-cyberpunk-cyan" />
            </button>
          </div>
          
          {/* Carousel indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(events.length / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1)) }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i * (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1))}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === Math.floor(currentIndex / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1))
                    ? 'bg-cyberpunk-pink w-6'
                    : 'bg-gray-600'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;