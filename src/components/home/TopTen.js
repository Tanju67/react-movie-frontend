import React, { useEffect, useState } from "react";
import classes from "./TopTen.module.css";
import { topTen } from "../../data/filmData";
import FilmsCarousel from "../../shared/UIElements/Carousel/FilmsCarousel";

function TopTen() {
  return (
    <div className={classes.topten}>
      <FilmsCarousel
        filmList={topTen}
        mainTitle={"What to watch"}
        subTitle={"Top 10 >"}
      />
    </div>
  );
}

export default TopTen;
