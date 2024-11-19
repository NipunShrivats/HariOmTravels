import React from "react";
import "./CommanSection.css";
import { Container, Row, Col } from "reactstrap";

export default function CommanSection({ title }) {
  return (
    <section className="commanSection">
      <Container>
        <Row>
          <Col lg="12">
            <h1>{title}</h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
