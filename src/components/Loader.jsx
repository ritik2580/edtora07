import { motion } from 'framer-motion';

const Loader = ({ isLoading }) => {
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      style={{ pointerEvents: isLoading ? 'auto' : 'none' }}
    >
      <div className="relative">
        <motion.div 
          className="w-24 h-24 rounded-full border-t-4 border-l-4 border-fuchsia-500"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute top-0 left-0 w-24 h-24 rounded-full border-b-4 border-r-4 border-cyan-400"
          animate={{ rotate: -360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-xl font-bold"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            E
          </motion.div>
        </div>
      </div>
      <motion.div
        className="absolute bottom-10 text-white/50 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        Creating visual excellence...
      </motion.div>
      
      {/* Animated particles in the background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-fuchsia-500/30"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
              opacity: Math.random() * 0.3 + 0.2
            }}
            animate={{ 
              y: [null, Math.random() * window.innerHeight], 
              opacity: [null, 0]
            }}
            transition={{ 
              duration: Math.random() * 3 + 2, 
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Loader;
