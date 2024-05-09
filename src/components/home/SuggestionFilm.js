import React from "react";
import classes from "./SuggestionFilm.module.css";
import { films } from "../../data/filmData";
import { generateRandomArray } from "../../utils/util";
import Carousel from "../../shared/UIElements/Carousel/Carousel";

function SuggestionFilm() {
  return (
    <div id="suggestions" className={classes.suggest}>
      <Carousel
        filmList={generateRandomArray(10, films.length, films)}
        subTitle={"Our Suggestions"}
      />
    </div>
  );
}

export default SuggestionFilm;
