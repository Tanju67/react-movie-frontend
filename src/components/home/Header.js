import React from "react";
import classes from "./Header.module.css";
import ExploreFilms from "./ExploreFilms";
import film1 from "../../assets/maxresdefault.jpg";
import film2 from "../../assets/MCDBARB_WB055.webp";
import film3 from "../../assets/back-to-the-future-lloyd-michael-j-fox.jpg";
import film4 from "../../assets/The-Godfather.webp";
import { carouselFilmData } from "../../data/filmData";
import SimpleSlider from "../../shared/UIElements/Carousel/SimpleSlide";

const filmList = [film1, film2, film3, film4];

function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.slider}>
        <SimpleSlider filmList={filmList} carouselFilmData={carouselFilmData} />
      </div>
      <div className={classes.explore}>
        <ExploreFilms />
      </div>
    </div>
  );
}

export default Header;
