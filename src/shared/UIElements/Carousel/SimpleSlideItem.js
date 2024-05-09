import React from "react";
import classes from "./SimpleSlideItem.module.css";
import { NavLink } from "react-router-dom";

function SimpleSlideItem({ item, img }) {
  return (
    <div className={`${classes.slide} `}>
      <img className={classes.slideImg} src={img} alt="film scene" />

      <div className={`${classes.filmInfo}`}>
        <div className={classes.poster}>
          <img src={item.Poster} alt="poster" />
        </div>
        <NavLink to={`/${item.imdbID}`} className={classes.info}>
          <h2>{item.Title}</h2>
          <p>{item.Year}</p>
        </NavLink>
      </div>
    </div>
  );
}

export default SimpleSlideItem;
