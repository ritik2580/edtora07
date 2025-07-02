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
  { id: 'grid', icon: Grid2x2, label: 'Grid View' },
  { id: 'cinematic', icon: Film, label: 'Cinematic' },
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

  // Determine number of visible projects based on view mode and screen size
  const getVisibleProjects = () => {
    if (viewMode === 'list') return window.innerWidth < 768 ? 1 : 2;
    return window.innerWidth < 768 ? 1 : 3;
  };

  const visibleProjects = getVisibleProjects();
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

  const openDriveVideo = (driveUrl, e) => {
    if (e) {
      e.stopPropagation();
    }
    window.open(driveUrl, '_blank');
  };

  // Render the projects in different layouts based on the view mode
  const renderProjects = () => {
    switch(viewMode) {
      case 'grid':
        return (
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-2 sm:px-0"
            style={{ maxWidth: '100%', overflowX: 'hidden' }}
          >
            {projects.slice(currentIndex, currentIndex + visibleProjects).map((project, index) => (
              <motion.div 
                key={project.id}
                className="w-full flex-shrink-0 group cursor-pointer"
                whileHover={{ y: -5 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => openDriveVideo(project.driveUrl)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  hover: { duration: 0.3 }
                }}
              >
                <div className="relative overflow-hidden rounded-xl aspect-video bg-zinc-800 border border-white/10 group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <motion.div 
                      className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-fuchsia-500 flex items-center justify-center cursor-pointer"
                      initial={{ scale: 0 }}
                      animate={hoveredIndex === index ? { scale: 1 } : { scale: 0 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      onClick={(e) => openDriveVideo(project.driveUrl, e)}
                    >
                      <Play className="text-white" fill="white" size={16} />
                    </motion.div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 z-10">
                    <h3 className="text-base sm:text-lg font-bold text-white mb-1 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-cyan-400 text-xs transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
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
          <div className="w-full px-2 sm:px-0">
            <AnimatePresence mode="wait">
              {projects.slice(currentIndex, currentIndex + 1).map((project) => (
                <motion.div 
                  key={project.id}
                  className="w-full flex-shrink-0 group cursor-pointer"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => openDriveVideo(project.driveUrl)}
                >
                  <div className="relative overflow-hidden rounded-xl aspect-video sm:aspect-[21/9] bg-zinc-800 border border-white/10 group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-300 z-10"></div>
                    
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 z-20">
                      <div className="flex items-center mb-2 sm:mb-3">
                        <div 
                          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-fuchsia-500 flex items-center justify-center mr-3 cursor-pointer hover:bg-fuchsia-600 transition-colors"
                          onClick={(e) => openDriveVideo(project.driveUrl, e)}
                        >
                          <Play className="text-white" fill="white" size={14} />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-white mb-0">
                            {project.title}
                          </h3>
                          <div className="flex items-center flex-wrap">
                            <span className="text-cyan-400 text-xs mr-3">
                              {project.category}
                            </span>
                            <span className="text-white/60 text-xs">
                              {project.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-white/80 text-xs sm:text-sm hidden sm:block max-w-4xl">
                        {project.description}
                      </p>
                      <div className="mt-2 sm:mt-3">
                        <button 
                          onClick={(e) => openDriveVideo(project.driveUrl, e)}
                          className="flex items-center gap-2 text-white/70 hover:text-cyan-400 transition-colors text-xs"
                        >
                          <ExternalLink size={12} /> Watch on Drive
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        );

      case 'list':
        return (
          <div className="flex flex-col gap-3 sm:gap-4 px-2 sm:px-0">
            {projects.slice(currentIndex, currentIndex + visibleProjects).map((project, index) => (
              <motion.div 
                key={project.id}
                className="w-full flex-shrink-0 group cursor-pointer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => openDriveVideo(project.driveUrl)}
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                  <div className="relative w-full sm:w-36 md:w-48 aspect-video rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div 
                      className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                      onClick={(e) => openDriveVideo(project.driveUrl, e)}
                    >
                      <div className="w-10 h-10 rounded-full bg-fuchsia-500 flex items-center justify-center">
                        <Play className="text-white" fill="white" size={16} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-grow w-full sm:w-auto">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-base sm:text-lg font-bold text-white">{project.title}</h3>
                      <span className="text-white/60 text-xs">{project.duration}</span>
                    </div>
                    <p className="text-cyan-400 text-xs mb-2">{project.category}</p>
                    <p className="text-white/70 text-xs mb-2 hidden sm:block">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      <button 
                        onClick={(e) => openDriveVideo(project.driveUrl, e)}
                        className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-white/5 rounded-full text-xs text-white hover:bg-fuchsia-500/80 transition-colors flex items-center gap-1"
                      >
                        <Play size={10} /> Watch Video
                      </button>
                      <a 
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-white/5 rounded-full text-xs text-white hover:bg-white/10 transition-colors flex items-center gap-1"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={10} /> Details
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
    <section id="projects" ref={ref} className="py-12 md:py-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('https://assets.website-files.com/61d1bff2b961eaf3ff3abd7c/620e923bab9dfa1e21f4be41_noise.png')] opacity-[0.05] mix-blend-overlay"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-fuchsia-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col items-center"
        >
          <motion.div className="text-center mb-8 md:mb-12" variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold font-display mb-3">Featured Projects</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-fuchsia-500 to-cyan-500 mx-auto"></div>
            <p className="text-white/70 max-w-xl mx-auto mt-4 text-sm sm:text-base px-2">
              Explore our portfolio of high-quality video productions across various styles and industries.
            </p>
          </motion.div>

          {/* View Mode Switcher */}
          <motion.div 
            className="mb-6 md:mb-8 flex justify-center"
            variants={itemVariants}
          >
            <div className="flex p-1 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 shadow-lg">
              {viewModeOptions.map((option, index) => {
                const Icon = option.icon;
                return (
                  <motion.button
                    key={option.id}
                    onClick={() => changeViewMode(option.id, index)}
                    className={`relative px-2 py-1 sm:px-3 sm:py-1.5 rounded-full flex items-center gap-1 ${
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
                    <span className="relative z-10 flex items-center gap-1 sm:gap-1.5">
                      <Icon size={14} />
                      <span className="text-xs hidden sm:block">{option.label}</span>
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
                <div className="absolute top-1/2 -left-2 sm:-left-4 transform -translate-y-1/2 z-20 hidden sm:block">
                  <button 
                    onClick={prevProject} 
                    disabled={currentIndex === 0}
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      currentIndex === 0 
                        ? 'bg-white/5 text-white/30 cursor-not-allowed' 
                        : 'bg-white/10 text-white hover:bg-fuchsia-500 hover:scale-110'
                    }`}
                    aria-label="Previous project"
                  >
                    <ChevronLeft size={16} />
                  </button>
                </div>

                <div className="absolute top-1/2 -right-2 sm:-right-4 transform -translate-y-1/2 z-20 hidden sm:block">
                  <button 
                    onClick={nextProject} 
                    disabled={currentIndex >= maxIndex}
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      currentIndex >= maxIndex 
                        ? 'bg-white/5 text-white/30 cursor-not-allowed' 
                        : 'bg-white/10 text-white hover:bg-fuchsia-500 hover:scale-110'
                    }`}
                    aria-label="Next project"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </>
            )}

            <div 
              ref={galleryRef} 
              className="w-full overflow-hidden py-2"
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
              <div className="flex justify-center mt-4 gap-2 sm:hidden">
                <button 
                  onClick={prevProject} 
                  disabled={currentIndex === 0}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    currentIndex === 0 
                      ? 'bg-white/5 text-white/30 cursor-not-allowed' 
                      : 'bg-white/10 text-white hover:bg-fuchsia-500'
                  }`}
                  aria-label="Previous project"
                >
                  <ChevronLeft size={16} />
                </button>
                
                <button 
                  onClick={nextProject} 
                  disabled={currentIndex >= maxIndex}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    currentIndex >= maxIndex 
                      ? 'bg-white/5 text-white/30 cursor-not-allowed' 
                      : 'bg-white/10 text-white hover:bg-fuchsia-500'
                  }`}
                  aria-label="Next project"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            )}

            <div className="flex justify-center mt-8 md:mt-10">
              <a 
                href="#contact"
                className="px-5 py-2 sm:px-6 sm:py-2.5 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 group text-xs sm:text-sm"
              >
                <span className="flex items-center gap-1.5">
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
