import React, {useRef} from 'react'
import { Container } from 'reactstrap';
import './header.css';


const navLinks = [
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

const Header = () => {

  const menuRef = useRef()
  const menuToggle = () => menuRef.current.classList.toggle('active__menu')
  return <section className='navigation'>
    <Container >
      <div className="navbar">
        <div className="logo">
          <h2 >HAFY</h2>
        </div>

        <div className="nav">
          <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
            <ul className="nav__list">

              {
                navLinks.map((item,index)=>(
                  <li key={index} className='nav__item'>
                    <a href={item.url}>{item.display}</a>
                  </li>

                ))
              }
              <a href="<Edukasi/>" class="login__button">LOGIN</a>
            </ul>
          </div>
          <div className='nav__right' >
            <div className='toggle-btn' d-flex>
            <span>
              <i class="uil uil-bars" onClick={menuToggle}></i>
            </span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
}

export default Header