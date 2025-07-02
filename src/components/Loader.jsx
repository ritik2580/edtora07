import { motion } from 'framer-motion';

const Loader = ({ isLoading }) => {
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050510] overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{ pointerEvents: isLoading ? 'auto' : 'none' }}
    >
      {/* Futuristic Grid */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 grid grid-cols-8 sm:grid-cols-12 grid-rows-8 sm:grid-rows-12 gap-px opacity-20">
          {[...Array(96)].map((_, i) => (
            <motion.div
              key={i}
              className="border border-cyan-500/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: Math.random() * 0.5 + 0.1 }}
              transition={{ 
                duration: Math.random() * 2 + 1, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Horizontal scan line */}
      <motion.div 
        className="absolute h-[2px] w-full bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent opacity-50"
        animate={{ 
          y: ['-30vh', '30vh'],
          opacity: [0.1, 0.7, 0.1]
        }}
        transition={{ 
          y: { duration: 3, repeat: Infinity, repeatType: "mirror" },
          opacity: { duration: 3, repeat: Infinity, repeatType: "mirror" }
        }}
      />
      
      {/* Main loader animation */}
      <div className="relative z-10 perspective-[1200px]">
        <motion.div 
          className="relative w-48 h-48 sm:w-64 sm:h-64"
          animate={{ rotateY: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          {/* 3D cube effect */}
          <motion.div
            className="absolute inset-0 w-full h-full"
            initial={{ rotateX: 0, rotateY: 0 }}
            animate={{ rotateX: 360, rotateY: 180 }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Front face */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              style={{ backfaceVisibility: 'hidden', transformStyle: 'preserve-3d', transform: 'translateZ(20px)' }}
            >
              <div className="w-36 h-36 sm:w-48 sm:h-48 border-2 border-fuchsia-500/50 rounded-xl flex items-center justify-center">
                <motion.div
                  className="w-24 h-24 sm:w-32 sm:h-32 border-2 border-cyan-400/70 rounded-xl flex items-center justify-center"
                  animate={{ rotate: 180 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <motion.div
                    className="text-5xl sm:text-6xl font-bold text-white relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-400 font-display">E</span>
                    <div className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-transparent to-[#050510] animate-pulse-slow" />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Back face */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              style={{ backfaceVisibility: 'hidden', transformStyle: 'preserve-3d', transform: 'translateZ(-20px) rotateY(180deg)' }}
            >
              <div className="w-36 h-36 sm:w-48 sm:h-48 border-2 border-cyan-400/50 rounded-xl flex items-center justify-center">
                <motion.div
                  className="w-24 h-24 sm:w-32 sm:h-32 border-2 border-fuchsia-500/70 rounded-xl flex items-center justify-center"
                  animate={{ rotate: -180 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <div className="text-white text-sm sm:text-base text-center px-4 opacity-70">
                    EST<br/>2022
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Animated rings */}
          <motion.div 
            className="absolute inset-0 border-4 border-t-fuchsia-500 border-r-transparent border-b-cyan-400 border-l-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          
          <motion.div 
            className="absolute inset-3 border-4 border-t-transparent border-r-cyan-400 border-b-transparent border-l-fuchsia-500 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
        
        {/* Brand name */}
        <motion.div 
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.h1 
            className="text-3xl sm:text-4xl font-bold font-display tracking-widest glitch-text relative"
            data-text="EDITORA"
            animate={{ 
              textShadow: [
                "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #ff00c8, 0 0 20px #ff00c8",
                "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #00e5ff, 0 0 20px #00e5ff",
                "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #ff00c8, 0 0 20px #ff00c8"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            EDITORA
          </motion.h1>
          <motion.p 
            className="text-sm sm:text-base text-white/60 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Visual Storytelling Redefined
          </motion.p>
        </motion.div>
      </div>
      
      {/* Loading progress */}
      <motion.div
        className="absolute bottom-8 sm:bottom-10 left-0 right-0 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <div className="w-48 sm:w-64 h-1 bg-white/10 rounded-full overflow-hidden mb-2">
          <motion.div 
            className="h-full bg-gradient-to-r from-fuchsia-500 to-cyan-400"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </div>
        <div className="text-white/50 text-xs sm:text-sm font-mono">
          INITIALIZING VISUAL SYSTEMS
        </div>
      </motion.div>
      
      {/* Decorative floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 sm:w-2 sm:h-2 rounded-full"
            style={{ 
              backgroundColor: i % 2 === 0 ? '#ff00c8' : '#00e5ff',
              boxShadow: i % 2 === 0 ? '0 0 10px #ff00c8' : '0 0 10px #00e5ff',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
            initial={{ 
              opacity: Math.random() * 0.7 + 0.3,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{ 
              y: [0, Math.random() * -100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [null, 0]
            }}
            transition={{ 
              duration: Math.random() * 5 + 3, 
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        ))}
      </div>
      
      {/* Digital noise overlay */}
      <div className="absolute inset-0 bg-[url('https://assets.website-files.com/61d1bff2b961eaf3ff3abd7c/620e923bab9dfa1e21f4be41_noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
    </motion.div>
  );
};

export default Loader;
