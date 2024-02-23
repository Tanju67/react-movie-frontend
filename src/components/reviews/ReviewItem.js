import React, { useEffect, useState } from "react";
import classes from "./ReviewItem.module.css";
import { Link } from "react-router-dom";

function ReviewItem({ poster, title, review, imdbID }) {
  const [readMore, setReadMore] = useState(false);
  const [screenWidth, setScreenWidtth] = useState(window.innerWidth);
  const { innerWidth } = window;
  useEffect(() => {
    const handleResize = () => {
      setScreenWidtth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);
  return (
    <div className={classes.reviewItem}>
      <div className={classes.posterBox}>
        <img src={poster} alt={title} />
      </div>
      <div className={classes.reviewDesc}>
        <div className={classes.info}>
          <p>
            Written by <span className={classes.name}>Tanju</span> at{" "}
            <span className={classes.date}>22/02/2024</span>
          </p>
          <p>
            ⭐His Rating: <span className={classes.rate}>9</span>/10
          </p>
        </div>
        <Link to={`/${imdbID}`}>
          <h2>{title}</h2>
        </Link>
        <p>
          {readMore
            ? review
            : review.substring(0, Math.trunc(screenWidth / 4)) + "..."}{" "}
        </p>
        <span
          onClick={() => setReadMore((prev) => !prev)}
          className={classes.showMore}
        >
          {readMore ? <em> &uarr; show less</em> : <em> &darr; show more</em>}
        </span>
      </div>
    </div>
  );
}

export default ReviewItem;
