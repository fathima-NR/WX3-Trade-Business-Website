import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";  
import "./Footer.css";
import logo from "/src/assets/Logo (White).svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();



  // Center coordinates for Sharjah Publishing City Free Zone
  const center = {
    lat: 25.3199091,
    lng: 55.4585985,
  };

  // Enhanced Monochrome style - Clean grayscale
  const monochromeStyles = [
    {
      "featureType": "all",
      "elementType": "geometry",
      "stylers": [{ "color": "#f5f5f5" }]
    },
    {
      "featureType": "all",
      "elementType": "labels.text.fill",
      "stylers": [{ "color": "#666666" }]
    },
    {
      "featureType": "all",
      "elementType": "labels.text.stroke",
      "stylers": [{ "color": "#ffffff" }]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [{ "visibility": "off" }]
    },
    {
      "featureType": "administrative.country",
      "elementType": "geometry.stroke",
      "stylers": [{ "color": "#c9c9c9" }]
    },
    {
      "featureType": "administrative.province",
      "elementType": "geometry.stroke",
      "stylers": [{ "color": "#c9c9c9" }]
    },
    {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [{ "color": "#e5e5e5" }]
    },
    {
      "featureType": "poi",
      "elementType": "all",
      "stylers": [{ "visibility": "off" }]
    },
    {
      "featureType": "road",
      "elementType": "all",
      "stylers": [
        { "saturation": -100 },
        { "lightness": 45 }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [{ "color": "#ffffff" }]
    },
    {
      "featureType": "road",
      "elementType": "labels",
      "stylers": [{ "visibility": "off" }]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [{ "color": "#dadada" }]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels",
      "stylers": [{ "visibility": "off" }]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [{ "color": "#e5e5e5" }]
    },
    {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [{ "color": "#ffffff" }]
    },
    {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [{ "visibility": "off" }]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [{ "color": "#c9c9c9" }]
    },
    {
      "featureType": "water",
      "elementType": "labels.text",
      "stylers": [{ "visibility": "off" }]
    }
  ];


  // Handle map load error
  const handleMapError = (error) => {
    console.error("Google Maps failed to load:", error);
  };

  return (
    <footer className="wx3-footer">
      <div className="wx3-footer-container">
        <div className="wx3-footer-content">
          {/* Company Info */}
          <div className="wx3-footer-brand">
            <div className="wx3-footer-logo">
              <img src={logo} alt="Wx3 FZC LLC" className="wx3-logo-img" />
            </div>
            <div className="wx3-company-info">
              <h3 className="wx3-company-name">Wx3 FZC LLC</h3>
              <p className="wx3-company-desc">
                Your trusted partner in multi-sector trading & technology solutions across the UAE and beyond.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="wx3-contact-section">
            <h4 className="wx3-section-title">Get In Touch</h4>
            <div className="wx3-contact-list">
              <a
                href="https://maps.app.goo.gl/YnjJGFiXvZ3zUiGt6"
                className="wx3-contact-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapMarkerAlt className="wx3-contact-icon" />
                <div className="wx3-contact-details">
                  <span className="wx3-contact-label">Address</span>
                  <span className="wx3-contact-text">
                    Business Centre, SPC Free Zone, Al Zahia Area (Entrance 2),
                    Sheikh Mohammed Bin Zayed Road, Sharjah, UAE
                  </span>
                </div>
              </a>

              <a
                href="https://wa.me/971567864078"
                className="wx3-contact-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="wx3-contact-icon-container">
                  <FaPhone className="wx3-contact-icon" />
                </div>
                <div className="wx3-contact-details">
                  <span className="wx3-contact-label">Phone</span>
                  <span className="wx3-contact-text">+971 56 786 4078</span>
                </div>
              </a>

              <a
                href="mailto:info@thewx3.com"
                className="wx3-contact-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope className="wx3-contact-icon" />
                <div className="wx3-contact-details">
                  <span className="wx3-contact-label">Email</span>
                  <span className="wx3-contact-text">info@thewx3.com</span>
                </div>
              </a>
            </div>
          </div>

          {/* Styled Google Map */}
          <div className="wx3-map-section">
            <h4 className="wx3-section-title">Our Location</h4>
            <div className="wx3-live-map-container">
              {/* Check if API key exists */}
              {import.meta.env.VITE_GOOGLE_MAPS_API_KEY ? (
                <LoadScript 
                  googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
                  onError={handleMapError}
                >
                  <GoogleMap
                    mapContainerClassName="wx3-map-container"
                    center={center}
                    zoom={15}
                    options={{ 
                      styles: monochromeStyles,
                      disableDefaultUI: true,
                      zoomControl: true,
                      streetViewControl: false,
                      mapTypeControl: false,
                      fullscreenControl: false
                    }}
                    onLoad={() => console.log("Map loaded successfully")}
                    onError={() => console.log("Map error occurred")}
                  >
                    <Marker 
                      position={center}
                      title="Wx3 FZC LLC - Sharjah Publishing City Free Zone"
                      // Use default marker (commented out custom icon)
                    />
                  </GoogleMap>
                </LoadScript>
              ) : (
                <div className="wx3-map-fallback">
                  <p>Google Maps API key not configured</p>
                  <a 
                    href="https://maps.app.goo.gl/YnjJGFiXvZ3zUiGt6" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="wx3-map-link"
                  >
                    <FaMapMarkerAlt />
                    Open in Google Maps
                  </a>
                </div>
              )}
              
              {/* Map Fallback Link */}
              <div className="wx3-map-fallback">
                <a 
                  href="https://maps.app.goo.gl/YnjJGFiXvZ3zUiGt6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="wx3-map-link"
                >
                  <FaMapMarkerAlt />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="wx3-footer-bottom">
          <div className="wx3-footer-divider"></div>
          <div className="wx3-bottom-content">
            <div className="wx3-copyright">
              <p>&copy; {currentYear} Wx3 FZC LLC. All rights reserved.</p>
            </div>
            <div className="wx3-tagline">
              <p>Multi-sector trading & technology solutions</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;