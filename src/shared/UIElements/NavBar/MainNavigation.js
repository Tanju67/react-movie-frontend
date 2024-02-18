import React, { useContext, useEffect, useState } from "react";
import classes from "./MainNavigation.module.css";
import { IoMenu } from "react-icons/io5";
import { BiMoviePlay } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { MdBookmarkAdd } from "react-icons/md";
import { IoLogInOutline } from "react-icons/io5";
import { HiTrophy } from "react-icons/hi2";
import DropdownSearch from "./DropdownSearch";
import { useHttpRequest } from "../../hooks/fetchData-hook";
import { OMDbApiContext } from "../../context/omdbApi-context";

function MainNavigation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { query, setMovies, fetchFilmData, setQuery, movies, totalResults } =
    useContext(OMDbApiContext);
  // const [query, setQuery] = useState("");
  // const [movies, setMovies] = useState([]);
  // const [total, setTotal] = useState(0);
  // const { isLoading, error, sendRequest, clearErrorHandler } = useHttpRequest();
  const toggleSidebar = () => {
    setIsSidebarOpen((isOpen) => !isOpen);
  };

  useEffect(() => {
    if (query.length < 3) return setMovies([]);
    const controller = new AbortController();
    fetchFilmData(controller.signal, query);

    return () => {
      controller.abort();
    };
  }, [query, fetchFilmData, setMovies]);

  const inputHandler = async (e) => {
    setQuery(e.target.value);
  };
  return (
    <nav className={classes.navbar}>
      <div className={classes.logoBox}>
        <NavLink to={"/"}>
          <BiMoviePlay /> <span>R-MOVIE</span>
        </NavLink>
      </div>
      <div
        className={`${classes.box} ${classes.menuBox}`}
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? (
          <span className={classes.times}>&times;</span>
        ) : (
          <IoMenu />
        )}
        <span>Menu</span>
      </div>
      <form className={classes.searchBox}>
        <input
          onChange={inputHandler}
          value={query}
          type="text"
          placeholder="Search Movie"
        />
        <CiSearch />
        {query.length > 0 && (
          <DropdownSearch movies={movies} query={query} total={totalResults} />
        )}
      </form>
      <div className={`${classes.box} ${classes.watchlist}`}>
        <NavLink to={"/watchlist"}>
          <MdBookmarkAdd />
          <span>Watchlist</span>
        </NavLink>
      </div>
      <div className={`${classes.box} ${classes.loginBox}`}>
        <NavLink>
          <IoLogInOutline />
          <span>Login</span>
        </NavLink>
      </div>

      <ul
        className={`${classes.sideMenu} ${isSidebarOpen ? classes.open : ""}`}
      >
        <li>
          <NavLink>
            <HiTrophy /> <span>Top Movies</span>
          </NavLink>
        </li>
        <li>
          <NavLink>
            <MdBookmarkAdd />
            <span>Watchlist</span>
          </NavLink>
        </li>
        <li>
          <NavLink>
            <IoLogInOutline />
            <span>Login</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNavigation;
