import React, { useContext } from "react";
import classes from "./WatchList.module.css";
import { MdBookmarkAdd } from "react-icons/md";
import { AuthContext } from "../../shared/context/auth-context";
import { Link } from "react-router-dom";
import { ServerAPIContext } from "../../shared/context/serverApi-context";
import Carousel from "../../shared/UIElements/Carousel/Carousel";

function WatchList() {
  const { isLoggedIn } = useContext(AuthContext);
  const { filmList } = useContext(ServerAPIContext);
  return (
    <div className={classes.watchlist}>
      {!isLoggedIn && (
        <div className={classes.notSignIn}>
          <h2> Your Watchlist </h2>
          <MdBookmarkAdd />
          <p>Login to access your Watchlist</p>
          <p>Save shows and movies to keep track of what you want to watch.</p>
          <Link to={"/login"}>
            <button>Login</button>
          </Link>
        </div>
      )}
      {isLoggedIn && filmList.length === 0 && (
        <div className={classes.notSignIn}>
          <h2> Your Watchlist </h2>
          <MdBookmarkAdd />
          <p>Add your favorite films to your Watchlist</p>
        </div>
      )}
      {isLoggedIn && filmList.length !== 0 && (
        <div className={classes.signIn}>
          <Carousel filmList={filmList} subTitle={"From Your Watchlist >"} />
        </div>
      )}
    </div>
  );
}

export default WatchList;
