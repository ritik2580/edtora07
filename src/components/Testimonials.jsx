import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "EDITORA ने हमारे ब्रांड को स्टनिंग मोशन ग्राफिक्स के साथ ट्रांसफॉर्म किया। उनकी क्रिएटिविटी और तकनीकी कौशल अद्वितीय है।",
    author: "आदित्य शर्मा",
    position: "क्रिएटिव डायरेक्टर, ज़ेनिथ मीडिया",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop",
    rating: 5
  },
  {
    id: 2,
    content: "The video editing quality exceeded all our expectations. The team's attention to detail and innovative approach made our product launch video a huge success.",
    author: "Ritik Patel",
    position: "Marketing Head, NexGen Technologies",
    avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=150&auto=format&fit=crop",
    rating: 5
  },
  {
    id: 3,
    content: "Working with EDITORA was seamless. Their creativity transformed our simple concept into a visual masterpiece that our audience loved.",
    author: "Aryan Kapoor",
    position: "CEO, Pulse Innovations",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop",
    rating: 4.5
  },
  {
    id: 4,
    content: "हमारे म्यूजिक वीडियो के लिए EDITORA की सर्विस अद्भुत थी। वे हमारे विज़न को समझे और एक कलात्मक वीडियो बनाया जो हमारे संगीत को पूरक बनाता है।",
    author: "विकास सिंह",
    position: "संगीतकार, धुन स्टूडियोज",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop",
    rating: 5
  },
  {
    id: 5,
    content: "The short video edits EDITORA created for our social media campaign generated record-breaking engagement. Their understanding of trends and audience psychology is remarkable.",
    author: "Neha Gupta",
    position: "Digital Marketing Manager, Spark Digital",
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&auto=format&fit=crop",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextTestimonial();
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const testimonialVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
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

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="text-yellow-400" fill="#FACC15" size={20} />);
    }
    
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="text-gray-400" fill="#9CA3AF" size={20} />
          <div className="absolute top-0 left-0 overflow-hidden w-1/2">
            <Star className="text-yellow-400" fill="#FACC15" size={20} />
          </div>
        </div>
      );
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="text-gray-400" fill="#9CA3AF" size={20} />);
    }
    
    return stars;
  };

  return (
    <section id="testimonials" ref={ref} className="py-24 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('https://assets.website-files.com/61d1bff2b961eaf3ff3abd7c/620e923bab9dfa1e21f4be41_noise.png')] opacity-[0.05] mix-blend-overlay"></div>
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-fuchsia-500/5 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col items-center"
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Client Testimonials</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-fuchsia-500 to-cyan-500 mx-auto"></div>
            <p className="text-white/70 max-w-xl mx-auto mt-6">
              See what our clients have to say about our work and experience with EDITORA.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="w-full max-w-4xl mx-auto relative"
          >
            <div className="relative overflow-hidden h-[400px] sm:h-[360px] md:h-[320px]">
              <AnimatePresence initial={false} custom={currentIndex}>
                <motion.div
                  key={currentIndex}
                  custom={currentIndex}
                  variants={testimonialVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute w-full"
                >
                  <motion.div 
                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-10"
                    whileHover={{ 
                      boxShadow: "0 0 30px rgba(255, 0, 200, 0.2)",
                      borderColor: "rgba(255, 0, 200, 0.3)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex justify-center mb-6">
                      <div className="flex">
                        {renderStars(testimonials[currentIndex].rating)}
                      </div>
                    </div>
                    
                    <p className="text-white text-center text-lg md:text-xl mb-8 italic">
                      "{testimonials[currentIndex].content}"
                    </p>
                    
                    <div className="flex items-center justify-center">
                      <motion.div 
                        className="w-14 h-14 rounded-full overflow-hidden border-2 border-fuchsia-500 mr-4"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <img 
                          src={testimonials[currentIndex].avatar} 
                          alt={testimonials[currentIndex].author} 
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      <div>
                        <h4 className="text-white font-bold">{testimonials[currentIndex].author}</h4>
                        <p className="text-white/60 text-sm">{testimonials[currentIndex].position}</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center items-center mt-8 space-x-2">
              <motion.button 
                onClick={prevTestimonial} 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-fuchsia-500/20 transition-colors duration-300"
                aria-label="Previous testimonial"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 0, 200, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronLeft size={20} className="text-white" />
              </motion.button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <motion.button 
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentIndex ? 'bg-fuchsia-500' : 'bg-white/20'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  />
                ))}
              </div>
              
              <motion.button 
                onClick={nextTestimonial} 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-fuchsia-500/20 transition-colors duration-300"
                aria-label="Next testimonial"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 0, 200, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronRight size={20} className="text-white" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
