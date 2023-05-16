import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './fitur.css';
import courseImg1 from '../../asset/mlogo.png';
import { Link } from 'react-router-dom';

const Fitur = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col className='fitur_container'>
            <div className='fitures'>
              <h2>Fitur Layanan Pernikahan</h2>
              <p>"Fitur pernikahan yang inovatif untuk membantu pengguna dalam menjalani persiapan pernikahan dan membuat momen spesial mereka menjadi lebih indah. <br/>
              Kami menyediakan berbagai informasi dan saran terkait topik pernikahan, mulai dari inspirasi dekorasi, tren busana pengantin, hingga tips perencanaan acara yang tak terlupakan."</p>
            </div>

            <div className="single__fitur__item">
              <div className="fitur__container">
                <div className="fitur__img">
                  <Link to='./chatAhli'>
                    <img src={courseImg1} alt="" />
                  </Link>
                </div>
                <p className='fitur__title'>Layanan Chat <br /> Ahli</p>
              </div>

              <div className="fitur__container">
                <div className="fitur__img">
                  <Link to='./rekomendasiTanggal'>
                    <img src={courseImg1} alt="" />
                  </Link>
                </div>
                <p className='fitur__title'>Kalender <br /> Cantik</p>
              </div>

              <div className="fitur__container">
                <div className="fitur__img">
                  <Link to='./weddingPlans'>
                    <img src={courseImg1} alt="" />
                  </Link>
                </div>
                <p className='fitur__title'>Wedding <br /> Plans</p>
              </div>

              <div className="fitur__container">
                <div className="fitur__img">
                  <Link to='./alurPengaduan'>
                    <img src={courseImg1} alt="" />
                  </Link>
                </div>
                <p className='fitur__title'>Alur Pengaduan <br /> KDRT</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Fitur;
