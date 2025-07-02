import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stats = [
  { value: 70, label: "Customers Served" },
  { value: 300, label: "Videos Delivered" },
  { value: 2.5, label: "Years of Experience" },
  { value: 95, label: "Client Satisfaction", suffix: "%" }
];

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const [counters, setCounters] = useState(stats.map(() => 0));
  
  useEffect(() => {
    if (inView) {
      const intervals = stats.map((stat, index) => {
        return setInterval(() => {
          setCounters(prev => {
            const newCounters = [...prev];
            const increment = stat.value / 50; // Will complete in ~1 second with 60fps
            
            if (newCounters[index] < stat.value) {
              newCounters[index] = Math.min(
                stat.value, 
                newCounters[index] + increment
              );
            }
            
            return newCounters;
          });
        }, 20);
      });
      
      return () => intervals.forEach(clearInterval);
    }
  }, [inView]);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section ref={ref} className="py-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('https://assets.website-files.com/61d1bff2b961eaf3ff3abd7c/620e923bab9dfa1e21f4be41_noise.png')] opacity-[0.05] mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/5 via-transparent to-cyan-500/5"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-fuchsia-500/30 transition-all duration-300"
            >
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent mb-2">
                {stat.value % 1 === 0 
                  ? Math.floor(counters[index])
                  : counters[index].toFixed(1)}
                {stat.suffix || "+"}
              </h3>
              <p className="text-white/70">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
