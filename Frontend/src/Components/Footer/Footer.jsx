import React from "react";
import "./Footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const quick_links1 = [
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
const quick_links2 = [
  {
    path: "./gallery",
    display: "Gallery",
  },
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "./register",
    display: "Register",
  },
];

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <Container>
          <Row>
            <Col lg="3">
              <div className="logo">
                <img src={logo} alt="" />
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Corrupti, dolorum!
                </p>
                <div className="social_links d-flex align-items-center gap-4">
                  <span>
                    <Link to="">
                      <i class="ri-youtube-line"></i>
                    </Link>
                  </span>
                  <span>
                    <Link to="">
                      <i class="ri-facebook-box-line"></i>
                    </Link>
                  </span>
                  <span>
                    <Link to="">
                      <i class="ri-instagram-line"></i>
                    </Link>
                  </span>
                  <span>
                    <Link to="">
                      <i class="ri-twitter-line"></i>
                    </Link>
                  </span>
                  <span>
                    <Link to="">
                      <i class="ri-github-fill"></i>
                    </Link>
                  </span>
                </div>
              </div>
            </Col>
            <Col lg="3">
              <h5 className="footer_link-title">Discover</h5>
              <ListGroup className="footer_quick-links">
                {quick_links1.map((item, index) => (
                  <ListGroupItem key={index} className="ps-5 border-0">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>
            <Col lh="3"></Col>
            <Col lh="3"></Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
