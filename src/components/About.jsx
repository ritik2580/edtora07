import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  { name: "Motion Graphics", level: 90 },
  { name: "Video Production", level: 95 },
  { name: "Visual Effects", level: 88 },
  { name: "Color Grading", level: 85 },
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-24 bg-zinc-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-1/2 left-1/2 transform -translate-x-1/2 w-full h-full bg-gradient-radial from-fuchsia-500/5 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('https://assets.website-files.com/61d1bff2b961eaf3ff3abd7c/620e923bab9dfa1e21f4be41_noise.png')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          ref={ref}
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col items-center"
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">About Us</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-fuchsia-500 to-cyan-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 shadow-xl hover:shadow-fuchsia-500/5 transition-all duration-500">
                <h3 className="text-2xl font-bold mb-4 text-white">Our Story</h3>
                <p className="text-white/70 mb-6">
                  FrameForge pushes the boundaries of digital creativity, crafting immersive visual experiences that captivate and inspire. Our team of designers, animators, and digital artists transform concepts into stunning visual realities.
                </p>
                <p className="text-white/70">
                  With expertise in Motion Graphics and video production, we deliver cutting-edge content that helps brands stand out in today's visual-centric world.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-white">Our Expertise</h3>
                
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: 0.5 + (index * 0.1) }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-white">{skill.name}</span>
                        <span className="text-cyan-400 font-medium">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.7 + (index * 0.2) }}
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={itemVariants}
          >
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 shadow-xl text-center">
              <div className="inline-block p-4 rounded-full bg-gradient-to-br from-fuchsia-500/20 to-fuchsia-500/5 mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-fuchsia-500 to-fuchsia-600 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">2.5+</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Years of Experience</h3>
              <p className="text-white/70">Delivering excellence in visual storytelling</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 shadow-xl text-center">
              <div className="inline-block p-4 rounded-full bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">300+</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Projects Completed</h3>
              <p className="text-white/70">Across various industries and platforms</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
