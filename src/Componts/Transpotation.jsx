import React from 'react';
import { Image } from 'react-bootstrap';
import transportation from '/src/assets/transportation1.jpg';
import transportation1 from '/src/assets/transportation2.jpg';
import transportation2 from '/src/assets/transportation3.jpg';
import { motion } from 'framer-motion';

export const Transpotation = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 1.6 } },
  };

  return (
    <div>
      <div
        className="container-fluid"
        style={{
          padding: '2rem',
          backgroundColor: '#ffffff',
          fontFamily: 'Segoe UI, sans-serif',
        }}
      >
        <motion.h1
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="text-center fw-bold mb-4"
          style={{ fontSize: '4rem', color: '#2c3e50' }}
        >
          Transportation Work – Nidhi Corporation
        </motion.h1>

        <motion.h3
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="text-center mb-5"
          style={{ fontSize: '2rem', color: '#777', lineHeight: '1.8' }}
        >
          At Nidhi Corporation, we specialize in efficient and reliable transportation solutions tailored to meet the needs of industrial, construction, and infrastructure projects.
        </motion.h3>

        <motion.div initial="initial" animate="animate" variants={fadeInUp} className="mb-5">
          <Image src={transportation} fluid rounded style={{ width: '100%', maxHeight: '600px', objectFit: 'cover' }} />
        </motion.div>

        <div className="row align-items-center mb-5">
          <motion.div className="col-md-6 mb-4 mb-md-0" initial="initial" animate="animate" variants={fadeInUp}>
            <Image src={transportation1} fluid rounded style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </motion.div>
          <motion.div className="col-md-6" initial="initial" animate="animate" variants={fadeInUp}>
            <h2 style={{ color: '#0056b3', fontWeight: '700', marginBottom: '1rem', fontSize: '2rem' }}>Our Key Transportation Services Include:</h2>
            <h3 style={{ fontWeight: 'bold', fontSize: '1.8rem' }}>1. Dumper Transportation :</h3>
            <p style={{ fontSize: '1.2rem' }}>We provide a fleet of well-maintained dumpers to transport materials such as:</p>
            <ul style={{ fontSize: '1.2rem' }}>
              <li>Murrum</li>
              <li>Sand</li>
              <li>Soil</li>
              <li>Aggregates</li>
              <li>Waste disposal for construction sites</li>
            </ul>
            <p style={{ fontWeight: '500', color: '#2c3e50', fontSize: '1.2rem' }}>
              Whether it's earthwork, excavation, or material shifting, our dumpers are operated by trained drivers ensuring safety, punctuality, and maximum load capacity.
            </p>
          </motion.div>
        </div>

        <div className="row align-items-center mb-5">
          <motion.div className="col-md-6 mb-4 mb-md-0 order-2 order-md-1" initial="initial" animate="animate" variants={fadeInUp}>
            <h3 style={{ fontWeight: 'bold', fontSize: '1.8rem' }}>2. Construction Material Supply :</h3>
            <p style={{ fontSize: '1.2rem' }}>We transport a wide range of building materials:</p>
            <ul style={{ fontSize: '1.2rem' }}>
              <li>Cement, Bricks, Sand, Gravel</li>
              <li>Iron & Steel Materials</li>
              <li>RCC & PCC related supplies</li>
            </ul>
            <p style={{ fontWeight: '500', color: '#2c3e50', fontSize: '1.2rem' }}>
              Our transport ensures zero material loss and timely delivery to your project site.
            </p>
            <h4 style={{ fontWeight: 'bold', fontSize: '1.5rem', marginTop: '1.5rem' }}>On-Demand Heavy Vehicle Hire</h4>
            <ul style={{ fontSize: '1.2rem' }}>
              <li>Dumpers</li>
              <li>Trucks</li>
              <li>Tractors with trolleys</li>
              <li>Tippers</li>
              <li>Water tankers</li>
            </ul>
          </motion.div>
          <motion.div className="col-md-6 order-1 order-md-2" initial="initial" animate="animate" variants={fadeInUp}>
            <Image src={transportation2} fluid rounded style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </motion.div>
        </div>

        <motion.div className="mb-5" initial="initial" animate="animate" variants={fadeInUp}>
          <h2 className="text-center fw-bold mb-4" style={{ fontSize: '2.5rem', textDecoration: 'underline', color: '#28a745' }}>Why Choose Us?</h2>
          <div className="col-lg-8 col-md-10 col-sm-12 mx-auto">
            <ul style={{ listStyle: 'none', paddingLeft: '0', fontSize: '1.3rem', color: '#333', lineHeight: '2.2rem' }}>
              <li><span style={{ color: '#28a745', marginRight: '10px' }}>✔</span>Modern Fleet of Dumpers & Trucks</li>
              <li><span style={{ color: '#28a745', marginRight: '10px' }}>✔</span>Experienced Operators</li>
              <li><span style={{ color: '#28a745', marginRight: '10px' }}>✔</span>Timely & Safe Delivery</li>
              <li><span style={{ color: '#28a745', marginRight: '10px' }}>✔</span>On-site Support & Tracking</li>
              <li><span style={{ color: '#28a745', marginRight: '10px' }}>✔</span>Flexible Rental Plans</li>
            </ul>
          </div>
        </motion.div>

        <motion.div className="text-center mb-5" initial="initial" animate="animate" variants={fadeInUp}>
          <h2 className="fw-bold" style={{ color: '#007bff', fontSize: '2rem' }}>Service Areas:</h2>
          <p style={{ fontSize: '1.3rem', color: '#555' }}>
            We currently operate across Himmatnagar, Sabarkantha, and nearby industrial zones.
          </p>
        </motion.div>

        {/* ✅ Contact Button */}
        <motion.div className="text-center" initial="initial" animate="animate" variants={fadeInUp}>
          <a href="/contact" style={{ textDecoration: 'none' }}>
            <button
              className="btn btn-primary btn-lg"
              style={{
                fontSize: '1.3rem',
                padding: '0.75rem 2rem',
                borderRadius: '50px',
                marginTop: '2rem',
              }}
            >
              📞 Contact Us
            </button>
          </a>
        </motion.div>

      </div>
    </div>
  );
};
