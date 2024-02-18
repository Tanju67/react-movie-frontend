import React, { useContext } from "react";
import classes from "./DropdownSearch.module.css";
import { NavLink } from "react-router-dom";
import { OMDbApiContext } from "../../context/omdbApi-context";

function DropdownSearch({ movies, query }) {
  const { setQuery } = useContext(OMDbApiContext);
  return (
    <div className={classes.dropdown}>
      <div className={classes.filmsContainer}>
        {movies?.map((item, i) => (
          <div key={item.imdbID} id={item.imdbID} className={classes.film}>
            <div className={classes.poster}>
              <img src={item.Poster} alt={item.Title} />
            </div>
            <div className={classes.description}>
              <h4>{item.Title}</h4>
              <p>{item.Year}</p>
              <p>{item?.Actress}</p>
            </div>
          </div>
        ))}
        <NavLink
          onClick={() => setQuery("")}
          to={"/films"}
          className={classes.film}
        >
          {movies.length === 0 && <p>No film found for "{query}"</p>}
          {movies.length > 0 && <p>See all results for "{query}"</p>}
        </NavLink>
      </div>
    </div>
  );
}

export default DropdownSearch;
