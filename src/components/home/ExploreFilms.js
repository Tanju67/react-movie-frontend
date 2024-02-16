import React, { useState } from "react";
import classes from "./ExploreFilms.module.css";
import { films } from "../../data/filmData";
import { generateRandomArray } from "../../utils/util";
import useInterval from "../../shared/hooks/useInterval";

function ExploreFilms() {
  const [filmList, setFilmList] = useState(
    generateRandomArray(3, films.length, films)
  );

  useInterval(() => {
    setFilmList(generateRandomArray(3, films.length, films));
  }, 30000);
  return (
    <div className={classes.explore}>
      <h3>Explore</h3>
      <div className={classes.films}>
        {filmList.map((item, i) => (
          <div key={i} className={classes.filmItem}>
            <div className={classes.poster}>
              <img src={item?.Poster} alt={item?.Title} />
            </div>
            <div className={classes.info}>
              <h4>{item?.Title}</h4>
              <p>{item?.Year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExploreFilms;
