import React from "react";
import ServiceCard from "./ServiceCard";
import { col } from "reactstrap";

import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const serviceData = [
  {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

export default function ServiceList() {
  return (
    <>
      {serviceData.map((item, index) => (
        <col lg="3" key={index}></col>
      ))}
    </>
  );
}
