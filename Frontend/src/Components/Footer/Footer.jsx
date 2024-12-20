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
  const CurrentYear = new Date().getFullYear();
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
                      <i className="ri-youtube-line"></i>
                    </Link>
                  </span>
                  <span>
                    <Link to="">
                      <i className="ri-facebook-box-line"></i>
                    </Link>
                  </span>
                  <span>
                    <Link to="">
                      <i className="ri-instagram-line"></i>
                    </Link>
                  </span>
                  <span>
                    <Link to="">
                      <i className="ri-twitter-line"></i>
                    </Link>
                  </span>
                  <span>
                    <Link to="">
                      <i className="ri-github-fill"></i>
                    </Link>
                  </span>
                </div>
              </div>
            </Col>
            <Col lg="3">
              <h5 className="footer_link-title">Discover</h5>
              <ListGroup className="footer_quick-links">
                {quick_links1.map((item, index) => (
                  <ListGroupItem key={index} className="ps-0 border-0">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>
            <Col lg="3">
              <h5 className="footer_link-title">Quick Links</h5>
              <ListGroup className="footer_quick-links">
                {quick_links2.map((item, index) => (
                  <ListGroupItem key={index} className="ps-0 border-0">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>
            <Col lg="3">
              <h5 className="footer_link-title">Contact</h5>
              <ListGroup className="footer_quick-links">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                  <h6 className="mb-0 d-flex align-items-center gap-2">
                    <span>
                      <i className="ri-map-pin-line"></i>
                    </span>
                    Address:
                  </h6>
                  <p className="mb-0">New Delhi, India</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                  <h6 className="mb-0 d-flex align-items-center gap-2">
                    <span>
                      <i className="ri-phone-line"></i>
                    </span>
                    Phone:
                  </h6>
                  <p className="mb-0">+91-9876543219</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                  <h6 className="mb-0 d-flex align-items-center gap-2">
                    <span>
                      <i className="ri-mail-send-line"></i>
                    </span>
                    Email:
                  </h6>
                  <p className="mb-0">123@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </Container>
        <Col lg="12" className="copyright-bar">
          <p className="copyright">
            Copyright © {CurrentYear} | HariOm Travels Pvt. Ltd. | All rights
            reserved{" "}
          </p>
          <p className="devdata">
            Made with ❤️ by
            <Link
              to={"https://github.com/NipunShrivats?tab=repositories"}
              target="_blank"
            >
              <span className="developer">
                <i className="ri-github-fill"></i>
              </span>
            </Link>
          </p>
        </Col>
      </footer>
    </>
  );
}
