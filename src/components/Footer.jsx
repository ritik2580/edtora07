import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('https://assets.website-files.com/61d1bff2b961eaf3ff3abd7c/620e923bab9dfa1e21f4be41_noise.png')] opacity-[0.05] mix-blend-overlay"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <motion.h3 
                className="text-2xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500 mb-6"
                whileHover={{ 
                  textShadow: "0 0 8px rgba(255, 0, 200, 0.8)"
                }}
              >
                EDITORA
              </motion.h3>
              <p className="text-white/70 mb-6 max-w-xs">
                Crafting exceptional visual experiences that captivate audiences and bring your creative vision to life.
              </p>
              <div className="flex space-x-4">
                <motion.a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-fuchsia-500 transition-colors duration-300"
                  whileHover={{ y: -5, scale: 1.1, backgroundColor: "rgba(255, 0, 200, 0.8)" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Facebook size={18} className="text-white" />
                </motion.a>
                <motion.a 
                  href="https://www.instagram.com/editorastudio07?igsh=dWw3c3R5Z2VqY2ty" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-fuchsia-500 transition-colors duration-300"
                  whileHover={{ y: -5, scale: 1.1, backgroundColor: "rgba(255, 0, 200, 0.8)" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Instagram size={18} className="text-white" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-fuchsia-500 transition-colors duration-300"
                  whileHover={{ y: -5, scale: 1.1, backgroundColor: "rgba(255, 0, 200, 0.8)" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Twitter size={18} className="text-white" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-fuchsia-500 transition-colors duration-300"
                  whileHover={{ y: -5, scale: 1.1, backgroundColor: "rgba(255, 0, 200, 0.8)" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Youtube size={18} className="text-white" />
                </motion.a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {['Home', 'About', 'Projects', 'Services', 'Testimonials', 'Contact'].map((item, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className="text-white/70 hover:text-fuchsia-500 transition-colors duration-300 flex items-center"
                    >
                      <span className="mr-2 opacity-0 text-fuchsia-500 group-hover:opacity-100 transition-opacity">•</span>
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Contact Info</h4>
              <ul className="space-y-4">
                <motion.li 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-fuchsia-500 mr-3 mt-1">📱</span>
                  <div>
                    <p className="text-white/70">Laxman: +91 9536428507</p>
                  </div>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-fuchsia-500 mr-3 mt-1">📧</span>
                  <p className="text-white/70">editoraeditorastudio07@gmail.com</p>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-fuchsia-500 mr-3 mt-1">📍</span>
                  <p className="text-white/70">Dehradun, India</p>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-fuchsia-500 mr-3 mt-1">📸</span>
                  <a 
                    href="https://www.instagram.com/p/DLchB56S4wN/?igsh=MTRpbWxzd3M0M2FjdQ==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-fuchsia-400 transition-colors"
                  >
                    Instagram: @editorastudio
                  </a>
                </motion.li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="py-6 border-t border-white/10 text-center">
          <p className="text-white/50 text-sm">
            &copy; {currentYear} EDITORA. All rights reserved.
          </p>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <div className="absolute right-6 bottom-6">
        <motion.a 
          href="#home"
          className="w-12 h-12 rounded-full bg-fuchsia-500 flex items-center justify-center shadow-lg shadow-fuchsia-500/20 hover:bg-fuchsia-600 transition-colors duration-300"
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </motion.a>
      </div>
    </footer>
  );
};

export default Footer;
