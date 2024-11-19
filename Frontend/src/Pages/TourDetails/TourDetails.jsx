import React from "react";
import "./TourDetails.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import tourData from "../../assets/data/tours";

export default function TourDetails() {
  const { id } = useParams();

  // static for now
  const tour = tourData.find((tour) => tour.id === id);

  const { photo, title, desc, price, reviews, city, distance, maxGroupSize } =
    tour;
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <div className="tour_content">
                <img src={photo} alt="" />
                <div className="tour_info">
                  <h2>{title}</h2>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
