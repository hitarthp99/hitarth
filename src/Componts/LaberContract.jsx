import React from 'react';
import { Image, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import labor1 from '/src/assets/laber3.jpg';
import labor2 from '/src/assets/laber1.jpg';
import labor3 from '/src/assets/laber2.jpg';

export const LaberContract = () => {
  const navigate = useNavigate();

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  };

  return (
    <div
      className="container-fluid"
      style={{
        padding: '2rem 1rem',
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
        Labor Contractor – Nidhi Corporation
      </motion.h1>

      <motion.h3
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        className="text-center mb-5"
        style={{ fontSize: '1.75rem', color: '#555', lineHeight: '2.5rem' }}
      >
        We provide skilled & unskilled labor on contract for industries like factories,
        construction, logistics, packaging, and more.
      </motion.h3>

      <motion.div
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        className="mb-5"
      >
        <Image
          src={labor1}
          fluid
          rounded
          style={{ width: '100%', maxHeight: '600px', objectFit: 'cover' }}
        />
      </motion.div>

      <div className="row align-items-center mb-5">
        <motion.div
          className="col-md-6 mb-4 mb-md-0"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <Image
            src={labor2}
            fluid
            rounded
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </motion.div>
        <motion.div
          className="col-md-6"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <h2
            style={{
              color: '#0056b3',
              fontWeight: '700',
              marginBottom: '1.5rem',
              fontSize: '2.5rem',
            }}
          >
            What We Do
          </h2>
          <ul
            style={{
              fontSize: '1.5rem',
              lineHeight: '2.8rem',
              color: '#444',
              paddingLeft: '1.2rem',
            }}
          >
            <li>Provide legally contracted labor services</li>
            <li>Trained and qualified workers for various job types</li>
            <li>Full documentation and legal compliance</li>
            <li>Efficient, timely, and high-quality service delivery</li>
          </ul>
        </motion.div>
      </div>

      <div className="row align-items-center mb-5">
        <motion.div
          className="col-md-6"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <h2
            style={{
              color: '#28a745',
              fontWeight: '700',
              marginBottom: '1.5rem',
              fontSize: '2.5rem',
            }}
          >
            Facilities We Provide
          </h2>
          <ul
            style={{
              fontSize: '1.5rem',
              lineHeight: '2.8rem',
              color: '#444',
              paddingLeft: '1.2rem',
            }}
          >
            <li>Accommodation and housing for labor</li>
            <li>Fair and timely wages</li>
            <li>Safety equipment and proper training</li>
            <li>Medical support and regular allowances</li>
          </ul>
        </motion.div>
        <motion.div
          className="col-md-6 mt-4 mt-md-0"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <Image
            src={labor3}
            fluid
            rounded
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </motion.div>
      </div>

      <motion.div
        className="mb-5 text-center"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        <h2
          className="fw-bold"
          style={{
            fontSize: '2.8rem',
            textDecoration: 'underline',
            color: '#007bff',
            marginBottom: '1rem',
          }}
        >
          Our Goal
        </h2>
        <p
          style={{
            fontSize: '1.5rem',
            color: '#555',
            maxWidth: '900px',
            margin: 'auto',
            lineHeight: '2.5rem',
          }}
        >
          We aim to build trustworthy and transparent relationships between employers and workers.
          With a strong focus on reliability, responsibility, and legal compliance, Nidhi Corporation
          is committed to delivering top-tier labor contracting services across Gujarat.
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
  );
};
