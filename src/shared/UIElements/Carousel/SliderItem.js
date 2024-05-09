import React from "react";
import classes from "./SliderItem.module.css";
import { NavLink } from "react-router-dom";

function SliderItem({ item, i }) {
  return (
    <div key={item?.imdbID} className={classes.item}>
      <div className={classes.poster}>
        <img src={item?.Poster} alt="poster" />
      </div>
      <NavLink to={`/${item?.imdbID}`} className={classes.info}>
        <h4>
          {i + 1}.{item?.Title}
        </h4>
        <p>{item?.Year}</p>
      </NavLink>
    </div>
  );
}

export default SliderItem;
