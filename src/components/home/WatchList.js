import React from "react";
import classes from "./WatchList.module.css";
import { MdBookmarkAdd } from "react-icons/md";

function WatchList() {
  const login = false;
  return (
    <div className={classes.watchlist}>
      <h2>From Your Watchlist &gt; </h2>
      {!login && (
        <div className={classes.notSignIn}>
          <MdBookmarkAdd />
          <p>Login to access your Watchlist</p>
          <p>Save shows and movies to keep track of what you want to watch.</p>
          <button>Login</button>
        </div>
      )}
      {login && <div className={classes.signIn}></div>}
    </div>
  );
}

export default WatchList;
