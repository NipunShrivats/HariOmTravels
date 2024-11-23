import React, { useState } from "react";
import "./Booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";

import { useNavigate } from "react-router-dom";

export default function Booking({ tour, avgRating }) {
  const { price, reviews } = tour;

  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    // userId: "01",
    // userEmail: "example@gmail.com",
    // fullName: "",
    // phone: "",
    // guest: 1,
    guestSize: 1,
    // bookAt: "",
  });

  // targeting id and there values from forms
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const serviceFee = 10;
  const totalAmount =
    Number(price) * Number(credentials.guestSize) + Number(serviceFee);
  const baseAmount = Number(price) * Number(credentials.guestSize);

  const handleClick = (e) => {
    e.preventDefault();

    // console.log(credentials);
    navigate("/ThankyouPage");
  };
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
        {/* booking form start*/}
        <div className="booking_form">
          <h5>Information</h5>
          <Form className="booking_info-form" onSubmit={handleClick}>
            <FormGroup>
              <input
                type="text"
                placeholder="Full Name"
                id="fullName"
                required
                onChange={handleChange}
              />
              <input
                type="number"
                placeholder="Phone"
                id="phone"
                required
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="Email"
                required
                id="email"
                onChange={handleChange}
              />
              <div className="d-flex align-items-center gap-3">
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
              </div>
            </FormGroup>
          </Form>
        </div>
        {/* booking form end*/}

        {/* booking bottom start*/}
        <div className="booking_bottom">
          <ListGroup className="">
            <ListGroupItem className="border-0 px-0">
              <h5 className="d-flex align-items-center gap-1">
                ${price} <i className="ri-close-line"></i>
                {credentials.guestSize} (person/people)
              </h5>
              <span>${baseAmount}</span>
            </ListGroupItem>
            <ListGroupItem className="border-0 px-0">
              <h5>Service Charge</h5>
              <span>${serviceFee}</span>
            </ListGroupItem>
            <ListGroupItem className="border-0 px-0 total">
              <h5>Total Charge</h5>
              <span>${totalAmount}</span>
            </ListGroupItem>
          </ListGroup>
        </div>
        <button
          className="btn primary_btn w-100 mt-4 booking-btn"
          onClick={handleClick}
        >
          Book Now
        </button>
        {/* booking bottom end*/}
      </div>
    </>
  );
}
