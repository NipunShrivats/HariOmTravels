import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import "./Register.css";
import { Link } from "react-router-dom";

import RegisterImg from "../../assets/images/Register.png";
import userIcon from "../../assets/images/user.png";

export default function Register() {
  const [credentials, setCredentials] = useState({
    fullname: undefined,
    phoneno: undefined,
    email: undefined,
    password: undefined,
  });

  // targeting id and there values from forms
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    // console.log(credentials);
  };

  return (
    <section className="section">
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login_container d-flex justify-content-between align-items-center">
              <div className="login_img">
                <img src={RegisterImg} alt="" />
              </div>

              <div className="login_form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Register</h2>
                <Form onSubmit={handleClick}>
                  <FormGroup className="FormGroup">
                    <input
                      type="text"
                      placeholder="Full Name"
                      required
                      id="fullname"
                      onChange={handleChange}
                    />
                    <input
                      type="number"
                      placeholder="Phone no."
                      required
                      id="phoneno"
                      onChange={handleChange}
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      id="email"
                      onChange={handleChange}
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      id="password"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <button className="btn auth_btn" type="submit">
                    Register
                  </button>
                </Form>
                <p>
                  Already have an account?
                  <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
