import { React, useRef } from "react";
import "./SearchBar.css";
import { Col, Form, FormGroup } from "reactstrap";

export default function SearchBar() {
  const locationRef = useRef("");
  const distanceRef = useRef(0);
  const maxGroupSizeRef = useRef(0);

  const searchHandler = () => {
    const location = locationRef.current.value;
    const distance = distanceRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;

    if (location === "" || distance === "" || maxGroupSize === "") {
      return alert("All fields are required");
    }
  };

  return (
    <>
      <Col lg="12" className="search-box">
        <div className="search_bar">
          <Form className="form-box">
            <FormGroup className="d-flex gap-3 form_group form_group_fast ">
              <span>
                <i className="ri-map-pin-line"></i>
              </span>
              <div>
                <h6>Location</h6>
                <input
                  type="text"
                  placeholder="Where are you going?"
                  ref={locationRef}
                />
              </div>
            </FormGroup>
            <FormGroup className="d-flex gap-3 form_group form_group_fast ">
              <span>
                <i className="ri-map-pin-time-line"></i>
              </span>
              <div>
                <h6>Distance</h6>
                <input
                  type="number"
                  placeholder="Distance Km"
                  ref={distanceRef}
                />
              </div>
            </FormGroup>
            <FormGroup className="d-flex gap-3 form_group form_group_fast ">
              <span>
                <i className="ri-group-line"></i>
              </span>
              <div>
                <h6>Max People</h6>
                <input type="number" placeholder="0" ref={maxGroupSizeRef} />
              </div>
            </FormGroup>
            <span className="search_icon" type="submit" onClick={searchHandler}>
              <i className="ri-search-line"></i>
            </span>
          </Form>
        </div>
      </Col>
    </>
  );
}
