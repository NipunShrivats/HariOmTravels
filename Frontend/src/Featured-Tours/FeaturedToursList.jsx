import React from "react";
import TourCard from "../Shared/TourCard";
import tourData from "../../src/assets/data/tours";
import { Col } from "reactstrap";

export default function FeaturedToursList() {
  return (
    <>
      {tourData?.map((tour) => (
        <Col lg="3" className="mb-4" key={tour.id}>
          <TourCard tour={tour} />
        </Col>
      ))}
    </>
  );
}
