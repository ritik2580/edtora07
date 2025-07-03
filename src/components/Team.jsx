import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import laxmanImg from '../laxman.jpg';
import ayushImg from '../ayush.jpg';

const teamMembers = [
  {
    name: "Laxman Singh Panwar",
    position: "Founder",
    bio: "Laxman Singh Panwar is the founder of Editora. He has a strong interest in visual storytelling and enjoys bringing creative ideas to life through video.",
    image: "laxmanImg"
  },
  {
    name: "Ayush Rawat",
    position: "Co-Founder",
    bio: "Ayush Rawat is the co-founder bringing valuable experience in the video editing field. With a background in content creation and a practical approach to problem-solving.",
    image: "ayushImg"
  }
];

const Team = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
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
    <section id="team" ref={ref} className="py-24 bg-zinc-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('https://assets.website-files.com/61d1bff2b961eaf3ff3abd7c/620e923bab9dfa1e21f4be41_noise.png')] opacity-[0.03] mix-blend-overlay"></div>
      <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-black/50 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col items-center"
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Our Team</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-fuchsia-500 to-cyan-500 mx-auto"></div>
            <p className="text-white/70 max-w-xl mx-auto mt-6">
              Meet the creative minds behind Editora.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden group"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 opacity-60"></div>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 z-20 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="#" className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-fuchsia-500 transition-colors duration-300">
                      <Facebook size={16} className="text-white" />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-fuchsia-500 transition-colors duration-300">
                      <Instagram size={16} className="text-white" />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-fuchsia-500 transition-colors duration-300">
                      <Twitter size={16} className="text-white" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <span className="text-cyan-400 text-sm font-medium">{member.position}</span>
                  </div>
                  <p className="text-white/70">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
