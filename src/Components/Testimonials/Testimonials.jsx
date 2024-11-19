import React from "react";
import Slider from "react-slick";
import ava1 from "../../assets/images/ava-1.jpg";
import ava2 from "../../assets/images/ava-2.jpg";
import ava3 from "../../assets/images/ava-3.jpg";

import "./Testimonials.css";

function TestimonialCard(props) {
  const { data, img, name } = props;
  return (
    <div className="testimonial py-4 px-3">
      <p>{data}</p>
      <div className="d-flex align-items-denter gap-4 mt-3">
        <img src={img} className="w-25 h-25 rounded-2" alt="" />
        <div>
          <h5 className="mb-0 mt-3">{name}</h5>
          <p>Customer</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          SlidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          SlidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {/* 1 */}
        <TestimonialCard
          data={`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam,
            amet debitis, aliquid eaque optio, ut cum fuga suscipit pariatur
            praesentium consequatur adipisci est nihil. Velit rerum tempore
            eligendi deserunt adipisci?`}
          img={ava1}
          name={"John Doe"}
        />
        {/* 2 */}
        <TestimonialCard
          data={`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam,
            amet debitis, aliquid eaque optio, ut cum fuga suscipit pariatur
            praesentium consequatur adipisci est nihil. Velit rerum tempore
            eligendi deserunt adipisci?`}
          img={ava2}
          name={"John Doe"}
        />
        {/* 3 */}
        <TestimonialCard
          data={`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam,
            amet debitis, aliquid eaque optio, ut cum fuga suscipit pariatur
            praesentium consequatur adipisci est nihil. Velit rerum tempore
            eligendi deserunt adipisci?`}
          img={ava3}
          name={"John Doe"}
        />
        {/* 1 */}
        <TestimonialCard
          data={`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam,
            amet debitis, aliquid eaque optio, ut cum fuga suscipit pariatur
            praesentium consequatur adipisci est nihil. Velit rerum tempore
            eligendi deserunt adipisci?`}
          img={ava1}
          name={"John Doe"}
        />
        {/* 2 */}
        <TestimonialCard
          data={`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam,
            amet debitis, aliquid eaque optio, ut cum fuga suscipit pariatur
            praesentium consequatur adipisci est nihil. Velit rerum tempore
            eligendi deserunt adipisci?`}
          img={ava2}
          name={"John Doe"}
        />
        {/* 3 */}
        <TestimonialCard
          data={`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam,
            amet debitis, aliquid eaque optio, ut cum fuga suscipit pariatur
            praesentium consequatur adipisci est nihil. Velit rerum tempore
            eligendi deserunt adipisci?`}
          img={ava3}
          name={"John Doe"}
        />
      </Slider>
    </>
  );
}
