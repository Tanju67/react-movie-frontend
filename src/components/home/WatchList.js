import React from "react";
import classes from "./WatchList.module.css";
import { MdBookmarkAdd } from "react-icons/md";
import FilmsCarousel from "../../shared/UIElements/Carousel/FilmsCarousel";
import { films } from "../../data/filmData";
import { generateRandomArray } from "../../utils/util";

function WatchList() {
  const login = false;
  return (
    <div className={classes.watchlist}>
      {!login && (
        <div className={classes.notSignIn}>
          <h2> Your Watchlist </h2>
          <MdBookmarkAdd />
          <p>Login to access your Watchlist</p>
          <p>Save shows and movies to keep track of what you want to watch.</p>
          <button>Login</button>
        </div>
      )}
      {login && (
        <div className={classes.signIn}>
          <FilmsCarousel
            filmList={generateRandomArray(10, films.length, films)}
            subTitle={"From Your Watchlist >"}
          />
        </div>
      )}
    </div>
  );
}

export default WatchList;
