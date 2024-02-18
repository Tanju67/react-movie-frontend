import React, { useContext, useEffect } from "react";
import classes from "./SearchResult.module.css";
import FilmsList from "../../shared/UIElements/FilmsList/FilmsList";
import { topTen } from "../../data/filmData";
import { OMDbApiContext } from "../../shared/context/omdbApi-context";

function SearchResult() {
  const { fetchAllMovies, allMovies, page } = useContext(OMDbApiContext);

  useEffect(() => {
    fetchAllMovies(page);
  }, [fetchAllMovies, page]);

  return (
    <div className={classes.search}>
      <FilmsList filmList={allMovies} />
    </div>
  );
}

export default SearchResult;
