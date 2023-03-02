import React from 'react'
import './about.css'
import { Container, Row, Col } from 'reactstrap'
import aboutImg from '../../asset/mlogo.png'
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
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Excepturi quasi odio repellendus delectus dicta veniam deleniti amet, saepe alias ex.
                    </p>

                    <div className="counter__container">
                    <div className="d-flex gap-5 align-item-center">
                        <div className="about__counter">
                            <div className="single__counter">
                                <span className='counter'>
                                    <CountUp start={0} end={2} duration={2} suffix='M'/>
                                </span>
                                <p className="counter__title">Hari
                                </p>
                            </div>

                            <div className="single__counter">
                                <span className='counter'>
                                    <CountUp start={0} end={22} duration={2} suffix='K'/>
                                </span>
                                <p className="counter__title">Bulan
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex gap-5 align-item-center">
                        <div className="about__counter">
                            <div className="single__counter">
                                <span className='counter'>
                                    <CountUp start={0} end={2} duration={2} suffix='M'/>
                                </span>
                                <p className="counter__title">Hari
                                </p>
                            </div>

                            <div className="single__counter">
                                <span className='counter'>
                                    <CountUp start={0} end={22} duration={2} suffix='K'/>
                                </span>
                                <p className="counter__title">Bulan
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