import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Camera, Code, Film, Paintbrush, Palette, Video } from 'lucide-react';

const services = [
  {
    icon: <Video className="text-fuchsia-500" size={48} />,
    title: 'Video Editing',
    description: 'Professional editing services to transform your raw footage into compelling visual stories.'
  },
  {
    icon: <Film className="text-fuchsia-500" size={48} />,
    title: 'Motion Graphics',
    description: 'Eye-catching animations that bring your brand elements to life and enhance your message.'
  },
  {
    icon: <Paintbrush className="text-fuchsia-500" size={48} />,
    title: 'Visual Effects',
    description: 'Stunning VFX solutions that create immersive and memorable viewing experiences.'
  },
  {
    icon: <Palette className="text-fuchsia-500" size={48} />,
    title: 'Color Grading',
    description: 'Expert color correction to establish mood, consistency, and visual impact in your videos.'
  },
  {
    icon: <Camera className="text-fuchsia-500" size={48} />,
    title: 'Video Production',
    description: 'End-to-end production services from concept development to final delivery.'
  },
  {
    icon: <Code className="text-fuchsia-500" size={48} />,
    title: 'Technical Support',
    description: 'Technical guidance and solutions for all your video production challenges.'
  }
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" ref={ref} className="py-24 bg-zinc-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('https://assets.website-files.com/61d1bff2b961eaf3ff3abd7c/620e923bab9dfa1e21f4be41_noise.png')] opacity-[0.03] mix-blend-overlay"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-fuchsia-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col items-center"
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Our Services</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-fuchsia-500 to-cyan-500 mx-auto"></div>
            <p className="text-white/70 max-w-xl mx-auto mt-6">
              We offer a comprehensive range of video production services to bring your vision to life.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(249, 168, 212, 0.1), 0 10px 10px -5px rgba(249, 168, 212, 0.04)' }}
                transition={{ duration: 0.3 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-fuchsia-500/30 transition-all duration-300"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-white/70">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
