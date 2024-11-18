import React, { useState, useEffect } from "react";
import CommanSection from "../../Shared/CommanSection";
import { Container, Row, Col } from "reactstrap";
import "./Tours.css";

import tourData from "../../assets/data/tours";
import TourCard from "../../Shared/TourCard";
import SearchBar from "../../Shared/SearchBar";
import NewsLetter from "../../Shared/NewsLetter";

export default function Tours() {
  const [pageCount, SetPageCount] = useState(0);

  return (
    <>
      <CommanSection title={"All Tours"} />
      <section>
        <Container>
          <Row className="d-flex justify-content-center">
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className="py-0">
        <Container>
          <Row>
            {tourData?.map((tour) => (
              <Col lg="3" className="mb-4" key={tour.id}>
                <TourCard tour={tour} />
              </Col>
            ))}
            <Col lg="12"></Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
