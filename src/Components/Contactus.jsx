import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";// eslint-disable-line
import "./Contactus.css";

const Contact = () => {
  const ref = useRef(null);
  const controls = useAnimation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const [recaptchaCompleted, setRecaptchaCompleted] = useState(false);

  // Load reCAPTCHA v2 script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit';
    script.async = true;
    script.defer = true;
    script.onload = () => setRecaptchaLoaded(true);
    document.head.appendChild(script);

    // Global callback for reCAPTCHA
    window.onRecaptchaLoad = () => {
      window.grecaptcha.render('recaptcha-container', {
        'sitekey': '6LdAthYsAAAAANDns6U7JbHxXHJ6mgQAVthayO4N',
        'callback': () => setRecaptchaCompleted(true),
        'expired-callback': () => setRecaptchaCompleted(false)
      });
    };
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const section = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) controls.start("visible");
        });
      },
      { threshold: 0.2 }
    );

    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, [controls]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    const emptyFields = [];
    if (!formData.name) emptyFields.push('Full Name');
    if (!formData.email) emptyFields.push('Email');
    if (!formData.phone) emptyFields.push('Phone');
    if (!formData.message) emptyFields.push('Message');
    
    if (emptyFields.length > 0) {
      alert(`⚠️ Please fill in the following required fields: ${emptyFields.join(', ')}`);
      return;
    }

    // Check reCAPTCHA v2 response
    const recaptchaResponse = window.grecaptcha ? window.grecaptcha.getResponse() : '';
    if (!recaptchaResponse) {
      alert("⚠️ Please complete the reCAPTCHA verification.");
      return;
    }

    setIsSubmitting(true);

    try {

      // Submit to your PHP backend
      const formDataToSend = new FormData();
      formDataToSend.append('fullName', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('g-recaptcha-response', recaptchaResponse);

      const response = await fetch('https://trade.thewx3.com/contact.php', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.text();

      if (result.includes('successfully')) {
        alert("🟢 Thank you! Your message has been sent successfully. We'll get back to you soon.");
        
        // Reset form and reCAPTCHA
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        if (window.grecaptcha) {
          window.grecaptcha.reset();
          setRecaptchaCompleted(false);
        }
      } else {
        alert(`❌ ${result}`);
      }

    } catch (error) {
      console.error('Form submission error:', error);
      alert("❌ An error occurred while sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="wx3unique-contact-section mt-5" id="contact" ref={ref}>
      <div className="wx3unique-container">

        {/* Header Section */}
        <motion.div
          className="clients-header"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>CONTACT US</h2>
          <p>
            Ready to power your projects with innovative solutions? Get in touch
            with our team to discuss your specific requirements.
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="wx3unique-row wx3unique-contact-content">
          
          {/* Left Column - Contact Info */}
          <motion.div
            className="wx3unique-col-left"
            initial="hidden"
            animate={controls}
            variants={fadeUp}
          >
            <div className="wx3unique-contact-info">
              <h4>Address</h4>
              <p>
                <a
                  href="https://maps.google.com/?q=Business Centre, SPC Free Zone, Al Zahia Area, Sheikh Mohammed Bin Zayed Road, Sharjah, UAE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  Business Centre, SPC Free Zone,
                  <br />
                  Al Zahia Area (Entrance 2), Sheikh Mohammed Bin Zayed Road,
                  <br />
                  Sharjah, UAE
                </a>
              </p>

              <h4>Phone</h4>
              <p>
                <a
                  href="https://wa.me/971567864078"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  +971 56 786 4078
                </a>
              </p>

              <h4>Email</h4>
              <p>
                <a
                  href="mailto:info@thewx3.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  info@thewx3.com
                </a>
              </p>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            className="wx3unique-col-right"
            initial="hidden"
            animate={controls}
            variants={fadeUp}
          >
            <form className="wx3unique-contact-form" onSubmit={handleSubmit}>
              
              {/* Name and Email Row */}
              <div className="wx3unique-form-row">
                <div className="wx3unique-form-group half">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                  />
                </div>
                <div className="wx3unique-form-group half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div className="wx3unique-form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone *"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                />
              </div>

              {/* Message Field */}
              <div className="wx3unique-form-group">
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Message *"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                ></textarea>
              </div>

              {/* reCAPTCHA v2 Checkbox */}
              <div className="wx3unique-form-group">
                <div id="recaptcha-container"></div>
              </div>

              {/* Submit Button */}
              <div className="wx3unique-form-btn-container">
                <button 
                  type="submit" 
                  className={`wx3unique-btn-contact ${(!recaptchaCompleted || isSubmitting) ? 'disabled' : ''}`}
                  disabled={!recaptchaCompleted || isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span style={{ marginRight: '8px' }}>⏳</span>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;