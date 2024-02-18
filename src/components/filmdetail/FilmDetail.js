import React, { useContext, useEffect } from "react";
import classes from "./FilmDetail.module.css";
import { MdBookmarkAdd } from "react-icons/md";
import { MdRateReview } from "react-icons/md";
import { useParams } from "react-router-dom";
import { OMDbApiContext } from "../../shared/context/omdbApi-context";

function FilmDetail() {
  const { film, fetchDetailMovie } = useContext(OMDbApiContext);
  const filmId = useParams().id;

  useEffect(() => {
    fetchDetailMovie(filmId);
  }, [fetchDetailMovie, filmId]);

  return (
    <div className={classes.detail}>
      <div className={classes.film}>
        <div className={classes.poster}>
          <img src={film.Poster} alt={film.Title} />
        </div>
        <div className={classes.description}>
          <h2>{film.Title}</h2>
          <p className={classes.shortInfo}>
            <span>
              📆{film.Year} | ⌛{film.Runtime} | ⭐{film.imdbRating}
            </span>
          </p>

          <p className={classes.actors}>
            <span>Actors</span>
            <span>{film.Actors}</span>
          </p>
          <p className={classes.genre}>
            <span>Genre</span>
            <span> {film?.Genre}</span>
          </p>

          <div className={classes.btnBox}>
            <button className={classes.watchBtn}>
              <MdBookmarkAdd />
              <span>Watchlist</span>
            </button>
            <button className={classes.reviewBtn}>
              <MdRateReview />
              <span>Add Review</span>
            </button>
          </div>
          <hr />

          <p className={classes.plot}>" {film.Plot} "</p>
        </div>
      </div>
    </div>
  );
}

export default FilmDetail;
