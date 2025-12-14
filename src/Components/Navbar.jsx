import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaWhatsapp , FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Navbar.css';
import logo from "/src/assets/Logo (Black).svg"
const NavbarWx3 = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
   { name: "Clients", href: "#clients" },
    { name: "Contact Us", href: "#contact" }
  ];

  const scrollToSection = (href) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Contact Bar - Desktop Only */}
      <div className="top-bar mb-0">
      <div className="container">
  <div className="contact-info">
    {/* Email with mailto link - Opens in new tab, white color */}
    <div className="contact-item">
      <FaEnvelope className="icon" />
      <a 
        href="mailto:info@thewx3.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="contact-link white-link"
      >
        info@thewx3.com
      </a>
    </div>
    
 <div className="contact-item">
  <div >
    <FaWhatsapp className="whatsapp-icon-topbar" />
  </div>
  <a 
    href="https://wa.me/971567864078" 
    target="_blank" 
    rel="noopener noreferrer"
    className="contact-link white-link"
  >
    +971 56 786 4078
  </a>
</div>
    
    {/* Location with Google Maps link - Opens in new tab, white color */}
    <div className="contact-item">
      <FaMapMarkerAlt className="icon" />
      <a 
        href="https://maps.google.com/?q=Sharjah,UAE" 
        target="_blank" 
        rel="noopener noreferrer"
        className="contact-link white-link"
      >
        Sharjah, UAE
      </a>
    </div>
  </div>
</div>
      </div>

      {/* Main Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          {/* Logo and Brand */}
          <div className="brand" onClick={() => scrollToSection('#home')}>
            <img src={logo} alt="Wx3" className="logo" />
            <div className="company-name">
              <div className="name mt-4">Wx3 FZC LLC</div>
             
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-links">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-links">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="mobile-nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
          
          {/* Mobile Contact Info */}
        <div className="mobile-contact">
  {/* Email */}
  <a 
    href="mailto:info@thewx3.com" 
    className="mobile-contact-item" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <FaEnvelope />
    <span>info@thewx3.com</span>
  </a>

  {/* WhatsApp */}
  <a 
    href="https://wa.me/971567864078" 
    className="mobile-contact-item" 
    target="_blank" 
    rel="noopener noreferrer"
  >
  <FaWhatsapp className="whatsapp-icon-mobile" />
    <span>+971 56 786 4078</span>
  </a>

  {/* Google Maps */}
  <a 
    href="https://maps.google.com/?q=Sharjah,UAE" 
    className="mobile-contact-item" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <FaMapMarkerAlt />
    <span>Sharjah, UAE</span>
  </a>
</div>
        </div>
      </nav>
    </>
  );
};

export default NavbarWx3;