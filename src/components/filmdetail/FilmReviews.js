import React, { useEffect, useState } from "react";
import classes from "./FilmReviews.module.css";
import Button from "../../shared/UIElements/Button/Button";
import FilmReviewsItem from "./FilmReviewsItem";

function FilmReviews({ reviewFilmList, clickHandler }) {
  return (
    <div className={classes.filmReviews}>
      <div className={classes.headerReview}>
        <h2>REVIEWS {">"} </h2>
        {reviewFilmList.length === 0 && <p>There is not any review yet.</p>}
      </div>
      {reviewFilmList.map((item, i) => (
        <FilmReviewsItem
          key={i}
          name={item.createdBy.name}
          createdAt={item.createdAt}
          UserRating={item.UserRating}
          Review={item.Review}
        />
      ))}
      {reviewFilmList.length !== 0 && (
        <Button onClick={clickHandler} className={classes.moreBtn}>
          See More Reviews
        </Button>
      )}
    </div>
  );
}

export default FilmReviews;
