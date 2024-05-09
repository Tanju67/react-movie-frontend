import React from "react";
import Slider from "react-slick";

import SimpleSlideItem from "./SimpleSlideItem";

function SimpleSlider({ filmList, carouselFilmData }) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  return (
    <div className="slider-container ">
      <Slider {...settings}>
        {filmList.map((img, i) => (
          <SimpleSlideItem key={i} img={img} item={carouselFilmData[i]} />
        ))}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
