import React from "react";
import classes from "./Home.module.css";
import Header from "./Header";
import TopTen from "./TopTen";
import WatchList from "./WatchList";

function Home() {
  return (
    <div className={classes.home}>
      <Header />
      <TopTen />
      <WatchList />
    </div>
  );
}

export default Home;
