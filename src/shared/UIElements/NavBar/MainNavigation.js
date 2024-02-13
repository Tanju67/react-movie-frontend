import React, { useState } from "react";
import classes from "./MainNavigation.module.css";
import { IoMenu } from "react-icons/io5";
import { BiMoviePlay } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { MdBookmarkAdd } from "react-icons/md";
import { IoLogInOutline } from "react-icons/io5";
import { HiTrophy } from "react-icons/hi2";

function MainNavigation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen((isOpen) => !isOpen);
  };
  return (
    <nav className={classes.navbar}>
      <div className={classes.logoBox}>
        <BiMoviePlay /> <span>R-MOVIE</span>
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
      <div className={classes.searchBox}>
        <input type="text" placeholder="Search Movie" />
        <CiSearch />
      </div>
      <div className={`${classes.box} ${classes.watchlist}`}>
        <NavLink>
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
