import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line
import { useInView } from "react-intersection-observer";
import "./AboutUs.css"; // Fixed typo in CSS import (capital U)
import about from "/src/assets/aboutimg.webp"; // Check if this path is correct
import { 
  Briefcase, 
  Users, 
  Globe, 
  Award, 
  Target, 
  Shield 
} from "react-feather";

const AboutUs = () => {
  // Separate useInView hooks for heading and content
  const [headingRef, headingInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [contentRef, contentInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Professional business images from Unsplash - ADD FALLBACKS
  const businessImages = {
    main: about || "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    team: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    uae: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Handle button clicks for smooth scrolling - ADDED ERROR HANDLING
  const handleServicesClick = () => {
    try {
      const element = document.getElementById("services");
      if (element) {
        const navbar = document.querySelector('.navbar');
        const navbarHeight = navbar?.offsetHeight || 0;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } catch (error) {
      console.error('Error scrolling to services:', error);
    }
  };

  const handleContactClick = () => {
    try {
      const element = document.getElementById("contact");
      if (element) {
        const navbar = document.querySelector('.navbar');
        const navbarHeight = navbar?.offsetHeight || 0;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } catch (error) {
      console.error('Error scrolling to contact:', error);
    }
  };

  return (
    <section id="about" className="wx3-about-section">
      <div className="wx3-about-container">

        {/* ===== SECTION HEADING ===== */}
        <motion.div
          ref={headingRef}
          className="wx3-about-heading"
          variants={headingVariants}
          initial="hidden"
          animate={headingInView ? "visible" : "hidden"}
        >
          <h2 className="wx3-about-title">
            ABOUT US
          </h2>
          <div className="wx3-about-line"></div>
          <p className="wx3-about-subtitle">
            Your trusted partner in multi-sector trading & technology solutions
          </p>
        </motion.div>

        {/* MOBILE FEATURED IMAGE */}
        <div className="wx3-featured-image d-block d-lg-none mb-5">
          <div className="wx3-image-container">
            <img
              src={businessImages.main}
              alt="Wx3 FZC LLC Business Operations - Multi-Sector Trading Solutions"
              className="wx3-main-image"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80";
              }}
            />
            <div className="wx3-image-overlay">
              <div className="wx3-overlay-content">
                <h3>Wx3 Business Center</h3>
                <p>Sharjah Publishing City Free Zone</p>
              </div>
            </div>
            <div className="wx3-image-badge">
              <span>Since 2016</span>
            </div>
          </div>
        </div>

        {/* ===== MAIN CONTENT GRID ===== */}
        <motion.div
          ref={contentRef}
          className="wx3-about-grid"
          variants={containerVariants}
          initial="hidden"
          animate={contentInView ? "visible" : "hidden"}
        >
          
          {/* ===== LEFT TEXT CONTENT ===== */}
          <motion.div className="wx3-about-left" variants={textVariants}>
            
            <p className="wx3-about-lead">
              Connecting global suppliers with regional markets through excellence and innovation.
            </p>

            <p className="wx3-about-desc">
              Wx3 FZC LLC is a dynamic trading company based in Sharjah
              Publishing City Free Zone, specializing in comprehensive solutions
              across multiple sectors including automotive, technology,
              industrial machinery, and construction materials.
            </p>

            <p className="wx3-about-desc">
              With our extensive trading license and strategic UAE location, we
              connect global suppliers with regional markets. Our expertise
              spans from traditional automotive trading to cutting-edge
              technology, ensuring access to high-quality products and services.
            </p>

            <p className="wx3-about-summary">
              Our commitment to excellence, market knowledge, and strong
              networks position us as your ideal partner for trading
              requirements. We deliver tailored solutions that drive business
              success across industries.
            </p>

            {/* ACTION BUTTONS */}
            <div className="wx3-about-actions mt-5">
              <button
                className="wx3-about-btn primary"
                onClick={handleServicesClick}
              >
                Explore Our Services
              </button>
              
              <button
                className="wx3-about-btn secondary"
                onClick={handleContactClick}
              >
                Get In Touch
              </button>
            </div>
          </motion.div>

          {/* ===== RIGHT IMAGE SECTION ===== */}
          <motion.div className="wx3-about-right" variants={imageVariants}>
            <div className="wx3-image-showcase">
              
              {/* DESKTOP FEATURED IMAGE */}
              <div className="wx3-featured-image d-none d-lg-block">
                <div className="wx3-image-container">
                  <img
                    src={businessImages.main}
                    alt="Wx3 FZC LLC Business Operations - Multi-Sector Trading Solutions"
                    className="wx3-main-image"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80";
                    }}
                  />
                  <div className="wx3-image-overlay">
                    <div className="wx3-overlay-content">
                      <h3>Wx3 Business Center</h3>
                      <p>Sharjah Publishing City Free Zone</p>
                    </div>
                  </div>
                  <div className="wx3-image-badge">
                    <span>Since 2016</span>
                  </div>
                </div>
              </div>

              {/* ENHANCED STRENGTHS GRID */}
              <div className="wx3-strengths-grid mt-0 mt-sm-4">
                
                <div className="wx3-strength-item">
                  <div className="wx3-strength-icon">
                    <Globe size={20} />
                  </div>
                  <div className="wx3-strength-content">
                    <h4>Global Reach</h4>
                    <p>25+ countries served worldwide</p>
                  </div>
                </div>

                <div className="wx3-strength-item">
                  <div className="wx3-strength-icon">
                    <Target size={20} />
                  </div>
                  <div className="wx3-strength-content">
                    <h4>Multi-Sector</h4>
                    <p>12+ industry sectors covered</p>
                  </div>
                </div>

                <div className="wx3-strength-item">
                  <div className="wx3-strength-icon">
                    <Shield size={20} />
                  </div>
                  <div className="wx3-strength-content">
                    <h4>Quality Assured</h4>
                    <p>Premium products & services</p>
                  </div>
                </div>

                <div className="wx3-strength-item">
                  <div className="wx3-strength-icon">
                    <Award size={20} />
                  </div>
                  <div className="wx3-strength-content">
                    <h4>Expert Team</h4>
                    <p>10+ years experience</p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;