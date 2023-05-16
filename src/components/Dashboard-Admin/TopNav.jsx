import React from "react";
import "./top-nav.css";
import { useSelector } from "react-redux";

const TopNav = () => {

  const {user} = useSelector((state) => state.auth);
  return (
    <div className="top__nav">
      <div className="top__nav-wrapper">
        <div className="top__nav-welcome">
          <h3>Welcome Admin</h3>
        </div>

        <div className="search__box">
          <input type="text" placeholder="search or type" />
          <span>
          <i class="uil uil-search"></i>
          </span>
        </div>

        <div className="top__nav-right">
          <span className="notification">
            <i class="uil uil-user-circle"></i>
          </span>

          <div className="sapa">
            <p>Hi, <strong>{user && user.name}</strong></p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default TopNav;