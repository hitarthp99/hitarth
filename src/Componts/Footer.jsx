import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt
} from 'react-icons/fa';
import logo from '/src/assets/logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 pb-3 mt-5">
      <Container>
        <Row className="gy-4">
          {/* Company Info */}
          <Col xs={12} md={4}>
            <Image src={logo} height={60} rounded className="mb-2" />
            <p>Nidhi Corporation provides expert labor, machinery, and transport services across India.</p>
          </Col>

          {/* Navigation Links */}
          <Col xs={12} md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/transportation" className="text-white text-decoration-none">Transportation</a></li>
              <li><a href="/lebarcontract" className="text-white text-decoration-none">Labor Contractor</a></li>
              <li><a href="/machinearyrent" className="text-white text-decoration-none">Machinery Rent</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </Col>

          {/* Contact & Social */}
          <Col xs={12} md={4}>
            <h5>Contact Us</h5>
            <p><FaMapMarkerAlt className="me-2" /> Himmatnagar, Gujarat, India</p>
            <p><FaPhoneAlt className="me-2" /> +91 97242 50009</p>
            <p><FaEnvelope className="me-2" /> nidhicorporation2502@gmail.com</p>

            <div className="d-flex gap-3 mt-2">
              <a href="#" className="text-white fs-5"><FaFacebookF /></a>
              <a href="#" className="text-white fs-5"><FaInstagram /></a>
              <a href="https://wa.me/919724250009" className="text-success fs-5" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
            </div>
          </Col>
        </Row>

        <hr className="border-light my-4" />
        <p className="text-center m-0">&copy; {new Date().getFullYear()} Nidhi Corporation. All Rights Reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
