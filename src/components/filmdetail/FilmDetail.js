import React from "react";
import classes from "./FilmDetail.module.css";
import { MdBookmarkAdd } from "react-icons/md";
import { MdRateReview } from "react-icons/md";

const film = {
  Title: "Matrix",
  Year: "1993",
  Rated: "N/A",
  Released: "01 Mar 1993",
  Runtime: "60 min",
  Genre: "Action, Drama, Fantasy",
  Director: "N/A",
  Writer: "Grenville Case",
  Actors: "Nick Mancuso, Phillip Jarrett, Carrie-Anne Moss",
  Plot: 'Steven Matrix is one of the underworld\'s foremost hitmen until his luck runs out, and someone puts a contract out on him. Shot in the forehead by a .22 pistol, Matrix "dies" and finds himself in "The City In Between", where he is ...',
  Language: "English",
  Country: "Canada",
  Awards: "1 win",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BYzUzOTA5ZTMtMTdlZS00MmQ5LWFmNjEtMjE5MTczN2RjNjE3XkEyXkFqcGdeQXVyNTc2ODIyMzY@._V1_SX300.jpg",
  Ratings: [
    {
      Source: "Internet Movie Database",
      Value: "7.8/10",
    },
  ],
  Metascore: "N/A",
  imdbRating: "7.8",
  imdbVotes: "206",
  imdbID: "tt0106062",
  Type: "series",
  totalSeasons: "N/A",
  Response: "True",
};

function FilmDetail() {
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
