import React, { useContext, useEffect, useState } from "react";
import classes from "./FilmDetail.module.css";
import { MdBookmarkAdd } from "react-icons/md";
import { MdRateReview } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { OMDbApiContext } from "../../shared/context/omdbApi-context";
import Modal from "../../shared/UIElements/Modal/Modal";
import StarRating from "../../shared/UIElements/StarRaiting/StarRaiting";
import Button from "../../shared/UIElements/Button/Button";
import { Watch } from "react-loader-spinner";
import { AuthContext } from "../../shared/context/auth-context";
import { ServerAPIContext } from "../../shared/context/serverApi-context";

function FilmDetail() {
  const { film, fetchDetailMovie, isLoading, error } =
    useContext(OMDbApiContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isWatchModalVisible, setIsWatchModalVisible] = useState(false);
  const filmId = useParams().id;
  const { sendToServerRequest, filmList } = useContext(ServerAPIContext);

  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);
  const [rating, setRating] = useState(0);
  const [alreadyWatchlist, setAlreadyWatchlist] = useState(
    filmList.filter((film) => film.imdbID === filmId)
  );
  const [inputReview, setInputReview] = useState("");

  const showModal = () => {
    if (!isLoggedIn) {
      return navigate("/login");
    }
    setIsModalVisible(true);
  };

  const showWatchModal = () => {
    if (!isLoggedIn) {
      return navigate("/login");
    }
    setIsWatchModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  const watchlistSubmitHandler = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    sendToServerRequest(
      "movie",
      "POST",
      {
        Title: film.Title,
        Year: film.Year,
        imdbID: film.imdbID,
        Poster: film.Poster,
        UserRating: rating,
      },
      { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      () => {
        navigate("/watchlist");
      }
    );
  };

  const removeWatchlistHandler = () => {
    console.log(film);
    const token = localStorage.getItem("token");
    sendToServerRequest(
      `movie/${filmId}`,
      "DELETE",
      undefined,
      { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      () => {
        navigate("/watchlist");
      }
    );
  };

  const reviewSubmitHandler = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    sendToServerRequest(
      "review",
      "POST",
      {
        Title: film.Title,
        Review: inputReview,
        imdbID: film.imdbID,
        Poster: film.Poster,
        UserRating: rating,
      },
      { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      () => {
        navigate("/reviews");
      }
    );
  };

  useEffect(() => {
    setAlreadyWatchlist(filmList.filter((film) => film.imdbID === filmId));
  }, [filmList, setAlreadyWatchlist, filmId]);

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
                    📆{film.Year} | ⌛{film.Runtime} | IMDb:⭐{film.imdbRating}{" "}
                    {alreadyWatchlist.length > 0
                      ? `| Your Rating :⭐${alreadyWatchlist[0].UserRating}`
                      : ""}
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
              {alreadyWatchlist.length === 0 && (
                <button onClick={showWatchModal} className={classes.watchBtn}>
                  <MdBookmarkAdd />
                  <span>Watchlist</span>
                </button>
              )}
              {alreadyWatchlist.length > 0 && (
                <button
                  onClick={removeWatchlistHandler}
                  className={classes.watchBtn}
                >
                  <MdBookmarkAdd />
                  <span>Remove from Watchlist</span>
                </button>
              )}
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
          <form onSubmit={reviewSubmitHandler} className={classes.reviewForm}>
            <div className={classes.desc}>
              <h2>{film.Title}</h2>
              <div className={classes.ratingBox}>
                <StarRating
                  defaultRating={rating}
                  maxRating={10}
                  size={20}
                  onSetRating={(rating) => setRating(rating)}
                />
              </div>
            </div>
            <div className={classes.formControl}>
              <textarea
                value={inputReview}
                onChange={(e) => setInputReview(e.target.value)}
                placeholder="Write your review..."
              />
            </div>
            <Button
              type="submit"
              className={
                rating === 0 || inputReview.length < 50 ? classes.disabled : ""
              }
              disabled={rating === 0 || inputReview.length < 50}
            >
              Share Your Review
            </Button>
          </form>
        </Modal>
      )}

      {isWatchModalVisible && (
        <Modal onClick={() => setIsWatchModalVisible(false)}>
          <div className={classes.addWatchlist}>
            <form
              onSubmit={watchlistSubmitHandler}
              className={classes.watchlistForm}
            >
              <p className={classes.star}>⭐</p>
              <p>Rate This</p>
              <p>{film.Title}</p>
              <div className={classes.rating}>
                <StarRating
                  maxRating={10}
                  defaultRating={rating}
                  size={20}
                  onSetRating={(rating) => setRating(rating)}
                />
                <Button
                  className={rating === 0 ? classes.disabled : ""}
                  disabled={rating === 0}
                  type="submit"
                >
                  Add Watchlist
                </Button>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default FilmDetail;
