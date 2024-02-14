import React, { useState } from "react";
import classes from "./Carousel.module.css";
import film1 from "../../assets/maxresdefault.jpg";
import film2 from "../../assets/MCDBARB_WB055.webp";
import film3 from "../../assets/back-to-the-future-lloyd-michael-j-fox.jpeg";
import film4 from "../../assets/The-Godfather.webp";
import { carouselFilmData } from "../../data/filmData";

const filmList = [film1, film2, film3, film4];

function Carousel() {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
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
          <div
            key={i}
            className={`${classes.slide} ${
              slideIndex === i && classes.activeSlide
            } ${slideIndex - i === 1 && classes.prevSlide} ${
              slideIndex - i === -3 && classes.prevSlide
            }`}
          >
            <img className={classes.slideImg} src={img} alt="film scene" />
            <div className={`${classes.filmInfo}`}>
              <div className={classes.poster}>
                <img src={carouselFilmData[i].Poster} alt="poster" />
              </div>
              <div className={classes.info}>
                <h2>{carouselFilmData[i].Title}</h2>
                <p>{carouselFilmData[i].Year}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;