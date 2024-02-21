import React, { useState } from "react";
import classes from "./Carousel.module.css";
import film1 from "../../assets/maxresdefault.jpg";
import film2 from "../../assets/MCDBARB_WB055.webp";
import film3 from "../../assets/back-to-the-future-lloyd-michael-j-fox.jpeg";
import film4 from "../../assets/The-Godfather.webp";
import { carouselFilmData } from "../../data/filmData";
import useInterval from "../../shared/hooks/useInterval";
import CarouselItem from "./CarouselItem";

const filmList = [film1, film2, film3, film4];

function Carousel() {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = async () => {
    if (slideIndex === 3) {
      setSlideIndex(0);
    } else {
      setSlideIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (slideIndex === 0) {
      setSlideIndex(3);
    } else {
      setSlideIndex((prev) => prev - 1);
    }
  };

  useInterval(() => {
    nextSlide();
  }, 5000);

  return (
    <div className={classes.carousel}>
      <div className={classes.boxCarousel}>
        <div onClick={prevSlide} className={classes.left}>
          <span> &larr; </span>
        </div>
        <div onClick={nextSlide} className={classes.right}>
          <span> &rarr; </span>
        </div>

        {filmList.map((img, i) => (
          <CarouselItem
            slideIndex={slideIndex}
            img={img}
            itemIndex={i}
            film={carouselFilmData[i]}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
