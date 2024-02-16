import React from "react";
import classes from "./FilmsList.module.css";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

function FilmsList({ filmList }) {
  return (
    <div className={classes.filmList}>
      <div className={classes.nav}>
        <span className={classes.page}>Page: 1 - 169 found</span>
        <span className={classes.icon}>
          <FaAngleLeft />
          <FaAngleRight />
        </span>
      </div>
      <div className={classes.filmsBox}>
        {filmList.map((item, i) => (
          <div key={item?.imdbID} className={classes.item}>
            <div className={classes.poster}>
              <img src={item?.Poster} alt="poster" />
            </div>
            <div className={classes.info}>
              <h4>
                {i + 1}.{item?.Title}
              </h4>
              <p>{item?.Year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilmsList;