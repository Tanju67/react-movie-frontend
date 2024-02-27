import React, { useEffect, useState } from "react";
import classes from "./FilmReviewsItem.module.css";

function FilmReviewsItem({ name, createdAt, UserRating, Review }) {
  const [readMore, setReadMore] = useState(false);
  const [screenWidth, setScreenWidtth] = useState(window.innerWidth);

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
      <div className={classes.info}>
        <p>
          Shared by <span>{name}</span> at{" "}
          <span>{new Date(createdAt).toLocaleDateString("de-DE")}</span>
        </p>
        <p>His Rating : ⭐{UserRating}</p>
      </div>
      <div className={classes.reviewText}>
        <p className={classes.reviewText}>
          {readMore
            ? Review
            : Review.substring(0, Math.trunc(screenWidth / 4)) + "..."}{" "}
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

export default FilmReviewsItem;
