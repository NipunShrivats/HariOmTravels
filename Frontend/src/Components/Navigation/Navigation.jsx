import React from "react";
import "./Navigation.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <>
      <nav className="main-nav">
        {/* logo left */}
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        {/* menu right1 */}
        <div className="menu-links-1">
          <ul>
            <Link to={"#"}>
              <li>Home</li>
            </Link>
            <Link to={"#"}>
              <li>About</li>
            </Link>
            <Link to={"#"}>
              <li>Services</li>
            </Link>
            <Link to={"#"}>
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        {/* menu right1 */}
        <div className="menu-links-2">
          <ul>
            <Link to={"#"}>
              <li>Login</li>
            </Link>
            <Link to={"#"}>
              <li>Register</li>
            </Link>
          </ul>
        </div>
        <div className="hamburder-icon">
          <span className="line">
            <i className="ri-menu-line"></i>
          </span>
        </div>
      </nav>
    </>
  );
}
