import React, { useEffect, useState } from "react";
import classes from "./FilmsCarousel.module.css";
import { NavLink } from "react-router-dom";

function FilmsCarousel({ filmList, mainTitle, subTitle }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [screenWidth, setScreenWidtth] = useState(
    window.innerWidth > 1280 ? 1280 : window.innerWidth
  );
  const width = Math.trunc((250 * filmList.length - 20) / screenWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidtth(window.innerWidth > 1280 ? 1280 : window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  const nextSlide = () => {
    console.log(window.innerWidth);
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
      <div
        onClick={nextSlide}
        className={classes.right}
        style={{
          right: `${window.innerWidth > 1280 ? window.innerWidth - 1385 : 0}px`,
        }}
      >
        <span> &rarr; </span>
      </div>
      <h1>{mainTitle}</h1>
      <h2>{subTitle}</h2>
      <div
        style={{
          transform: `translateX(${-(screenWidth - 30) * slideIndex}px)`,
        }}
        className={`${classes.toptenCarousel} `}
      >
        {filmList.map((item, i) => (
          <div key={item?.imdbID} className={classes.item}>
            <div className={classes.poster}>
              <img src={item?.Poster} alt="poster" />
            </div>
            <NavLink to={`/${item.imdbID}`} className={classes.info}>
              <h4>
                {i + 1}.{item?.Title}
              </h4>
              <p>{item?.Year}</p>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilmsCarousel;
