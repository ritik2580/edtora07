import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, ExternalLink, Film, Grid2x2, List, Play } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Moment Marketing',
    category: 'Video Editing',
    description: 'A captivating marketing campaign that captured the essence of the brand through carefully timed moments.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop&q=60',
    url: 'https://drive.google.com/file/d/1TRxmyCmYgoMKh7OJO5pffKL5rv8IDHF5/view?usp=drive_link1',
    driveUrl: 'https://drive.google.com/file/d/1TRxmyCmYgoMKh7OJO5pffKL5rv8IDHF5/view?usp=drive_link',
    duration: '2:15'
  },
  {
    id: 2,
    title: 'Reality Of Crypto Currency',
    category: 'Vertical Short Editing',
    description: 'An educational short that breaks down complex cryptocurrency concepts into digestible content for social media.',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=800&auto=format&fit=crop',
    url: 'https://example.com/project2',
    driveUrl: 'https://drive.google.com/file/d/1zmZM0VSPT0O1O9cOI2xug9IraS7nWtB6/view?usp=drive_link',
    duration: '1:30'
  },
  {
    id: 3,
    title: 'Doctor Google',
    category: 'Vertical Short Editing',
    description: 'A humorous take on self-diagnosis culture through engaging vertical format optimized for mobile viewing.',
    image: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=600&auto=format&fit=crop&q=60',
    url: 'https://example.com/project3',
    driveUrl: 'https://drive.google.com/file/d/1elc-TktK6Njps_Yb_Gh5IdxAT33zy-R_/view?usp=drive_link',
    duration: '0:45'
  },
  {
    id: 4,
    title: 'National Park Documentary',
    category: 'Documentary Style',
    description: 'An immersive exploration of America\'s natural treasures, featuring breathtaking cinematography and storytelling.',
    image: 'https://drive.google.com/file/d/1eKpEvNJYPi38gsrprPLplFVgF6LarMGo/view?usp=drive_link',
    url: 'https://example.com/project4',
    driveUrl: 'https://drive.google.com/file/d/example4',
    duration: '18:30'
  }

];

const viewModeOptions = [
  { id: 'grid', icon: Grid2x2, label: 'Grid2x2 View' },
  { id: 'cinematic', icon: Film, label: 'Cinematic View' },
  { id: 'list', icon: List, label: 'List View' }
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  const [activeViewModeButton, setActiveViewModeButton] = useState(0);
  const galleryRef = useRef(null);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const visibleProjects = viewMode === 'list' ? 2 : 3; // Number of projects visible at once depending on view mode
  const maxIndex = Math.max(0, projects.length - visibleProjects);

  const nextProject = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevProject = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

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

  const changeViewMode = (mode, index) => {
    setViewMode(mode);
    setActiveViewModeButton(index);
    setCurrentIndex(0); // Reset to first page when changing view modes
  };

  const openDriveVideo = (driveUrl) => {
    window.open(driveUrl, '_blank');
  };

  // Render the projects in different layouts based on the view mode
  const renderProjects = () => {
    switch(viewMode) {
      case 'grid':
        return (
          <div 
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / visibleProjects)}%)`,
              width: `${(projects.length / visibleProjects) * 100}%`
            }}
          >
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                className="w-full md:w-1/3 flex-shrink-0 group cursor-pointer"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => openDriveVideo(project.driveUrl)}
              >
                <div className="relative overflow-hidden rounded-xl aspect-video bg-zinc-800 border border-white/10 group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <motion.div 
                      className="w-16 h-16 rounded-full bg-fuchsia-500 flex items-center justify-center cursor-pointer"
                      initial={{ scale: 0 }}
                      animate={hoveredIndex === index ? { scale: 1 } : { scale: 0 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        openDriveVideo(project.driveUrl);
                      }}
                    >
                      <Play className="text-white" fill="white" size={24} />
                    </motion.div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <h3 className="text-xl font-bold text-white mb-2 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-cyan-400 text-sm transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                      {project.category}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );

      case 'cinematic':
        return (
          <div 
            className="flex flex-col gap-10 transition-transform duration-500 ease-out"
            style={{ 
              transform: `translateY(-${currentIndex * 100}%)`,
            }}
          >
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                className="w-full flex-shrink-0 group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden rounded-xl aspect-[21/9] bg-zinc-800 border border-white/10 group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-300 z-10"></div>
                  
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  
                  <div className="absolute bottom-8 left-8 right-8 z-20">
                    <div className="flex items-center mb-4">
                      <div 
                        className="w-12 h-12 rounded-full bg-fuchsia-500 flex items-center justify-center mr-4 cursor-pointer hover:bg-fuchsia-600 transition-colors"
                        onClick={() => openDriveVideo(project.driveUrl)}
                      >
                        <Play className="text-white" fill="white" size={20} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {project.title}
                        </h3>
                        <div className="flex items-center">
                          <span className="text-cyan-400 text-sm mr-4">
                            {project.category}
                          </span>
                          <span className="text-white/60 text-sm">
                            {project.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-white/80 max-w-4xl">
                      {project.description}
                    </p>
                    <div className="mt-4">
                      <button 
                        onClick={() => openDriveVideo(project.driveUrl)}
                        className="flex items-center gap-2 text-white/70 hover:text-cyan-400 transition-colors text-sm"
                      >
                        <ExternalLink size={16} /> Watch on Drive
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );

      case 'list':
        return (
          <div className="flex flex-col gap-6 transition-transform duration-500 ease-out">
            {projects.slice(currentIndex, currentIndex + visibleProjects).map((project, index) => (
              <motion.div 
                key={project.id}
                className="w-full flex-shrink-0 group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-6 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                  <div className="relative w-40 md:w-60 aspect-video rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                    <div 
                      className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                      onClick={() => openDriveVideo(project.driveUrl)}
                    >
                      <div className="w-12 h-12 rounded-full bg-fuchsia-500 flex items-center justify-center">
                        <Play className="text-white" fill="white" size={20} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <span className="text-white/60 text-sm">{project.duration}</span>
                    </div>
                    <p className="text-cyan-400 text-sm mb-3">{project.category}</p>
                    <p className="text-white/70 text-sm mb-4">{project.description}</p>
                    <div className="flex gap-4">
                      <button 
                        onClick={() => openDriveVideo(project.driveUrl)}
                        className="px-4 py-2 bg-white/5 rounded-full text-sm text-white hover:bg-fuchsia-500/80 transition-colors flex items-center gap-2"
                      >
                        <Play size={14} /> Watch Video
                      </button>
                      <a 
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="px-4 py-2 bg-white/5 rounded-full text-sm text-white hover:bg-white/10 transition-colors flex items-center gap-2"
                      >
                        <ExternalLink size={14} /> Project Details
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="projects" ref={ref} className="py-24 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('https://assets.website-files.com/61d1bff2b961eaf3ff3abd7c/620e923bab9dfa1e21f4be41_noise.png')] opacity-[0.05] mix-blend-overlay"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-fuchsia-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col items-center"
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-fuchsia-500 to-cyan-500 mx-auto"></div>
            <p className="text-white/70 max-w-xl mx-auto mt-6">
              Explore our portfolio of high-quality video productions across various styles and industries.
            </p>
          </motion.div>

          {/* View Mode Switcher */}
          <motion.div 
            className="mb-12 flex justify-center"
            variants={itemVariants}
          >
            <div className="flex p-1.5 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 shadow-lg">
              {viewModeOptions.map((option, index) => {
                const Icon = option.icon;
                return (
                  <motion.button
                    key={option.id}
                    onClick={() => changeViewMode(option.id, index)}
                    className={`relative px-4 py-2 rounded-full flex items-center gap-2 ${
                      activeViewModeButton === index ? 'text-white' : 'text-white/50'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {activeViewModeButton === index && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full"
                        layoutId="viewModeBackground"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      <Icon size={16} />
                      <span className="hidden md:inline">{option.label}</span>
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          <motion.div 
            className="relative w-full"
            variants={itemVariants}
          >
            {viewMode !== 'cinematic' && (
              <>
                <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 z-20 md:block hidden">
                  <button 
                    onClick={prevProject} 
                    disabled={currentIndex === 0}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      currentIndex === 0 
                        ? 'bg-white/5 text-white/30 cursor-not-allowed' 
                        : 'bg-white/10 text-white hover:bg-fuchsia-500 hover:scale-110'
                    }`}
                    aria-label="Previous project"
                  >
                    <ChevronLeft size={20} />
                  </button>
                </div>

                <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-20 md:block hidden">
                  <button 
                    onClick={nextProject} 
                    disabled={currentIndex >= maxIndex}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      currentIndex >= maxIndex 
                        ? 'bg-white/5 text-white/30 cursor-not-allowed' 
                        : 'bg-white/10 text-white hover:bg-fuchsia-500 hover:scale-110'
                    }`}
                    aria-label="Next project"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </>
            )}

            <div 
              ref={galleryRef} 
              className="w-full overflow-hidden py-4"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={viewMode}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {renderProjects()}
                </motion.div>
              </AnimatePresence>
            </div>

            {viewMode !== 'cinematic' && (
              <div className="flex justify-center mt-8 gap-2 md:hidden">
                <button 
                  onClick={prevProject} 
                  disabled={currentIndex === 0}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    currentIndex === 0 
                      ? 'bg-white/5 text-white/30 cursor-not-allowed' 
                      : 'bg-white/10 text-white hover:bg-fuchsia-500'
                  }`}
                  aria-label="Previous project"
                >
                  <ChevronLeft size={20} />
                </button>
                
                <button 
                  onClick={nextProject} 
                  disabled={currentIndex >= maxIndex}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    currentIndex >= maxIndex 
                      ? 'bg-white/5 text-white/30 cursor-not-allowed' 
                      : 'bg-white/10 text-white hover:bg-fuchsia-500'
                  }`}
                  aria-label="Next project"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}

            <div className="flex justify-center mt-12">
              <a 
                href="#contact"
                className="px-8 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 group"
              >
                <span className="flex items-center gap-2">
                  Want to create something amazing? 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500 font-semibold group-hover:translate-x-1 transition-transform duration-300">
                    Let's talk
                  </span>
                </span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
