import React from "react";
import ImageGallery from "./ImageGallery";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "./MasonryImagesGallery.css";

export default function MasonryImagesGallery() {
  return (
    <>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 992: 4 }}>
        <Masonry gutter="1rem">
          {ImageGallery.map((item, index) => (
            <img src={item} key={index} alt="" className="galleryImage" />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
}
