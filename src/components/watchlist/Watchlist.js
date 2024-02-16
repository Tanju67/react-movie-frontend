import React from "react";
import classes from "./Watchlist.module.css";
import FilmsList from "../../shared/UIElements/FilmsList/FilmsList";
import { topTen } from "../../data/filmData";

function Watchlist() {
  return (
    <div>
      <FilmsList filmList={topTen} />
    </div>
  );
}

export default Watchlist;
