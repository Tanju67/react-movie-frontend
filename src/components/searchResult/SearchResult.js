import React from "react";
import classes from "./SearchResult.module.css";
import FilmsList from "../../shared/UIElements/FilmsList/FilmsList";
import { topTen } from "../../data/filmData";

function SearchResult() {
  return (
    <div className={classes.search}>
      <FilmsList filmList={topTen} />
    </div>
  );
}

export default SearchResult;
