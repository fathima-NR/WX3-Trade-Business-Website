// Clients.jsx
import React from "react";
import { motion } from "framer-motion";// eslint-disable-line
import "./Clients.css";
import logo1 from "/src/assets/01. Government of Dubai (UAE).webp"
import logo2 from "/src/assets/02. Dubai Police (UAE).webp"
import logo3 from "/src/assets/03. Dubai Airports - DXB (UAE).webp"
import logo4 from "/src/assets/04. Dubai Electricity and Water Authority - DEWA (UAE) (1).webp"
import logo5 from "/src/assets/05. Ministry of Defence - MoD (UAE).webp"
import logo6 from "/src/assets/06. Edge Group (UAE).webp"
import logo7 from "/src/assets/07. Digital Dubai Authority - DDA (UAE).webp"
import logo8 from "/src/assets/08. Dubai National Airline Travel Agency - DNATA (UAE).webp"
import logo9 from "/src/assets/09. Ministry of Defence - MoD (Iraq).webp"
import logo10 from "/src/assets/10. Land Forces (Iraq).webp"
import logo11 from "/src/assets/11. Ministry of Defence - MoD (Azerbaijan).webp"
import logo12 from "/src/assets/12. Land Forces (Azarbaijan).webp"
import logo13 from "/src/assets/13. Navy Forces (Azarbaijan).webp"
import logo14 from "/src/assets/14. Special Forces (Azarbaijan).webp"
import logo15 from "/src/assets/15. Government of Kinshasa (DRC).webp"
import logo16 from "/src/assets/16. WoW Trading (DRC).webp"
import logo17 from "/src/assets/17. Fast One Cargo - FOC (UAE).webp"
import logo18 from "/src/assets/18. Red Point (UAE).webp"
import logo19 from "/src/assets/19. Web Mould (USA).webp"
import logo20 from "/src/assets/20. Quantum Star (UAE).webp"

const clients = [
  { name: "Government of Dubai (UAE)", logo: logo1 },
  { name: "Dubai Police (UAE)", logo: logo2 },
  { name: "Dubai Airports - DXB (UAE)", logo:  logo3 },
  { name: "Dubai Electricity and Water Authority - DEWA (UAE)", logo: logo4 },
  { name: "Ministry of Defence - MoD (UAE)", logo:logo5 },
  { name: "Edge Group (UAE)", logo: logo6 },
  { name: "Digital Dubai Authority - DDA (UAE)", logo: logo7 },
  { name: "Dubai National Airline Travel Agency - DNATA (UAE)", logo: logo8 },
  { name: "Ministry of Defence - MoD (Iraq)", logo: logo9},
  { name: "Land Forces (Iraq)", logo: logo10  },
  { name: "Ministry of Defence - MoD (Azerbaijan)", logo: logo11 },
  { name: "Land Forces (Azerbaijan)", logo: logo12 },
  { name: "Navy Forces (Azerbaijan)", logo: logo13},
  { name: "Special Forces (Azerbaijan)", logo:  logo14},
  { name: "Government of Kinshasa (DRC)", logo: logo15 },
  { name: "WoW Trading (DRC)", logo: logo16 },
  { name: "Fast One Cargo - FOC (UAE)", logo: logo17 },
  { name: "Red Point (UAE)", logo: logo18 },
  { name: "Web Mould (USA)", logo: logo19 },
  { name: "Quantum Star (UAE)", logo: logo20 }
];

const Clients = () => {
  return (
    <section className="wx3-clients" id="clients">
      <div className="container">
        <motion.div
          className="clients-header"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>Our Valued Clients</h2>
          <p>
            Trusted by government entities, defense organizations, and leading 
            enterprises across multiple continents.
          </p>
        </motion.div>

        <div className="clients-marquee-wrapper ">
          <motion.div 
            className="clients-marquee p-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="marquee-track">
              {/* First set */}
              {clients.map((client, index) => (
                <div className="client-card" key={`first-${index}`}>
                  <div className="client-logo">
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      loading="lazy"
                    />
                  </div>
                  <div className="client-name">
                    <span>{client.name}</span>
                  </div>
                </div>
              ))}
              
              {/* Duplicate for seamless loop */}
              {clients.map((client, index) => (
                <div className="client-card" key={`second-${index}`}>
                  <div className="client-logo">
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      loading="lazy"
                    />
                  </div>
                  <div className="client-name">
                    <span>{client.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Clients;