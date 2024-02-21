import React, { useContext, useEffect, useState } from "react";
import classes from "./MainNavigation.module.css";
import { IoMenu } from "react-icons/io5";
import { BiMoviePlay } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { MdBookmarkAdd } from "react-icons/md";
import { IoLogInOutline } from "react-icons/io5";
import { MdRateReview } from "react-icons/md";
import DropdownSearch from "./DropdownSearch";
import { OMDbApiContext } from "../../context/omdbApi-context";
import SideBar from "./SideBar";

function MainNavigation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isInputVisible, setIsInputVisible] = useState(false);
  const { query, setMovies, fetchFilmData, setQuery, movies, totalResults } =
    useContext(OMDbApiContext);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen((isOpen) => !isOpen);
  };

  const inputHandler = async (e) => {
    setQuery(e.target.value);
  };

  const searchHandler = () => {
    if (!query) return;
    navigate(`/films/${query}`);
    setQuery("");
  };

  const showInput = () => {
    setIsInputVisible(true);
  };

  useEffect(() => {
    if (query.length < 3) return setMovies([]);
    const controller = new AbortController();
    fetchFilmData(controller.signal, query);

    return () => {
      controller.abort();
    };
  }, [query, fetchFilmData, setMovies]);

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
        <span className={classes.text}>Menu</span>
      </div>
      <form
        className={`${classes.searchBox} ${
          isInputVisible ? classes.inputVisible : ""
        }`}
      >
        <input
          onChange={inputHandler}
          value={query}
          type="text"
          placeholder="Search Movie"
          className={classes.searchInput}
        />
        {!isInputVisible && <FaSearch onClick={searchHandler} />}
        {isInputVisible && (
          <span
            onClick={() => setIsInputVisible(false)}
            className={classes.closeBtn}
          >
            &times;
          </span>
        )}
        {query.length > 0 && (
          <DropdownSearch movies={movies} query={query} total={totalResults} />
        )}
      </form>
      <div className={classes.smSearch}>
        <FaSearch onClick={showInput} />
      </div>

      <div className={`${classes.box} ${classes.watchlist}`}>
        <NavLink to={"/blog-reviews"}>
          <MdRateReview />
          <span>Reviews Blog</span>
        </NavLink>
      </div>

      <div className={`${classes.box} ${classes.watchlist}`}>
        <NavLink to={"/watchlist"}>
          <MdBookmarkAdd />
          <span>Watchlist</span>
        </NavLink>
      </div>
      <div className={`${classes.box} ${classes.loginBox}`}>
        <NavLink to={"/login"}>
          <IoLogInOutline />
          <span>Login</span>
        </NavLink>
      </div>

      <SideBar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </nav>
  );
}

export default MainNavigation;
