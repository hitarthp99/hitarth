import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import logo from '/src/assets/logo.jpg';
import { FaFacebookF, FaInstagram, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import {
  Image,
  Container,
  Nav,
  Navbar,
} from 'react-bootstrap';

export const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-white shadow sticky-top py-2">
        <Container fluid className="d-flex align-items-center justify-content-between">
          {/* Logo */}
          <NavLink to="/" className="navbar-brand d-flex align-items-center">
            <Image src={logo} height={50} alt="Logo" rounded />
          </NavLink>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            {/* Navigation Links */}
            <Nav className="me-auto my-2 my-lg-0 d-flex align-items-center" navbarScroll>
              {[
                { to: '/', label: 'Home' },
                { to: '/transportation', label: 'Transportation Work' },
                { to: '/lebarcontract', label: 'Labor Contractor' },
                { to: '/machinearyrent', label: 'Machinery Rent Supply' },
                { to: '/contact', label: 'Contact Us' },
              ].map((link, idx) => (
                <NavLink
                  key={idx}
                  to={link.to}
                  className={({ isActive }) =>
                    `nav-link mx-2 fw-semibold ${isActive ? 'text-primary' : 'text-dark'}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </Nav>

            {/* Social Icons & Contact Info */}
            <div className="d-flex flex-column flex-lg-row align-items-lg-center gap-3">
              {/* Social Icons */}
              <div className="d-flex justify-content-center gap-3">
                <a href="#" className="text-dark fs-5" title="Facebook">
                  <FaFacebookF />
                </a>
                <a href="#" className="text-dark fs-5" title="Instagram">
                  <FaInstagram />
                </a>
                <a href="#" className="text-dark fs-5" title="Location">
                  <FaMapMarkerAlt />
                </a>
              </div>

              {/* WhatsApp Contact */}
              <div className="d-flex align-items-center gap-2 bg-light px-3 py-2 rounded-pill shadow-sm mt-2 mt-lg-0">
                <a
                  href="https://wa.me/919724250009"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-success fs-5"
                  title="WhatsApp Nishant Patel"
                >
                  <FaWhatsapp />
                </a>
                <span className="fw-semibold text-dark" style={{ whiteSpace: 'nowrap' }}>
                  Nishant Patel <br />
                  <small className="text-muted">+91 97242 50009</small>
                </span>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Nested Route */}
      <Outlet />
    </>
  );
};
