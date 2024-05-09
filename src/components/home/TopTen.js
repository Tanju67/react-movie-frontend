import React from "react";
import classes from "./TopTen.module.css";
import { topTen } from "../../data/filmData";
import Carousel from "../../shared/UIElements/Carousel/Carousel";

function TopTen() {
  return (
    <div id="top10" className={classes.topten}>
      <Carousel
        filmList={topTen}
        mainTitle={"What to watch"}
        subTitle={"Top 10 Movies >"}
      />
    </div>
  );
}

export default TopTen;
