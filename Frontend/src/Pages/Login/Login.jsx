import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import "./Login.css";
import { Link } from "react-router-dom";

import Img from "../../assets/images/Register.png";
import userIcon from "../../assets/images/user.png";

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  // targeting id and there values from forms
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(credentials);
  };

  return (
    <section className="py-0 d-flex align-items-center justify-content-center section">
      <Container className="">
        <Row className="d-flex align-items-center justify-content-center ">
          <Col lg="8">
            <div className="login_container d-flex justify-content-between align-items-center ">
              <div className="login_img">
                <img src={Img} alt="" />
              </div>

              <div className="login_form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Login</h2>
                <Form onSubmit={handleClick}>
                  <FormGroup className="FormGroup">
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
                    Login
                  </button>
                </Form>
                <p>
                  Don't have an account?
                  <Link to="/register">Create</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
