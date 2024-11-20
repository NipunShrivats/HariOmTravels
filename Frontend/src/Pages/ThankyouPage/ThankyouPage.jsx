import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./ThankyouPage.css";

import Newsletter from "../../Shared/NewsLetter";

export default function ThankyouPage() {
  return (
    <>
      <section className="thankyou-box-main d-flex align-items-center justify-content-center">
        <Container className="">
          <Row>
            <Col lg="12" className="text-center">
              <div className="thank_you">
                <span>
                  <i class="ri-checkbox-circle-line"></i>
                  <h1 className="mb3 fw-semibold">thank you</h1>
                  <h3 className="mb-4">your tour is booked</h3>
                  <button className="btn primary_btn">
                    <Link to={"/home"}>Back to Home</Link>
                  </button>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
}
