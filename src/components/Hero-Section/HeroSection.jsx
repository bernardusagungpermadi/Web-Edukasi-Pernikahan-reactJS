import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import heroImg from '../../asset/mlogo.png'
import '../Hero-Section/herosection.css'

const HeroSection = () => {
  return  <section className='hero__section'>
    <Container>
        <Row>
            <Col lg='6' md='6'>
                <div className='hero__content'>
                    <h2 className='mb-4'>PEMBELAJARAN DAN PEDOMAN DALAM PERNIKAHAN</h2>
                        <p className='mb-4'>Edukasi Pernikahan, Gaya hidup, Pola asuh anak dan seputar rumah tangga juga 
                        pedoman bagi penyintas kekerasan dalam rumah tangga Dengan Happy Familly 
                        Keluaga Happy!
                        </p>
                        <div className="search" placeholder='Search'>
                            <input type="text" placeholder='search' />
                            <button className="btn__search">Search</button>
                        </div>
                </div>
            </Col>

            <Col lg='6' md='6'>
                <img src={heroImg} alt="" className='hero-img'/>
            </Col>
        </Row>
    </Container>
  </section>
}

export default HeroSection