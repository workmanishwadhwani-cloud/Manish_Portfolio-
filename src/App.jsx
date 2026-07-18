import { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import SpotlightCursor from './components/SpotlightCursor';
import ParticleBackground from './components/ParticleBackground';
import 'lenis/dist/lenis.css';
import './index.css';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const lenisRef = useRef(null);

  // Scroll reveal for .slide-in-left / .slide-in-right / .slide-in-up
  useEffect(() => {
    const initScrollAnimations = () => {
      const elements = document.querySelectorAll(
        '.slide-in-left, .slide-in-right, .slide-in-up'
      );
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translate(0)';
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );
      elements.forEach((el) => observer.observe(el));
    };

    // Small delay so DOM has rendered
    const t = setTimeout(initScrollAnimations, 100);
    return () => clearTimeout(t);
  }, []);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;
    window.__lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  // Global scroll listeners for Top Progress Bar and Back To Top
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrollY / windowHeight) * 100;

      setScrollProgress(progress);
      setShowBackToTop(scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { duration: 1.5 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div id="real-site" style={{ position: 'relative' }}>

        {/* Floating Particle Network */}
        <ParticleBackground />

        {/* Film Grain Noise Overlay (now with CRT scanlines) */}
        <div className="noise-overlay"></div>

        {/* Neon Scroll Progress Bar */}
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            height: '3px',
            width: `${scrollProgress}%`,
            background: '#00f5ff',
            boxShadow: '0 0 10px #00f5ff, 0 0 20px #00f5ff',
            zIndex: 9999,
            transition: 'width 0.1s ease-out'
          }}
        ></div>

        <SpotlightCursor />
        <Navbar />
        <Home />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />

        {/* Minimalist Footer */}
        <footer style={{
          textAlign: 'center',
          padding: '40px 0',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          marginTop: '50px',
          color: '#888',
          fontSize: '14px',
          fontFamily: '"Inter", sans-serif',
          letterSpacing: '1px'
        }}>
          Designed & Built by <span style={{ color: '#00f5ff', fontFamily: '"Orbitron", sans-serif' }}>Manish Wadhwani</span> © 2026
        </footer>

        {/* Floating Back To Top */}
        <button
          onClick={scrollToTop}
          title="Back to Top"
          style={{
            position: 'fixed',
            bottom: '40px',
            right: '40px',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(0, 245, 255, 0.3)',
            color: '#00f5ff',
            fontSize: '20px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9998,
            opacity: showBackToTop ? 1 : 0,
            pointerEvents: showBackToTop ? 'all' : 'none',
            transform: showBackToTop ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.4s ease',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 0 20px rgba(0, 245, 255, 0.2)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = '#00f5ff';
            e.currentTarget.style.color = '#fff';
            e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 245, 255, 0.6)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
            e.currentTarget.style.color = '#00f5ff';
            e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 245, 255, 0.2)';
          }}
        >
          <i className="fa-solid fa-arrow-up"></i>
        </button>

      </div>
    </>
  );
}

export default App;
