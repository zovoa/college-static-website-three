import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import NeonInput from '../ui/NeonInput';
import NeonButton from '../ui/NeonButton';
import GlitchText from '../ui/GlitchText';

const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset submitted state after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email Us",
      content: "admissions@cyberacademy.edu",
      color: "text-cyberpunk-cyan",
    },
    {
      icon: <MapPin size={24} />,
      title: "Visit Us",
      content: "123 Tech Avenue, Neo City",
      color: "text-cyberpunk-pink",
    },
    {
      icon: <Phone size={24} />,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      color: "text-cyberpunk-purple",
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
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
              <span className="text-cyberpunk-green font-orbitron uppercase tracking-wider">Get In Touch</span>
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
                CONTACT US
              </GlitchText>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-300 max-w-3xl mx-auto text-lg"
            >
              Have questions about our programs, admissions, or events?
              Reach out to our team, and we'll be happy to assist you.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="space-y-10">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex">
                    <div className={`mr-4 ${info.color}`}>
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-orbitron mb-1">{info.title}</h3>
                      <p className="text-gray-300">{info.content}</p>
                    </div>
                  </div>
                ))}
                
                {/* Map placeholder */}
                <div className="mt-8 relative overflow-hidden rounded-lg neon-border h-[200px]">
                  <div className="absolute inset-0 bg-cyberpunk-darkBlue flex items-center justify-center">
                    <p className="text-cyberpunk-cyan font-orbitron">Interactive Map</p>
                    <div className="absolute inset-0 cyber-grid-overlay opacity-40"></div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="bg-cyberpunk-darkBlue bg-opacity-50 backdrop-blur-sm p-8 rounded-lg border border-cyberpunk-cyan shadow-[0_0_20px_rgba(0,240,255,0.3)]">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="w-16 h-16 mx-auto bg-cyberpunk-cyan bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                      <Send size={32} className="text-cyberpunk-cyan" />
                    </div>
                    <h3 className="text-2xl font-orbitron mb-2 text-white">Message Sent!</h3>
                    <p className="text-gray-300">
                      Thank you for reaching out. We'll get back to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <NeonInput
                        name="name"
                        id="name"
                        placeholder="Your Name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        label="Name"
                      />
                      <NeonInput
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        label="Email"
                      />
                    </div>
                    
                    <NeonInput
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      label="Subject"
                    />
                    
                    <NeonInput
                      multiline
                      rows={5}
                      name="message"
                      id="message"
                      placeholder="Your Message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      label="Message"
                    />
                    
                    <div className="mt-6">
                      <NeonButton
                        type="submit"
                        className="flex items-center justify-center"
                        fullWidth
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                              <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            Send Message
                            <Send size={18} className="ml-2" />
                          </span>
                        )}
                      </NeonButton>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;