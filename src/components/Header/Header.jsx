import React, { useRef } from 'react';
import { Container } from 'reactstrap';
import './header.css';
import '../Dashboard-Admin/top-nav.css';
import logoImg from '../../asset/mlogo.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, reset } from '../../feature/authSlice';

const navLinks = [
  {
    display: 'Beranda',
    url: '/'
  },
  {
    display: 'Edukasi',
    url: '/Edukasi'
  },
  {
    display: 'Artikel',
    url: '/Artikel'
  },
  {
    display: 'Layanan',
    url: '/Layanan'
  }
];

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const menuRef = useRef();
  const location = useLocation();

  const logout = () => {
    dispatch(logOut());
    dispatch(reset());
    navigate('/');
  };

  const { user } = useSelector((state) => state.auth);

  const menuToggle = () => {
    menuRef.current.classList.toggle('active__menu');
  };

  return (
    <nav className="navigation">
      <Container>
        <div className="navbar">
          <div className="logo">
            <img src={logoImg} alt="" className="logo-img" />
            <h4>Happy Familly</h4>
          </div>

          <div className="nav">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className={`nav__item ${location.pathname === item.url ? 'active' : ''}`}>
                    <Link to={item.url}>{item.display}</Link>
                  </li>
                ))}

                {user && user.role === 'user' ? (
                  <div className="top__nav-right">
                    <span className="notification" onClick={logout}>
                      <i className="uil uil-sign-out-alt"></i>
                    </span>

                    <div className="sapa">
                      <p>
                        Hi, <strong>{user && user.name}</strong>
                      </p>
                    </div>
                  </div>
                ) : (
                  <div>
                    <Link to="/Login" className="login__button">
                      LOGIN
                    </Link>
                  </div>
                )}
              </ul>
            </div>

            <div className="nav__right">
              <div className="toggle-btn">
                <span>
                  <i className="uil uil-bars" onClick={menuToggle}></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Header;
