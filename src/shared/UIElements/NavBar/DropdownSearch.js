import React, { useContext } from "react";
import classes from "./DropdownSearch.module.css";
import { NavLink } from "react-router-dom";
import { OMDbApiContext } from "../../context/omdbApi-context";
import { Watch } from "react-loader-spinner";

function DropdownSearch({ movies, query }) {
  const { setQuery, isLoading, error } = useContext(OMDbApiContext);

  const clickHandler = () => {
    setQuery("");
  };
  return (
    <div className={classes.dropdown}>
      <div className={classes.filmsContainer}>
        {error && <p>⛔Something went wrong</p>}
        {!error && (
          <Watch
            visible={isLoading}
            height="30"
            width="30"
            radius="48"
            color="#4fa94d"
            ariaLabel="watch-loading"
            wrapperStyle={{}}
            wrapperClass={classes.spinner}
          />
        )}
        {!isLoading &&
          !error &&
          movies?.map((item, i) => (
            <>
              <div key={item.imdbID} id={item.imdbID} className={classes.film}>
                <div className={classes.poster}>
                  {item.Poster !== "N/A" && (
                    <img src={item?.Poster} alt="poster" />
                  )}
                  {item.Poster === "N/A" && (
                    <p className={classes.noPoster}>No poster found.</p>
                  )}
                </div>
                <NavLink
                  onClick={clickHandler}
                  to={`/${item?.imdbID}`}
                  className={classes.description}
                >
                  <h4>{item?.Title}</h4>
                  <p>{item?.Year}</p>
                </NavLink>
              </div>
            </>
          ))}
        {!error && (
          <NavLink
            onClick={clickHandler}
            to={`/films/${query}`}
            className={classes.film}
          >
            {movies.length === 0 && <p>No film found for "{query}"</p>}
            {movies.length > 0 && <p>See all results for "{query}"</p>}
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default DropdownSearch;
