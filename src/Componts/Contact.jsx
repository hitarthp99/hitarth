import React from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const Contact = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div style={{ backgroundColor: '#f9f9f9', padding: '4vw 0' }}>
      <Container>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <Card className="shadow-lg border-0 p-4">
            <Row className="align-items-center">
              {/* Left: Info */}
              <Col md={7}>
                <motion.div variants={fadeInUp} initial="hidden" animate="visible">
                  <h2 className="fw-bold mb-3">Patel Nishant R.</h2>

                  <p className="mb-2">
                    <FaEnvelope className="me-2 text-primary" />
                    <strong>Email:</strong> nidhicorporation2502@gmail.com
                  </p>

                  <p className="mb-2">
                    <FaPhone className="me-2 text-success" />
                    <strong>Mobile:</strong> +91 97242 50009, 9408407494
                  </p>

                  <hr />

                  <h5 className="fw-semibold mb-2">Our Services</h5>
                  <ul>
                    <li>Transportation Work</li>
                    <li>Labor Contractor</li>
                    <li>Machinery Rent Supply</li>
                  </ul>

                  <hr />

                  <p className="mb-2">
                    <FaMapMarkerAlt className="me-2 text-danger" />
                    <strong>Address:</strong><br />
                    At & Po. Prempur, Ta. Himatnagar, Dist. Sabarkantha,<br />
                    Gujarat - 383225
                  </p>

                  <Button
                    variant="success"
                    className="mt-3 rounded-pill px-4 py-2"
                    href="tel:+919724250009"
                  >
                    📞 Call Now
                  </Button>
                </motion.div>
              </Col>

              {/* Right: Logo or Image */}
              <Col md={5} className="text-center mt-4 mt-md-0">
                <motion.img
                  src="/src/assets/logo.jpg"
                  alt="Nidhi Corporation"
                  style={{ maxWidth: '80%', borderRadius: '10px' }}
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                />
              </Col>
            </Row>
          </Card>
        </motion.div>
      </Container>
    </div>
  );
};
