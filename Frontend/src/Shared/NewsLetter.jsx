import React from "react";
import { Container, Row, Col } from "reactstrap";
import maleTourist from "../assets/images/male-tourist.png";

import "./NewsLetter.css";

export default function NewsLetter() {
  return (
    <>
      <section className="newsletter">
        <Container>
          <Row>
            <Col lg="6">
              <div className="newsletter_content">
                <h2>Subscribe now to get useful traveling information.</h2>
              </div>
              <div className="newsletter_input">
                <input type="email" placeholder="Enter your email" />
                <button className="btn newsletter_btn">Subscribe</button>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </Col>
            <Col lg="6">
              <div className="newsletter_img">
                <img src={maleTourist} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
