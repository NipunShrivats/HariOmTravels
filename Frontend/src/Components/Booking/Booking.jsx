import React from "react";
import "./Booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";

export default function Booking({ tour, avgRating }) {
  const { price, reviews } = tour;
  const handleChange = (e) => {};
  return (
    <>
      <div className="booking">
        <div className="booking_top d-flex align-items-center justify-content-between">
          <h3>
            ${price}
            <span>/per person</span>
          </h3>
          <span className="tour_location d-flex align-items-center gap-1">
            <i
              className="ri-star-fill"
              style={{ color: "var(--secondary-color)" }}
            ></i>
            {avgRating} <span>({reviews.length})</span>
          </span>
        </div>
        {/* booking form */}
        <div className="booking_form">
          <h5>Information</h5>
          <Form className="booking_info-form">
            <FormGroup>
              <input
                type="text"
                placeholder="Full Name"
                id="fullName"
                required
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <input
                type="number"
                placeholder="Phone"
                id="phone"
                required
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup className="d-flex align-items-center gap-3">
              <input
                type="date"
                placeholder=""
                id="bookAt"
                required
                onChange={handleChange}
              />
              <input
                type="number"
                placeholder="No. of guests"
                id="guestSize"
                required
                onChange={handleChange}
              />
            </FormGroup>
          </Form>
        </div>
        {/* booking form */}
      </div>
    </>
  );
}
