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
  const [page, setPage] = useState(0);

  useEffect(() => {
    const pages = Math.ceil(5 / 4);
    SetPageCount(pages);
  }, [page]);
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
          <Row className="">
            {tourData?.map((tour) => (
              <Col lg="3" className="mb-4" key={tour.id}>
                <TourCard tour={tour} />
              </Col>
            ))}
            <Col lg="12" className="mt-4 mb-2">
              <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                {[...Array(pageCount).keys()].map((number) => (
                  <span
                    key={number}
                    onClick={() => setPage(number)}
                    className={page === number ? "active_page" : ""}
                  >
                    {number + 1}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <NewsLetter />
    </>
  );
}
