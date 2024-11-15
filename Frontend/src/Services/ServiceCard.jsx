import React from "react";
import "./ServiceCard.css";

export default function ServiceCard(props) {
  const { imgUrl, title, desc } = props;

  return (
    <div className="service_item">
      <div className="service_img">
        <img src={imgUrl} alt="" />
      </div>
      <h5>{title}</h5>
      <p>{desc}</p>
    </div>
  );
}
