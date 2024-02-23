import React, { useContext } from "react";
import classes from "./FilmsList.module.css";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { OMDbApiContext } from "../../context/omdbApi-context";
import { NavLink } from "react-router-dom";

function FilmsList({ filmList, searchQuery }) {
  const { page, totalResults, setPage, isLoading, error } =
    useContext(OMDbApiContext);
  const totalPage = Math.ceil(totalResults / 10);

  const increasePageHandler = () => {
    if (page === totalPage) return;
    setPage((prev) => prev + 1);
  };

  const decreasePageHandler = () => {
    if (page === 1) return;
    setPage((prev) => prev - 1);
  };
  return (
    <div className={classes.filmList}>
      <div className={classes.nav}>
        <span className={classes.page}>
          Page: {page} - {totalResults} found
        </span>
        <span className={classes.icon}>
          <FaAngleLeft onClick={decreasePageHandler} />
          <FaAngleRight onClick={increasePageHandler} />
        </span>
      </div>
      <div className={classes.filmsBox}>
        {filmList.map((item, i) => (
          <div key={item?.imdbID} className={classes.item}>
            <div className={classes.poster}>
              {item.Poster !== "N/A" && <img src={item?.Poster} alt="poster" />}
              {item.Poster === "N/A" && (
                <p className={classes.noPoster}>No poster found.</p>
              )}
            </div>
            <NavLink to={`/${item.imdbID}`} className={classes.info}>
              <h4>
                {i + 1}.{item?.Title}
              </h4>
              <p>{item?.Year}</p>
            </NavLink>
          </div>
        ))}

        {filmList.length === 0 && <p>No films found for "{searchQuery}"</p>}
      </div>
    </div>
  );
}

export default FilmsList;
