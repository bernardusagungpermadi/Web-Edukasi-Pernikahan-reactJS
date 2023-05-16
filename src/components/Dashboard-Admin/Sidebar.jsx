import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import navLinks from "../../asset/dummy-data/navLinks";
import "./sidebar.css";
import "../../App.css"
import ImgLogo from '../../asset/mlogo.png'
import { useDispatch} from "react-redux";
import { logOut , reset } from "../../feature/authSlice";



const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const logout = () => {
    dispatch(logOut());
    dispatch(reset()); 
    navigate("/login");
  }
  
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h2>
          <span>
            <img src={ImgLogo} alt="" />
          </span>
        </h2>
      </div>

      <div className="sidebar__content">
        <div className="menu__sidebar">
          <ul className="nav__list__sidebar">
            {navLinks.map((item, index) => (
              <li className="nav__item__sidebar" key={index}>
                <NavLink
                  to={item.path}
                  className={(navClass) =>
                    navClass.isActive ? "nav__active nav__link" : "nav__link"
                  }
                >
                  <i className={item.icon}></i>

                  <a href={item.path}>{item.display}</a>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="sidebar__bottom">
          <button onClick= {logout} className="button-out">
          <i class="uil uil-signout"></i> Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;