import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import heroImg01 from "../../assets/images/hero-img01.jpg";
import heroImg02 from "../../assets/images/hero-img02.jpg";
import heroVideo from "../../assets/images/hero-video.mp4";
import experinceImg from "../../assets/images/experience.png";

import Subtitle from "../../Shared/Subtitle";

import worldImg from "../../assets/images/world.png";
// import SearchBar from "../../Shared/SearchBar";
import ServiceList from "../../Services/ServiceList";
import FeaturedTourList from "../../Featured-Tours/FeaturedTourList";
import MasonryImagesGallery from "../../Components/ImageGallery/MasonryImagesGallery";
import Testimonials from "../../Components/Testimonials/Testimonials";
import NewsLetter from "../../Shared/NewsLetter";

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
                  Traveling opens the doors for creating <br />
                  <span className="highlight">Memories</span>
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
          </Row>
          {/* <SearchBar /> */}
        </Container>
      </section>
      {/* -------- What we serve section start -------- */}
      <section>
        <Container className="">
          <Row>
            <Col lg="3">
              <Subtitle subtitle="What we serve" />
              <h2 className="services_title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
      {/* -------- What we serve section end -------- */}
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
      {/* -------- featured tour section end -------- */}
      {/* -------- experiernce section start -------- */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience_content">
                <Subtitle subtitle="Experience"></Subtitle>
                <h2>
                  With our all experience <br />
                  we will serve you
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem
                  <br />
                  ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>

              <div className="counter_wrapper d-flex align-items-center gap-5">
                <div className="counter_box">
                  <span>12k+</span>
                  <h6>Successful trips</h6>
                </div>
                <div className="counter_box">
                  <span>2k+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter_box">
                  <span>15+</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience_img">
                <img src={experinceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* -------- experiernce section end -------- */}
      {/* -------- gallery section start -------- */}

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery_title">
                Visit our customers tour gallery
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/* -------- gallery section end -------- */}
      {/* -------- testimonial section start -------- */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Testimonials"}></Subtitle>
              <h2 className="testimonial_title">
                What our customers say about us?
              </h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
      {/* -------- testimonial section end -------- */}
      <NewsLetter />
    </>
  );
}
