import React from "react";
import classes from "./CarouselItem.module.css";
import { NavLink } from "react-router-dom";

function CarouselItem({ slideIndex, itemIndex, img, film }) {
  return (
    <div
      className={`${classes.slide} ${
        slideIndex === itemIndex && classes.activeSlide
      } ${slideIndex - itemIndex === 1 && classes.prevSlide} ${
        slideIndex - itemIndex === -3 && classes.prevSlide
      }`}
    >
      <img className={classes.slideImg} src={img} alt="film scene" />
      <div className={`${classes.filmInfo}`}>
        <div className={classes.poster}>
          <img src={film.Poster} alt="poster" />
        </div>
        <NavLink to={`/${film.imdbID}`} className={classes.info}>
          <h2>{film.Title}</h2>
          <p>{film.Year}</p>
        </NavLink>
      </div>
    </div>
  );
}

export default CarouselItem;
