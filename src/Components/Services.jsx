import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";// eslint-disable-line
import "./Services.css";
import car from "/src/assets/Service-1.webp"
import carservice from "/src/assets/Service-2.webp"
import energy from "/src/assets/Service-3.webp"
import iot from "/src/assets/Service-4.webp"
import security from "/src/assets/Service-5.webp"
import lap from "/src/assets/Service-6.webp"
import software from "/src/assets/Service-7.webp"
import medi from "/src/assets/Service-8.webp"
import robot from "/src/assets/Service-9.webp"
import tool from "/src/assets/Service-10.webp"
import telecom from "/src/assets/Service-11.webp"
import milt from "/src/assets/Service-12.webp"

const services = [
  {
    title: "Electric Vehicles (EVs) & Charging Infrastructure",
    desc: "Power your future with Wx3's electric cars, buses, and commercial EVs. Wx3 supplies scalable charging systems for public, private, and fleet use.",
    image: car,
  },
  {
    title: "Automotive Vehicles & Parts/Accessories",
    desc: "Drive innovation with Wx3's range of new, used, and electric vehicles, plus premium parts and accessories. We deliver performance, reliability, and cutting-edge technology for every automotive need.",
    image: carservice ,
  },
  {
    title: "Renewable Energy Equipment",
    desc: "Empower your business with renewable energy systems and solar-wind solutions. Wx3 supplies high-efficiency equipment for sustainable and cost-effective power.",
    image: energy,
  },
  {
    title: "Smart Devices & IoT Systems",
    desc: "Transform homes and industries with cutting-edge IoT and automation systems. Wx3 provides connected smart devices that enhance efficiency and data control.",
    image: iot,
  },
  {
    title: "Security Systems & Equipment",
    desc: "Protect your assets with intelligent surveillance, access control, and safety systems. Wx3 delivers state-of-the-art security technology for businesses and residences.",
    image: security,
  },
  {
    title: "Computer Hardware & Peripherals",
    desc: "Your trusted source for servers, PCs, and networking equipment worldwide. Wx3 powers digital transformation with top-grade computer hardware solutions.",
    image: lap,
  },
  {
    title: "Software Solutions & Platforms",
    desc: "Accelerate your growth with enterprise software, AI tools, and digital platforms. Wx3 delivers scalable software solutions tailored to business and consumer needs.",
    image: software,
  },
  {
    title: "Medical Equipment & Devices",
    desc: "Enhance healthcare delivery with Wx3's advanced medical and surgical equipment. We supply reliable, certified medical devices for hospitals and clinics worldwide.",
    image: medi,
  },
  {
    title: "Industrial Robotics & Automation",
    desc: "Revolutionize your production with high-precision robots and automated systems. Wx3 empowers manufacturers with next-gen robotics for smarter, faster operations.",
     image: robot,
  },
  {
    title: "Industrial Machinery & Tools",
    desc: "Equip your industry with heavy machinery, tools, and engineering equipment. Wx3 provides durable, high-performance machinery for global industrial sectors.",
    image: tool,
  },
  {
    title: "Telecom & Networking Equipment",
    desc: "Connect the world with Wx3's fiber, 5G, and enterprise network solutions. We enable seamless communication through advanced telecom infrastructure.",
    image: telecom,
  },
  {
    title: "Military & Law Enforcement Supplies",
    desc: "Strengthen your operations with Wx3's range of military and law enforcement products. We provide training munitions, specialized vehicles, tactical equipment, and certified spares for mission readiness and field reliability.",
    image: milt,
  },
];

const Services = () => {
  const ref = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const section = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, [controls]);

  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <section className="wx3-services" id="services" ref={ref}>
      <div className="container">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: -40 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          <h2>Our Core Services</h2>
          <p>
            Wx3 FZC LLC connects global innovation with local opportunity —
            powering industries through smart technology, renewable energy,
            and next-gen trading.
          </p>
        </motion.div>

        <div className="row">
          {services.map((service, i) => (
            <motion.div
              className="col-lg-4 col-md-6 mb-5"
              key={i}
              custom={i}
              initial="hidden"
              animate={controls}
              variants={cardVariant}
            >
              <div className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-content">
                  <h4>{service.title}</h4>
                  <p>{service.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;