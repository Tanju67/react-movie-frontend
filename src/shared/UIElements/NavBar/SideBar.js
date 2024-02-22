import React from "react";
import classes from "./SideBar.module.css";
import { NavLink } from "react-router-dom";
import { HiTrophy } from "react-icons/hi2";
import { MdBookmarkAdd, MdRateReview } from "react-icons/md";
import { IoLogInOutline } from "react-icons/io5";
import { MdRecommend } from "react-icons/md";
import { IoFilm } from "react-icons/io5";

function SideBar({ isSidebarOpen, setIsSidebarOpen }) {
  return (
    <ul
      onClick={() => setIsSidebarOpen(false)}
      className={`${classes.sideMenu} ${isSidebarOpen ? classes.open : ""}`}
    >
      <li>
        <a href={"#top10"}>
          <HiTrophy /> <span>Top Movies</span>
        </a>
      </li>
      <li>
        <a href={"#suggestions"}>
          <MdRecommend /> <span>Our Suggestions</span>
        </a>
      </li>
      <li>
        <a href={"#tvshows"}>
          <IoFilm /> <span>Top 10 TV Shows</span>
        </a>
      </li>
      <li>
        <NavLink to={"/reviews"}>
          <MdRateReview />
          <span>Reviews Blog</span>
        </NavLink>
      </li>
      <li>
        <NavLink to={"/watchlist"}>
          <MdBookmarkAdd />
          <span>Watchlist</span>
        </NavLink>
      </li>
      <li>
        <NavLink to={"/login"}>
          <IoLogInOutline />
          <span>Login</span>
        </NavLink>
      </li>
    </ul>
  );
}

export default SideBar;
