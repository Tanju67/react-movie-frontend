import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Watch } from "react-loader-spinner";
import classes from "./SearchResult.module.css";
import FilmsList from "../../shared/UIElements/FilmsList/FilmsList";
import { OMDbApiContext } from "../../shared/context/omdbApi-context";

function SearchResult() {
  const searchQuery = useParams().id;
  const { fetchAllMovies, allMovies, page, isLoading, error } =
    useContext(OMDbApiContext);

  useEffect(() => {
    fetchAllMovies(page, searchQuery);
  }, [fetchAllMovies, page, searchQuery]);

  return (
    <div className={classes.search}>
      {error && <p className={classes.error}>⛔Something went wrong</p>}
      {!error && (
        <Watch
          visible={isLoading}
          height="50"
          width="50"
          radius="48"
          color="#4fa94d"
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          wrapperClass={classes.spinner}
        />
      )}
      {!isLoading && !error && (
        <FilmsList filmList={allMovies} searchQuery={searchQuery} />
      )}
    </div>
  );
}

export default SearchResult;
