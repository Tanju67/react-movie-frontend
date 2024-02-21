import React, { useContext, useEffect } from "react";
import classes from "./SearchResult.module.css";
import FilmsList from "../../shared/UIElements/FilmsList/FilmsList";
import { OMDbApiContext } from "../../shared/context/omdbApi-context";
import { useParams } from "react-router-dom";

function SearchResult() {
  const searchQuery = useParams().id;
  console.log(searchQuery);
  const { fetchAllMovies, allMovies, page } = useContext(OMDbApiContext);

  useEffect(() => {
    fetchAllMovies(page, searchQuery);
  }, [fetchAllMovies, page, searchQuery]);

  return (
    <div className={classes.search}>
      <FilmsList filmList={allMovies} searchQuery={searchQuery} />
    </div>
  );
}

export default SearchResult;
