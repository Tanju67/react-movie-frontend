import React from "react";
import classes from "./TopTVShows.module.css";
import { topTenTVShows } from "../../data/filmData";

import FilmsCarousel from "../../shared/UIElements/Carousel/FilmsCarousel";

function TopTVShows() {
  return (
    <div id="tvshows" className={classes.tvShows}>
      <FilmsCarousel filmList={topTenTVShows} subTitle={"Top 10 TV Shows >"} />
    </div>
  );
}

export default TopTVShows;
