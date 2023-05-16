import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap'
import '../Footer/footer.css'
import footerImg from '../../asset/mlogo.png'

const footerQuickLink =[
  {
    display : 'Beranda',
    url: '#'
  },

  {
    display : 'Edukasi',
    url: '#'
  },

  {
    display : 'Artikel',
    url: '#'
  },

  {
    display : 'Layanan',
    url: '#'
  }
]
const footerInfoLink =[
  {
    display : 'Privacy Policy',
    url: '#'
  },

  {
    display : 'Membership',
    url: '#'
  },

  {
    display : 'Purchases Guide',
    url: '#'
  },

  {
    display : 'Terms and Services',
    url: '#'
  }
]

const Footer = () => {
  return <footer >
    <Container>
      <Row className='footer'>
        <Col lg='3'>
          <div className="logo__footer">
            <div className='footer__logo d-flex'>
              <img src={footerImg} alt="" className='logoImg'/>
              <h4>Hafy</h4>
            </div>
            <div className="footer__address">
              <p>Jl. ZA. Pagar Alam No.9 -11, Labuhan Ratu, 
                  Kec. Kedaton, Kota Bandar Lampung, 
                  Lampung 35132</p>
            </div>
          </div>
        </Col>

        <Col lg='3' className='link'>
          <h5>Permalink</h5>
          <ListGroup className='link__list'>
            {
              footerQuickLink.map((item,index)=>(
                <ListGroupItem key={index} className='link__item' ><a href={item.url}>{item.display}</a></ListGroupItem>
              ))
            }
          </ListGroup>
        </Col>

        <Col lg='3' >
          <div class="footer__3">
                  <h5>Contact Us</h5>
                  <div>
                      <p>+62 812 432 4413</p>
                      <p>happy_familly@gmail.com</p>
                  </div>

                  <ul class="footer__socials">
                    <span d-flex align-item-center><a href="facebook.com"><i class="uil uil-facebook-f"></i></a></span>
                    <span d-flex align-item-center><a href="instagram.com"><i class="uil uil-instagram-alt"></i></a></span>
                    <span d-flex align-item-center><a href="twitter.com"><i class="uil uil-twitter"></i></a></span>
                    <span d-flex align-item-center><a href="linkedin.com"><i class="uil uil-linkedin-alt"></i></a></span>
                </ul>
          </div>
        </Col>

        <Col lg='3' className='link'>
        <h5 >Information</h5>
          <ListGroup className='link__list'>
            {
              footerInfoLink.map((item,index)=>(
                <ListGroupItem key={index} className='link__item'><a href={item.url}>{item.display}</a></ListGroupItem>
              ))
            }
          </ListGroup>
        </Col>
      </Row>
      <Row>
      <div class="footer__copyright">
            <small>Copyright &copy; HaFy HappyFamilly</small>
        </div>
      </Row>
    </Container>
  </footer>
}

export default Footer