import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { Check, Instagram, Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const onSubmit = (data) => {
    console.log(data);
    // In a real application, you would send this data to your backend
    // For this demo, we'll simulate a successful submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
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

  return (
    <section id="contact" ref={ref} className="py-24 bg-zinc-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('https://assets.website-files.com/61d1bff2b961eaf3ff3abd7c/620e923bab9dfa1e21f4be41_noise.png')] opacity-[0.03] mix-blend-overlay"></div>
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
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-fuchsia-500 to-cyan-500 mx-auto"></div>
            <p className="text-white/70 max-w-xl mx-auto mt-6">
              Ready to bring your vision to life? Contact us to discuss your project and discover how we can transform your ideas into stunning visual experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-8 h-full hover:border-fuchsia-500/30 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6">Let's Create Something Amazing</h3>
                
                <div className="space-y-6 mb-8">
                  <motion.div 
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex-shrink-0 bg-fuchsia-500/10 p-3 rounded-full mr-4">
                      <Phone className="text-fuchsia-500" size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Phone</h4>
                      <p className="text-white/70">+91  9536428507</p>
                       <p className="text-white/70">+91  7668128424</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex-shrink-0 bg-fuchsia-500/10 p-3 rounded-full mr-4">
                      <Mail className="text-fuchsia-500" size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Email</h4>
                      <p className="text-white/70">editorastudio07@gmail.com</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex-shrink-0 bg-fuchsia-500/10 p-3 rounded-full mr-4">
                      <MapPin className="text-fuchsia-500" size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Location</h4>
                      <p className="text-white/70">Dehradun, India</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex-shrink-0 bg-fuchsia-500/10 p-3 rounded-full mr-4">
                      <Instagram className="text-fuchsia-500" size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Instagram</h4>
                      <a 
                        href="https://www.instagram.com/editorastudio07?igsh=dWw3c3R5Z2VqY2ty" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-fuchsia-400 transition-colors"
                      >
                        @editorastudio07 
                        
                      </a>
                    </div>
                  </motion.div>
                </div>
                
                <div>
                  <h4 className="text-white font-bold mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <motion.a 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-fuchsia-500 transition-colors duration-300"
                      whileHover={{ y: -5, backgroundColor: "#ff00c8" }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                      </svg>
                    </motion.a>
                    <motion.a 
                      href="https://www.instagram.com/editorastudio07?igsh=dWw3c3R5Z2VqY2ty" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-fuchsia-500 transition-colors duration-300"
                      whileHover={{ y: -5, backgroundColor: "#ff00c8" }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                      </svg>
                    </motion.a>
                    <motion.a 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-fuchsia-500 transition-colors duration-300"
                      whileHover={{ y: -5, backgroundColor: "#ff00c8" }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-fuchsia-500/30 transition-all duration-300">
                {isSubmitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-8">
                    <motion.div 
                      className="mb-6 w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1, rotate: 360 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    >
                      <Check className="text-green-500" size={32} />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                    <p className="text-white/70 mb-8">
                      Thanks for reaching out! We'll get back to you soon.
                    </p>
                    <motion.button 
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors duration-300"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 0, 200, 0.2)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Send Another Message
                    </motion.button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-white text-sm font-medium mb-2">Name</label>
                      <motion.input
                        id="name"
                        type="text"
                        className={`w-full px-4 py-3 bg-black/30 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-lg text-white focus:outline-none focus:border-fuchsia-500 transition-colors duration-300`}
                        placeholder="Your name"
                        {...register('name', { required: true })}
                        whileFocus={{ borderColor: "rgba(255, 0, 200, 0.5)" }}
                      />
                      {errors.name && <p className="mt-1 text-red-500 text-xs">Name is required</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-white text-sm font-medium mb-2">Email</label>
                      <motion.input
                        id="email"
                        type="email"
                        className={`w-full px-4 py-3 bg-black/30 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-lg text-white focus:outline-none focus:border-fuchsia-500 transition-colors duration-300`}
                        placeholder="Your email"
                        {...register('email', { 
                          required: true,
                          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                        })}
                        whileFocus={{ borderColor: "rgba(255, 0, 200, 0.5)" }}
                      />
                      {errors.email?.type === 'required' && <p className="mt-1 text-red-500 text-xs">Email is required</p>}
                      {errors.email?.type === 'pattern' && <p className="mt-1 text-red-500 text-xs">Invalid email address</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-white text-sm font-medium mb-2">Subject</label>
                      <motion.input
                        id="subject"
                        type="text"
                        className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white focus:outline-none focus:border-fuchsia-500 transition-colors duration-300"
                        placeholder="Subject"
                        {...register('subject')}
                        whileFocus={{ borderColor: "rgba(255, 0, 200, 0.5)" }}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-white text-sm font-medium mb-2">Message</label>
                      <motion.textarea
                        id="message"
                        rows={5}
                        className={`w-full px-4 py-3 bg-black/30 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-lg text-white focus:outline-none focus:border-fuchsia-500 transition-colors duration-300`}
                        placeholder="Your message"
                        {...register('message', { required: true })}
                        whileFocus={{ borderColor: "rgba(255, 0, 200, 0.5)" }}
                      ></motion.textarea>
                      {errors.message && <p className="mt-1 text-red-500 text-xs">Message is required</p>}
                    </div>
                    
                    <motion.button
                      type="submit"
                      className="w-full py-3 bg-gradient-to-r from-fuchsia-600 to-fuchsia-500 hover:from-fuchsia-500 hover:to-fuchsia-600 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-fuchsia-500/20 flex items-center justify-center"
                      whileHover={{ 
                        scale: 1.02, 
                        boxShadow: "0 10px 25px -5px rgba(255, 0, 200, 0.4)" 
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="mr-2">Send Message</span>
                      <Send size={16} />
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
