import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/globals.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Team from './components/Team';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import ParticleBackground from './components/ParticleBackground';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500); // Extended loading time to showcase the new loader

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="relative">
        <Loader isLoading={loading} />
        
        {/* Particles Background */}
        <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
          <ParticleBackground />
        </div>
        
        {/* Main content */}
        <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Projects />
            <Services />
            <Team />
            <Stats />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
