import React from "react";
import classes from "./MainNavigation.module.css";
import { IoMenu } from "react-icons/io5";
import { BiMoviePlay } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { MdBookmarkAdd } from "react-icons/md";
import { IoLogInOutline } from "react-icons/io5";

function MainNavigation() {
  return (
    <nav className={classes.navbar}>
      <div className={classes.logoBox}>
        <BiMoviePlay /> <span>R-MOVIE</span>
      </div>
      <div className={classes.menuBox}>
        <IoMenu />
        <span>Menu</span>
      </div>
      <div className={classes.searchBox}>
        <input type="text" placeholder="Search Movie" />
        <CiSearch />
      </div>
      <div className={classes.watchlist}>
        <NavLink>
          <MdBookmarkAdd />
          <span>Watchlist</span>
        </NavLink>
      </div>
      <div className={classes.loginBox}>
        <NavLink>
          <IoLogInOutline />
          <span>Login</span>
        </NavLink>
      </div>
      <div className={classes.sideMenu}></div>
    </nav>
  );
}

export default MainNavigation;
