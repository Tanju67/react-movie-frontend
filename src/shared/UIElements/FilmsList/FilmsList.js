import React, { useContext } from "react";
import classes from "./FilmsList.module.css";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { OMDbApiContext } from "../../context/omdbApi-context";

function FilmsList({ filmList }) {
  const { page, totalResults, setPage } = useContext(OMDbApiContext);
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
              <img src={item?.Poster} alt="poster" />
            </div>
            <div className={classes.info}>
              <h4>
                {i + 1}.{item?.Title}
              </h4>
              <p>{item?.Year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilmsList;
