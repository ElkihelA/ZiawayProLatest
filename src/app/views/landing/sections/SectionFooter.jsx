import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

export const SectionFooter = ({ id }) => {
  return (
    <section id={id} className='section-footer bg-gray-200 py-5 text-center'>
      <Container>
        <Row className='justify-content-between'>
          <Col md={3}>
            <div classNam='d-flex align-items-end'>
              <span className='mr-2 h5 mb-0 text-gray-600'>Follow us</span>
              <Button size='sm' className='mx-2'>
                <i className='i-Facebook-2 h5 mb-0'></i>
              </Button>
              <Button size='sm' className='mx-2'>
                <i className='i-Twitter h5 mb-0'></i>
              </Button>
              <Button size='sm' className='mx-2'>
                <i className='i-Linkedin-2 h5 mb-0'></i>
              </Button>
            </div>
          </Col>
          <Col md={3}>
            <div>
              <div className='mb-4'>
                <a href='/'>Terms of Service</a>
              </div>
              <div>
                <a href='/'>Privacy policies</a>
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div>
              <span className='mr-2 h6 mb-0 text-gray-600'>
                © 2021 All rights reserved
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
