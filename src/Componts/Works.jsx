import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ashokleland from '/src/assets/ashokleland.jpg';
import jcb from '/src/assets/jcb.jpg';
import laber from '/src/assets/laber.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Works = () => {
  const worksData = [
    {
      title: 'Transportation Works',
      image: ashokleland,
      desc: 'We provide efficient and reliable transportation services across India.',
      link: '/transportation',
    },
    {
      title: 'Labor Contractor',
      image: laber,
      desc: 'Expert labor supply for construction and industrial requirements.',
      link: '/lebarcontract',
    },
    {
      title: 'Machinery Rent Supply',
      image: jcb,
      desc: 'Affordable machinery rentals like JCBs, trucks, and more.',
      link: '/machinearyrent',
    },
  ];

  return (
    <Container fluid className="py-5 bg-light">
      <Row className="justify-content-center g-4">
        {worksData.map((item, index) => (
          <Col key={index} xs={12} sm={6} md={4}>
            <Card
              className="h-100 shadow-lg border-0"
              style={{
                borderRadius: '20px',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>

              <div
                style={{
                  width: '100%',
                  height: '230px',
                  backgroundColor: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderTopLeftRadius: '20px',
                  borderTopRightRadius: '20px',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                  }}
                />
              </div>

              <Card.Body className="text-center">
                <Card.Title style={{ fontWeight: '700', fontSize: '1.5rem' }}>
                  {item.title}
                </Card.Title>
                <Card.Text style={{ color: '#555', fontSize: '1rem', minHeight: '80px' }}>
                  {item.desc}
                </Card.Text>
                <Link to={item.link}>
                  <Button variant="dark" className="px-4 py-2 rounded-pill">
                    See Details
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
