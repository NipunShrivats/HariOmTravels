import { React, useRef, useState } from "react";
import "./TourDetails.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import tourData from "../../assets/data/tours";
import avatar from "../../assets/images/avatar.jpg";

export default function TourDetails() {
  const { id } = useParams("");
  const reviewMsgRef = useRef("");
  const [tourRating, setTourRating] = useState();

  // static for now
  const tour = tourData.find((tour) => tour.id === id);
  // date fromat
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  // submit request
  const sumbithandler = (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;
    alert(`${reviewText}, ${tourRating}`);
  };

  const {
    address,
    photo,
    title,
    desc,
    price,
    reviews,
    city,
    distance,
    maxGroupSize,
    avgRating,
  } = tour;
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <div className="tour_content">
                <img src={photo} alt="" />
                <div className="tour_info">
                  <h2>{title}</h2>

                  <div className="d-flex align-items-center gap-5">
                    <span className="tour_location d-flex align-items-center gap-1">
                      <i
                        className="ri-star-fill"
                        style={{ color: "var(--secondary-color)" }}
                      ></i>
                      {avgRating} <span>({reviews.length})</span>
                    </span>

                    <span>
                      <i class="ri-map-pin-fill"></i>
                      {address}
                    </span>
                  </div>
                  <div className="tour_extra-details">
                    <span>
                      <i class="ri-map-pin-2-line"></i>
                      {city}
                    </span>
                    <span>
                      <i class="ri-money-dollar-circle-line"></i>${price}/- per
                      person
                    </span>
                    <span>
                      <i class="ri-pin-distance-line"></i>
                      {distance} Km
                    </span>
                    <span>
                      <i class="ri-group-line"></i>
                      {maxGroupSize} people
                    </span>
                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>
                {/* ------------------ tour review section start ------------------*/}
                <div className="tour_reviews mt-4">
                  <h4>Reviews({reviews?.length}reviews)</h4>
                  <Form onSubmit={sumbithandler}>
                    <div className="d-flex align-items-center gap-3 mb-4 rating_group">
                      <span onClick={() => setTourRating(1)}>
                        1 <i class="ri-star-fill"></i>
                      </span>
                      <span onClick={() => setTourRating(2)}>
                        2 <i class="ri-star-fill"></i>
                      </span>
                      <span onClick={() => setTourRating(3)}>
                        3 <i class="ri-star-fill"></i>
                      </span>
                      <span onClick={() => setTourRating(4)}>
                        4 <i class="ri-star-fill"></i>
                      </span>
                      <span onClick={() => setTourRating(5)}>
                        5 <i class="ri-star-fill"></i>
                      </span>
                    </div>

                    <div className="review_input">
                      <input
                        type="text"
                        ref={reviewMsgRef}
                        placeholder="share your thoughts"
                        required
                      />
                      <button className="btn primary_btn" type="submit">
                        Submit
                      </button>
                    </div>
                  </Form>

                  <ListGroup className="user_reviews">
                    {reviews?.map((review) => (
                      <div className="review_item">
                        <img src={avatar} alt="" />
                        <div className="w-100">
                          <div className="d-flex align-items-center justify-content-between">
                            <div>
                              <h5>{review.name}</h5>
                              <p>
                                {new Date("01-18-2023").toLocaleDateString(
                                  "en-US",
                                  options
                                )}
                              </p>
                            </div>
                            <span className="d-flex align-items-center">
                              <i class="ri-star-fill"></i>
                              {review.rating}
                            </span>
                          </div>
                          <h6>Amazong tour</h6>
                        </div>
                      </div>
                    ))}
                  </ListGroup>
                </div>
                {/* ------------------ tour review section end ------------------*/}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
