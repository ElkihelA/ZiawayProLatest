import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Images from './assets/icons';

const ContactUsPage = () => {
  return (
    <main className='contact-us-page d-flex flex-column vh-100'>
      <Header />
      <section className='flex-fill'>
        <div className='container-xxl mx-auto bg-primary-light'>
          <div>
            <Row className='mx-0'>
              <Col xs={12} md={6} className='px-0'>
                <div className='h-100'>
                  <img className='h-100 w-100' src={Images.ImageOne} alt='..' />
                </div>
              </Col>
              <Col>
                <div className='d-flex flex-column align-items-center justify-content-center h-100 col-12 col-md-10 col-xl-8 px-0 mx-auto pb-5 fade-in-bottom'>
                  <h1 className='font-weight-bold text-white display-5 my-4 my-lg-5'>
                    Contact us!
                  </h1>
                  <form noValidate>
                    <Row style={{ rowGap: 20 }}>
                      <Col md={6}>
                        <input
                          className='form-control form-control-lg'
                          type='text'
                          placeholder='Full name'
                        />
                      </Col>
                      <Col md={6}>
                        <input
                          className='form-control form-control-lg'
                          type='email'
                          placeholder='E-mail'
                        />
                      </Col>
                      <Col md={12}>
                        <input
                          className='form-control form-control-lg'
                          type='text'
                          placeholder='Object'
                        />
                      </Col>
                      <Col md={12}>
                        <textarea
                          className='form-control form-control-lg'
                          rows='4'
                          placeholder='Write your message here...'
                        />
                      </Col>
                      <Col md={12}>
                        <Button block size='lg'>
                          To send
                        </Button>
                      </Col>
                    </Row>
                  </form>
                </div>
              </Col>
            </Row>
            <div className='row mx-0 align-items-baseline justify-content-center bg-white py-3 text-16 text-center'>
              <span className='mr-3'>
                <img height={50} src={Images.Email} alt='' />
              </span>
              <span>
                You can also contact us by email at the following address:
              </span>
              <a href='mailto:contact@ziaway.com'>contact@ziaway.com</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default ContactUsPage;
