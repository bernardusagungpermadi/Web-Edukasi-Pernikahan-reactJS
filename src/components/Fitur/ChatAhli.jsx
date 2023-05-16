import React from 'react';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs.jsx';
import { Container, Row, Col } from 'reactstrap';
import ahliImg from '../../asset/Download People Working On Project On Laptop for free.png';

const ChatAhli = () => {
  return (
    <Container>
      <div className='breadcrumbs'>
        <Breadcrumbs />
      </div>
        
      <section className='chatAhli'>
        <div>
          <h4>Rekomendasi Ahli</h4>
          <p>Konsultasi Keluhan dan Pengaduan Anda</p>
        </div>

        <Row>
          <Col xs='6' className='ahli-item'>
            <div className='ahli-img'>
              <img src={ahliImg} alt='' />
            </div>
            <div className='ahli-title'>
              <h5>Dr. Safira Hamida</h5>
              <p>Dokter Psikolog</p>
                <button className="chat-btn">
                    <a href="https://wa.me/628973513062" target="_blank" rel="noopener noreferrer">
                    Chat
                    </a>
                </button>
            </div>
            
          </Col>
          <Col xs='6' className='ahli-item'>
            <div className='ahli-img'>
              <img src={ahliImg} alt='' />
            </div>
            <div className='ahli-title'>
              <h5>Dr. John Doe</h5>
              <p>Ahli Hukum</p>
              <button className="chat-btn">
                    <a href="https://wa.me/628973513062" target="_blank" rel="noopener noreferrer">
                    Chat
                    </a>
                </button>
            </div>
            
          </Col>
        </Row>
      </section>
    </Container>
  );
}

export default ChatAhli;
