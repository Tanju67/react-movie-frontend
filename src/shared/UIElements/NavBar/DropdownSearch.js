import React from "react";
import classes from "./DropdownSearch.module.css";

function DropdownSearch({ movies, query }) {
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
        <div className={classes.film}>
          {movies.length === 0 && <p>No film found for "{query}"</p>}
          {movies.length > 0 && <p>See all results for "{query}"</p>}
        </div>
      </div>
    </div>
  );
}

export default DropdownSearch;
