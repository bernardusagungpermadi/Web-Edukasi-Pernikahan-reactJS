import React from 'react'
import './about.css'
import { Container, Row, Col } from 'reactstrap'
import aboutImg from '../../asset/Free Photo _ Senior couple waving their hands during online video call on laptop.png'
import CountUp from 'react-countup'
import './about.css'

const About = () => {
  return <section>
    <Container>
        <Row className='row__container'>
            <Col lg='6' md='6'>
                <div className="about__img">
                    <img src={aboutImg} alt="" className='w-100'/>
                </div>
            </Col>

            <Col lg='6' md='6'>
                <div className="about__content">
                    <h2>About Us</h2>
                    <p>Memberikan layanan edukasi berupa vidio pembelajaran, artikel dan informasi terkait pernikahan dan seputar rumah tangga.
                    </p>

                    <div className="counter__container">
                    <div className="d-flex gap-5 align-item-center">
                        <div className="about__counter d-flex">
                            <div className="single__counter">
                                <span className='counter'>
                                    <CountUp start={0} end={2} duration={2} suffix='<i class="uil uil-user"></i>'></CountUp>
                                </span>
                                <p className="counter__title">Pengguna
                                </p>
                            </div>

                            <div className="single__counter">
                                <span className='counter'>
                                    <CountUp start={0} end={22} duration={2} suffix='<i class="uil uil-analysis"></i>'/>
                                </span>
                                <p className="counter__title">Course
                                </p>
                            </div>

                            <div className="single__counter">
                                <span className='counter'>
                                    <CountUp start={0} end={2} duration={2} suffix='<i class="uil uil-users-alt"></i>'/>
                                </span>
                                <p className="counter__title">Artikel
                                </p>
                            </div>

                            <div className="single__counter">
                                <span className='counter'>
                                    <CountUp start={0} end={22} duration={2} suffix='<i class="uil uil-eye"></i>'/>
                                </span>
                                <p className="counter__title">Semua
                                </p>
                            </div>
                        </div>
                    </div>

                    
                    </div>
                </div>

            </Col>
        </Row>
    </Container>
  </section>
}

export default About