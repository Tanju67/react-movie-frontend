import React from "react";
import classes from "./Home.module.css";
import Header from "./Header";
import TopTen from "./TopTen";

function Home() {
  return (
    <div className={classes.home}>
      <Header />
      <TopTen />
    </div>
  );
}

export default Home;
