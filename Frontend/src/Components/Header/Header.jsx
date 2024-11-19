import React, { useRef, useEffect } from "react";
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
    path: "/about",
    display: "About",
  },
  {
    path: "./tours",
    display: "Tours",
  },
];

export default function Header() {
  const headerRef = useRef(null);
  const StickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };

  useEffect(() => {
    StickyHeaderFunc();

    return window.removeEventListener("scroll", StickyHeaderFunc);
  });
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav_wrapper d-flex align-items-center justify-content-between">
            <div className="logo">
              <Link to={"/home"}>
                <img src={logo} alt="" />
              </Link>
            </div>

            {/*  */}
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {nav_links.map((item, index) => {
                  return (
                    <li className="nav_item" key={index}>
                      <NavLink
                        className={(navClass) =>
                          navClass.isActive ? "active_link" : ""
                        }
                        to={item.path}
                      >
                        {item.display}
                      </NavLink>
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
