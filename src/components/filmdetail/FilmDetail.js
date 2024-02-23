import React, { useContext, useEffect, useState } from "react";
import classes from "./FilmDetail.module.css";
import { MdBookmarkAdd } from "react-icons/md";
import { MdRateReview } from "react-icons/md";
import { useParams } from "react-router-dom";
import { OMDbApiContext } from "../../shared/context/omdbApi-context";
import Modal from "../../shared/UIElements/Modal/Modal";
import StarRating from "../../shared/UIElements/StarRaiting/StarRaiting";
import Button from "../../shared/UIElements/Button/Button";
import { Watch } from "react-loader-spinner";

function FilmDetail() {
  const { film, fetchDetailMovie, isLoading, error } =
    useContext(OMDbApiContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isWatchModalVisible, setIsWatchModalVisible] = useState(false);
  const filmId = useParams().id;

  const showModal = () => {
    setIsModalVisible(true);
  };

  const showWatchModal = () => {
    setIsWatchModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    fetchDetailMovie(filmId);
  }, [fetchDetailMovie, filmId]);

  return (
    <div className={classes.detail}>
      {error && <p>⛔Something went wrong</p>}
      {!error && (
        <Watch
          visible={isLoading}
          height="50"
          width="50"
          radius="48"
          color="#4fa94d"
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          wrapperClass={classes.spinner}
        />
      )}
      {!isLoading && !error && (
        <div className={classes.film}>
          <div className={classes.poster}>
            {film.Poster !== "N/A" && <img src={film?.Poster} alt="poster" />}
            {film.Poster === "N/A" && (
              <p className={classes.noPoster}>No poster found.</p>
            )}
          </div>
          <div className={classes.description}>
            <div className={classes.descriptionHeader}>
              <div className={classes.posterSmall}>
                <img src={film.Poster} alt={film.Title} />
              </div>
              <div>
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
              </div>
            </div>

            <div className={classes.btnBox}>
              <button onClick={showWatchModal} className={classes.watchBtn}>
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
      )}
      {isModalVisible && (
        <Modal onClick={hideModal}>
          <form className={classes.reviewForm}>
            <div className={classes.desc}>
              <h2>{film.Title}</h2>
              <div className={classes.ratingBox}>
                <StarRating maxRating={10} size={20} onSetRating={null} />
              </div>
            </div>
            <div className={classes.formControl}>
              <textarea placeholder="Write your review..." />
            </div>
            <Button>Share Your Review</Button>
          </form>
        </Modal>
      )}

      {isWatchModalVisible && (
        <Modal
          onClose={() => setIsWatchModalVisible(false)}
          onClick={() => setIsWatchModalVisible(false)}
        >
          <div className={classes.addWatchlist}>
            <form className={classes.watchlistForm}>
              <p className={classes.star}>⭐</p>
              <p>Rate This</p>
              <p>{film.Title}</p>
              <div className={classes.rating}>
                <StarRating maxRating={10} size={20} onSetRating={null} />
                <Button>Add Watchlist</Button>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default FilmDetail;
