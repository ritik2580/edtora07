import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-slate-900 to-zinc-900">
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-3/4 h-3/4 bg-gradient-radial from-cyan-500/10 to-transparent rounded-full animate-pulse-slow"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-3/4 h-3/4 bg-gradient-radial from-fuchsia-500/10 to-transparent rounded-full animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[url('https://assets.website-files.com/61d1bff2b961eaf3ff3abd7c/620e923bab9dfa1e21f4be41_noise.png')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold font-display mb-6 glitch-text"
              data-text="EDITORA"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500">EDITORA</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/70 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Crafting Exceptional <span className="text-cyan-400">Visual</span> Experiences
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <motion.a 
                href="#projects" 
                className="px-8 py-3 bg-gradient-to-r from-fuchsia-600 to-fuchsia-500 hover:from-fuchsia-500 hover:to-fuchsia-600 text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-fuchsia-500/20 transform hover:-translate-y-1"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 10px 25px -5px rgba(255, 0, 200, 0.4)",
                  y: -5
                }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              <motion.a 
                href="#contact" 
                className="px-8 py-3 bg-transparent border border-white/30 text-white font-medium rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/50 transform hover:-translate-y-1"
                whileHover={{ 
                  scale: 1.05, 
                  borderColor: "rgba(255, 0, 200, 0.5)",
                  y: -5
                }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full blur-2xl opacity-30"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              ></motion.div>
              <motion.img 
                src="https://images.unsplash.com/photo-1616763355548-1b606f439f86?q=80&w=1000&auto=format&fit=crop" 
                alt="Video production equipment" 
                className="rounded-2xl shadow-2xl shadow-fuchsia-500/10 w-full max-w-lg object-cover relative z-10 border border-white/10"
                whileHover={{ scale: 1.03, rotate: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div
                className="absolute -bottom-4 -right-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-2 z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 10px 25px -5px rgba(255, 0, 200, 0.2)",
                  borderColor: "rgba(255, 0, 200, 0.3)"
                }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500 font-medium">
                  Professional Video Editing
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
      >
        <p className="text-white/50 text-sm mb-2">Scroll to explore</p>
        <ChevronDown className="text-white/50 animate-bounce" size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
