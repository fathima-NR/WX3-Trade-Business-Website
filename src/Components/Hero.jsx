import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line
import CountUp from 'react-countup';
import './Hero.css';
import heroVideo from "/src/assets/Wx3 Animation.mp4";

const HeroSection = () => {
  const videoRef = useRef(null);
  const [startCounters, setStartCounters] = useState(false);

  // Final values for counters
  const finalValues = {
    clients: 150,
    projects: 300,
    experience: 10,
    countries: 25
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(err => console.log('Video autoplay failed:', err));

            // Start counters after 1.5s
            setTimeout(() => {
              setStartCounters(true);
            }, 1500);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => observer.unobserve(video);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const renderCounter = (value) => {
    return startCounters ? (
      <CountUp start={0} end={value} duration={3} separator="," suffix="+" />
    ) : (
      "0+"
    );
  };

  return (
    <section id="home" className="wx3-hero">
      {/* Video Background */}
      <div className="wx3-video-container">
        <video
          ref={videoRef}
          className="wx3-hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          crossOrigin="anonymous"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="wx3-video-overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="wx3-hero-content">
        <div className="wx3-hero-container">
          {/* Main Text */}
          <motion.div
            className="wx3-hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="wx3-hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Wx3 FZC LLC
            </motion.h1>
            <motion.p
              className="wx3-hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Your trusted partner in multi-sector trading & technology solutions across the UAE and beyond.
            </motion.p>
            <motion.div
              className="wx3-hero-cta"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button className="wx3-cta-button" onClick={scrollToAbout}>
                Learn More
              </button>
            </motion.div>
          </motion.div>

          {/* Counters */}
          <motion.div
            className="wx3-hero-stats"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="wx3-stat-item">
              <motion.div 
                className="wx3-stat-number"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                {renderCounter(finalValues.clients)}
              </motion.div>
              <span className="wx3-stat-label">Satisfied Clients</span>
            </div>
            <div className="wx3-stat-divider"></div>
            
            <div className="wx3-stat-item">
              <motion.div 
                className="wx3-stat-number"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                {renderCounter(finalValues.projects)}
              </motion.div>
              <span className="wx3-stat-label">Delivered Projects</span>
            </div>
            <div className="wx3-stat-divider"></div>

            <div className="wx3-stat-item">
              <motion.div 
                className="wx3-stat-number"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.6 }}
              >
                {renderCounter(finalValues.experience)}
              </motion.div>
              <span className="wx3-stat-label">Years of Experience</span>
            </div>
            <div className="wx3-stat-divider"></div>

            <div className="wx3-stat-item">
              <motion.div 
                className="wx3-stat-number"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.8 }}
              >
                {renderCounter(finalValues.countries)}
              </motion.div>
              <span className="wx3-stat-label">Operating Countries</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
