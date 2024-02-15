import React, { useEffect, useState } from "react";
import classes from "./FilmsCarousel.module.css";

function FilmsCarousel({ filmList, mainTitle, subTitle }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [screenWidth, setScreenWidtth] = useState(window.innerWidth);
  const width = Math.trunc((250 * filmList.length - 20) / screenWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidtth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  const nextSlide = () => {
    console.log(filmList.length);
    if (slideIndex === width) {
      return;
    } else {
      setSlideIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (slideIndex === 0) {
      return;
    } else {
      setSlideIndex((prev) => prev - 1);
    }
  };
  return (
    <div className={classes.carousel}>
      <div onClick={prevSlide} className={classes.left}>
        <span> &larr; </span>
      </div>
      <div onClick={nextSlide} className={classes.right}>
        <span> &rarr; </span>
      </div>
      <h1>{mainTitle}</h1>
      <h2>{subTitle}</h2>
      <div
        style={{ transform: `translateX(${-100 * slideIndex}vw)` }}
        className={`${classes.toptenCarousel} `}
      >
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

export default FilmsCarousel;