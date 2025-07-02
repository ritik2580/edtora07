import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-4 bg-black/80 backdrop-blur-md shadow-lg' 
          : 'py-6 bg-transparent'
      }`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          className="text-2xl font-bold font-display tracking-wider text-white" 
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <motion.span 
            className="text-gradient"
            whileHover={{ 
              textShadow: "0 0 8px rgba(255, 0, 200, 0.8)"
            }}
          >
            EDITORA
          </motion.span>
        </motion.div>

        <nav className="hidden md:block">
          <motion.ul className="flex space-x-8" variants={navVariants}>
            {['Home', 'About', 'Projects', 'Services', 'Testimonials', 'Contact'].map((item) => (
              <motion.li 
                key={item} 
                variants={itemVariants}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="text-white/80 hover:text-cyan-400 font-medium uppercase text-sm tracking-wider transition-colors duration-300 pb-1 border-b-2 border-transparent hover:border-cyan-400"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </nav>

        <motion.div 
          className="md:hidden"
          variants={itemVariants}
        >
          <motion.button 
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </motion.div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div 
          className="fixed inset-0 bg-black/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ul className="flex flex-col items-center space-y-8">
            {['Home', 'About', 'Projects', 'Services', 'Testimonials', 'Contact'].map((item) => (
              <motion.li 
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * ['Home', 'About', 'Projects', 'Services', 'Testimonials', 'Contact'].indexOf(item) }}
              >
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="text-white text-xl font-medium uppercase tracking-widest relative group"
                  onClick={toggleMobileMenu}
                >
                  <span>{item}</span>
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-fuchsia-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
              </motion.li>
            ))}
          </ul>
          <motion.button 
            className="absolute top-6 right-6 text-white"
            onClick={toggleMobileMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <X size={24} />
          </motion.button>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
