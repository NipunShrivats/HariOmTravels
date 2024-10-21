import React from "react";
import "./Header.css";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const nav_links = [
  {
    path: "./home",
    display: "Home",
  },
  {
    path: "#",
    display: "About",
  },
  {
    path: "./tours",
    display: "Tours",
  },
];

export default function Header() {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav_wrapper d-flex align-items-center justify-content-between">
            <div className="logo">
              <img src={logo} alt="" />
            </div>

            {/*  */}
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {nav_links.map((item, index) => {
                  return (
                    <li className="nav_link" key={index}>
                      <NavLink to={item.path}>{item.display}</NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/*  */}
            <div className="nav_right d-flex align-items-center gap-4">
              <div className="nav_btns d-flex align-items-center gap-4">
                <Button className="btn secondary_btn">
                  <Link to="/login">Login</Link>
                </Button>
                <Button className="btn secondary_btn">
                  <Link to="/Register">Register</Link>
                </Button>
              </div>
              <span className="mobile_menu">
                <i className="ri-menu-4-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
}
