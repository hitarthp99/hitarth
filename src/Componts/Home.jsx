import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '/src/assets/tractor.jpg';
import slider2 from '/src/assets/laber1.jpg';
import slider3 from '/src/assets/transportation1.jpg';
import { motion } from 'framer-motion';
import { Works } from './works';

export const Home = () => {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {/* 🔹 Internal CSS for responsive image height */}
      <style>
        {`
          @media screen and (max-width: 768px) {
            .carousel-img {
              height: 50vh !important;
            }
          }
          @media screen and (max-width: 480px) {
            .carousel-img {
              height: 40vh !important;
            }
          }
        `}
      </style>

      {/* 🔹 Image Slider */}
      <Carousel controls={false} indicators={false} interval={3000} fade pause={false}>
        {[slider1, slider2, slider3].map((img, i) => (
          <Carousel.Item key={i}>
            <img
              src={img}
              alt={`slide-${i}`}
              className="d-block w-100 carousel-img"
              style={{
                height: '100vh',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />

            <Carousel.Caption
              style={{
                top: '50%',
                transform: 'translateY(-50%)',
                bottom: 'auto',
                left: 0,
                right: 0,
                textAlign: 'left',
                padding: '2rem',
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                style={{
                  backgroundColor: 'rgba(255,255,255,0.8)',
                  padding: '1.5rem',
                  borderRadius: '10px',
                  maxWidth: '90%',
                  margin: 'auto',
                }}
              >
                <h1
                  style={{
                    fontSize: 'clamp(2rem, 5vw, 4rem)',
                    fontWeight: 'bold',
                    color: '#000',
                  }}
                >
                  NIDHI CORPORATION
                </h1>
                <hr style={{ borderColor: '#000' }} />
                <motion.h2
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                  style={{
                    fontSize: 'clamp(1.2rem, 3.5vw, 2.5rem)',
                    fontWeight: 'bold',
                    color: '#000',
                  }}
                >
                  Transportation Work
                </motion.h2>
                <motion.h2
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, delay: 1 }}
                  style={{
                    fontSize: 'clamp(1.2rem, 3.5vw, 2.5rem)',
                    color: '#000',
                  }}
                >
                  Labor Contractor
                </motion.h2>
                <motion.h2
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, delay: 1.5 }}
                  style={{
                    fontSize: 'clamp(1.2rem, 3.5vw, 2.5rem)',
                    color: '#000',
                  }}
                >
                  Machinery Rent Supply
                </motion.h2>
              </motion.div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* 🔻 Works section */}
      <div style={{ backgroundColor: '#f8f9fa', padding: '5vw' }}>
        <Works />
      </div>
    </div>
  );
};
