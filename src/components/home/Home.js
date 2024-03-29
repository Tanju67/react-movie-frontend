import React from "react";
import classes from "./Home.module.css";
import Header from "./Header";
import TopTen from "./TopTen";
import WatchList from "./WatchList";
import SuggestionFilm from "./SuggestionFilm";
import TopTVShows from "./TopTVShows";

function Home() {
  return (
    <div className={classes.home}>
      <Header />
      <TopTen />
      <WatchList />
      <SuggestionFilm />
      <TopTVShows />
    </div>
  );
}

export default Home;
