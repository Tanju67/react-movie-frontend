import React, { useState } from "react";
import classes from "./TopTen.module.css";
import { topTen } from "../../data/filmData";

function TopTen() {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    setSlideIndex(1);
  };

  const prevSlide = () => {
    setSlideIndex(0);
  };
  return (
    <div className={classes.topten}>
      <div onClick={prevSlide} className={classes.left}>
        <span> &larr; </span>
      </div>
      <div onClick={nextSlide} className={classes.right}>
        <span> &rarr; </span>
      </div>
      <h1>What to watch</h1>
      <h2>Top 10 &gt; </h2>
      <div
        className={`${classes.toptenCarousel} ${
          slideIndex === 1 ? classes.nextSlides : ""
        }`}
      >
        {topTen.map((item, i) => (
          <div key={item.imdbID} className={classes.item}>
            <div className={classes.poster}>
              <img src={item.Poster} alt="poster" />
            </div>
            <div className={classes.info}>
              <h4>
                {i + 1}.{item.Title}
              </h4>
              <p>{item.Year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopTen;
