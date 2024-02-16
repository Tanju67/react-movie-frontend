import React from "react";
import classes from "./SuggestionFilm.module.css";
import FilmsCarousel from "../../shared/UIElements/Carousel/FilmsCarousel";
import { films } from "../../data/filmData";
import { generateRandomArray } from "../../utils/util";

function SuggestionFilm() {
  return (
    <div className={classes.suggest}>
      <FilmsCarousel
        filmList={generateRandomArray(10, films.length, films)}
        subTitle={"Our Suggestions"}
      />
    </div>
  );
}

export default SuggestionFilm;
