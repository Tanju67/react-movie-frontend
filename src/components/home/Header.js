import React from "react";
import classes from "./Header.module.css";
import Carousel from "./Carousel";
import ExploreFilms from "./ExploreFilms";

function Header() {
  return (
    <div className={classes.header}>
      <Carousel />
      <ExploreFilms />
    </div>
  );
}

export default Header;
