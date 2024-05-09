import React from "react";
import classes from "./TopTVShows.module.css";
import { topTenTVShows } from "../../data/filmData";
import Carousel from "../../shared/UIElements/Carousel/Carousel";

function TopTVShows() {
  return (
    <div id="tvshows" className={classes.tvShows}>
      <Carousel filmList={topTenTVShows} subTitle={"Top 10 TV Shows >"} />
    </div>
  );
}

export default TopTVShows;
