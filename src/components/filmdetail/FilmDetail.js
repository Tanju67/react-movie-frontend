import React, { useContext, useEffect, useState } from "react";
import classes from "./FilmDetail.module.css";
import { MdBookmarkAdd } from "react-icons/md";
import { MdRateReview } from "react-icons/md";
import { useParams } from "react-router-dom";
import { OMDbApiContext } from "../../shared/context/omdbApi-context";
import Modal from "../../shared/UIElements/Modal/Modal";

function FilmDetail() {
  const { film, fetchDetailMovie } = useContext(OMDbApiContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const filmId = useParams().id;

  const showModal = () => {
    setIsModalVisible(true);
  };
  const hideModal = () => {
    setIsModalVisible(false);
  };

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
            <button onClick={showModal} className={classes.watchBtn}>
              <MdBookmarkAdd />
              <span>Watchlist</span>
            </button>
            <button onClick={showModal} className={classes.reviewBtn}>
              <MdRateReview />
              <span>Add Review</span>
            </button>
          </div>
          <hr />

          <p className={classes.plot}>" {film.Plot} "</p>
        </div>
      </div>
      {isModalVisible && <Modal onClick={hideModal}></Modal>}
    </div>
  );
}

export default FilmDetail;
