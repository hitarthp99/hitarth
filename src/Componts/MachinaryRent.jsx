import React from 'react';
import { Image, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import machinery1 from '/src/assets/jcbm.jpg';
import machinery2 from '/src/assets/hitachi.jpg';
import machinery3 from '/src/assets/tractor.jpg';

export const MachinaryRent = () => {
  const navigate = useNavigate();

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 1.6 } },
  };

  return (
    <div>
      <div className="container-fluid" style={{ padding: '2rem 1rem', backgroundColor: '#ffffff', fontFamily: 'Segoe UI, sans-serif' }}>
        <motion.h1
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="text-center fw-bold mb-4"
          style={{ fontSize: '4rem', color: '#2c3e50' }}
        >
          Machinery Rental – Nidhi Corporation
        </motion.h1>

        <motion.h3
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="text-center mb-5"
          style={{ fontSize: '1.8rem', color: '#666', lineHeight: '2.5rem', maxWidth: '1000px', margin: 'auto' }}
        >
          We provide high-performance machinery for rent, ideal for construction, industrial, and infrastructure work. Our services include both supply and execution using advanced equipment and experienced operators.
        </motion.h3>

        <motion.div initial="initial" animate="animate" variants={fadeInUp} className="mb-5">
          <Image src={machinery1} fluid rounded style={{ width: '100%', maxHeight: '600px', objectFit: 'cover' }} />
        </motion.div>

        {/* First Text-Image Row */}
        <div className="row align-items-center mb-5">
          <motion.div className="col-md-6 mb-4 mb-md-0" initial="initial" animate="animate" variants={fadeInUp}>
            <Image src={machinery2} fluid rounded style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </motion.div>
          <motion.div className="col-md-6" initial="initial" animate="animate" variants={fadeInUp}>
            <h2 style={{ color: '#0056b3', fontWeight: '700', fontSize: '2.5rem', marginBottom: '1.5rem' }}>
              Our Machinery Rental Services
            </h2>
            <h3 style={{ fontWeight: 'bold', fontSize: '1.8rem', marginBottom: '1rem' }}>Available Equipment:</h3>
            <ul style={{ fontSize: '1.5rem', lineHeight: '2.6rem', color: '#444' }}>
              <li>Tractors with Trolley</li>
              <li>JCB Machines</li>
              <li>Hitachi / Excavators</li>
              <li>Concrete Mixers</li>
              <li>Water Tankers</li>
            </ul>
            <p style={{ fontSize: '1.4rem', color: '#333', marginTop: '1rem' }}>
              Our machines are available on an hourly, daily, or project basis and come with skilled operators ensuring safety and quality execution.
            </p>
          </motion.div>
        </div>

        {/* Second Text-Image Row */}
        <div className="row align-items-center mb-5">
          <motion.div className="col-md-6 order-2 order-md-1" initial="initial" animate="animate" variants={fadeInUp}>
            <h3 style={{ fontWeight: 'bold', fontSize: '2rem', marginBottom: '1rem' }}>We Provide Services For:</h3>
            <ul style={{ fontSize: '1.5rem', lineHeight: '2.6rem', color: '#444' }}>
              <li>Construction Sites</li>
              <li>Land Leveling & Excavation</li>
              <li>Material Loading/Unloading</li>
              <li>Road & Canal Work</li>
              <li>Pipeline & Drainage Projects</li>
            </ul>
            <p style={{ fontSize: '1.4rem', color: '#333', marginTop: '1rem' }}>
              Whether it's a small site or a large-scale project, we can fulfill your equipment needs efficiently and economically.
            </p>
          </motion.div>
          <motion.div className="col-md-6 order-1 order-md-2 mb-4 mb-md-0" initial="initial" animate="animate" variants={fadeInUp}>
            <Image src={machinery3} fluid rounded style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </motion.div>
        </div>

        {/* Why Choose Section */}
        <motion.div className="mb-5" initial="initial" animate="animate" variants={fadeInUp}>
          <h2 className="text-center fw-bold mb-4" style={{ fontSize: '2.8rem', textDecoration: 'underline', color: '#28a745' }}>
            Why Choose Nidhi Corporation?
          </h2>
          <div className="col-lg-8 col-md-10 col-sm-12 mx-auto">
            <ul style={{ listStyle: 'none', paddingLeft: '0', fontSize: '1.5rem', color: '#333', lineHeight: '2.4rem' }}>
              <li><span style={{ color: '#28a745', marginRight: '10px' }}>✔</span>Well-Maintained Machinery</li>
              <li><span style={{ color: '#28a745', marginRight: '10px' }}>✔</span>Experienced Operators</li>
              <li><span style={{ color: '#28a745', marginRight: '10px' }}>✔</span>Transparent Pricing</li>
              <li><span style={{ color: '#28a745', marginRight: '10px' }}>✔</span>Fast Booking & Delivery</li>
              <li><span style={{ color: '#28a745', marginRight: '10px' }}>✔</span>Technical Assistance Available</li>
            </ul>
          </div>
        </motion.div>

        {/* Service Coverage */}
        <motion.div className="text-center mb-5" initial="initial" animate="animate" variants={fadeInUp}>
          <h2 className="fw-bold" style={{ color: '#007bff', fontSize: '2.3rem', marginBottom: '0.8rem' }}>Service Coverage:</h2>
          <p style={{ fontSize: '1.5rem', color: '#555' }}>
            Serving Himmatnagar, Sabarkantha, and nearby regions with top-class machinery support.
          </p>

          <Button
            variant="primary"
            size="lg"
            className="px-5 py-3 rounded-pill mt-4"
            onClick={() => navigate('/contact')}
          >
            Contact Us
          </Button>
        </motion.div>
      </div>
    </div>
  );
};
