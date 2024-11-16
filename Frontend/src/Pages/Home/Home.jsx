import React from "react";
import "./Home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg01 from "../../assets/images/hero-img01.jpg";
import heroImg02 from "../../assets/images/hero-img02.jpg";
import heroVideo from "../../assets/images/hero-video.mp4";
import Subtitle from "../../Shared/Subtitle";
import worldImg from "../../assets/images/world.png";
import SearchBar from "../../Shared/SearchBar";
import ServiceList from "../../Services/ServiceList";
import FeaturedTourList from "../../Featured-Tours/FeaturedTourList";

export default function Home() {
  return (
    <>
      <section>
        <Container className="">
          <Row>
            <Col lg="6">
              <div className="hero_content">
                <div className="hero_subtitle d-flex align-items-center">
                  <Subtitle subtitle="Know Before You Go." />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Traveling opens the door to creating{""}
                  <span className="highlight"> memories</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus aspernatur ratione asperiores, repellat harum sunt,
                  ipsa aliquid iusto molestias ullam modi eveniet. Totam
                  eligendi dignissimos labore beatae accusamus, laboriosam quas
                  perferendis sequi.
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero_img-box">
                <img src={heroImg01} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero_img-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero_img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* --------------------------------------------- */}
      <section>
        <Container className="">
          <Row>
            <Col lg="3">
              <h5 className="services_subtitle">What we serve</h5>
              <h2 className="services_title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
      {/* -------- featured tour section start -------- */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured_tour-title">Our Featured Tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* -------- featured tour section start -------- */}
    </>
  );
}
