import React from "react";
import classes from "./TopTVShows.module.css";
import { topTenTVShows } from "../../data/filmData";

import FilmsCarousel from "../../shared/UIElements/Carousel/FilmsCarousel";

function TopTVShows() {
  return (
    <div className={classes.tvShows}>
      <FilmsCarousel filmList={topTenTVShows} subTitle={"Top Ten TV Shows >"} />
    </div>
  );
}

export default TopTVShows;
