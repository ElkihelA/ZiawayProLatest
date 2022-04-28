import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';

export const SectionFour = ({ id }) => {
  const items = [
    {
      link: '/',
      image:
        'https://i1.wp.com/blog.ziaway.ca/wp-content/uploads/2020/05/prix-gagnant-768x430.png',
      title: 'How to set the selling price of your property',
      time: 'January 4, 2021',
      badgeText: 'SELL ​​YOUR PROPERTY',
    },
    {
      link: '/',
      image:
        'https://i1.wp.com/blog.ziaway.ca/wp-content/uploads/2020/10/courtier-1-460x307.png',
      title: `
      Sell ​​alone or with a real estate broker?`,
      time: 'January 4, 2021',
      badgeText: 'SELL ​​YOUR PROPERTY',
    },
    {
      link: '/',
      image:
        'https://i1.wp.com/blog.ziaway.ca/wp-content/uploads/2020/10/maison-a-vendre-460x238.png',
      title: 'Buying a house, how much does it really cost?',
      time: 'January 4, 2021',
      badgeText: 'PREPARATION OF THE REAL ESTATE PROJECT',
    },
  ];
  return (
    <section id={id} className='section-four bg-white py-5'>
      <Container>
        <div className='mb-3 text-center'>
          <h5 className='text-primary title-hover'>OUR BLOG</h5>
          <h1 className='font-weight-bold display-5'>Latest Articles</h1>
        </div>
        <Row className='justify-content-around'>
          {items.map((value) => (
            <Col md={5} lg={4} className='mb-4'>
              <div className='card'>
                <a href={value.link}>
                  <div className='position-relative'>
                    <img
                      height={250}
                      className='rounded-top-card'
                      src={value.image}
                      alt='image'
                    />
                    <span
                      className='badge badge-light p-2 rounded-pill text-white  position-absolute m-3'
                      style={{ right: 0 }}
                    >
                      {value.badgeText}
                    </span>
                  </div>
                  <div className='p-4'>
                    <h4 className='font-weight-bold my-3'>{value.title}</h4>
                    <a href={value.link}>
                      <small>READ MORE "</small>
                    </a>
                  </div>
                  <div className='py-2 px-4 border-top'>
                    <span className='text-black-50 small'>{value.time}</span>
                  </div>
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
