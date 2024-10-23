import React from "react";
import "./SearchBar.css";
import { Col, Form, FormGroup } from "reactstrap";

export default function SearchBar() {
  return (
    <>
      <Col lg="12">
        <div className="search_bar">
          <Form className="d-flex align-items-center gap-4">
            <FormGroup className="d-flex gap-3 form_group form_group_fast">
              <span>
                <i class="ri-map-pin-line"></i>
              </span>
              <div>
                <h6>Location</h6>
                <input type="text" placeholder="Where are you going?" />
              </div>
            </FormGroup>
            <FormGroup className="d-flex gap-3 form_group form_group_fast">
              <span>
                <i class="ri-map-pin-time-line"></i>
              </span>
              <div>
                <h6>Distance</h6>
                <input type="number" placeholder="Distance Km" />
              </div>
            </FormGroup>
            <FormGroup className="d-flex gap-3 form_group form_group_fast">
              <span>
                <i class="ri-group-line"></i>
              </span>
              <div>
                <h6>Max People</h6>
                <input type="number" placeholder="0" />
              </div>
            </FormGroup>
          </Form>
        </div>
      </Col>
    </>
  );
}
