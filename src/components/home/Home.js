import React from "react";
import classes from "./Home.module.css";
import Header from "./Header";

function Home() {
  return (
    <div className={classes.home}>
      <Header />
    </div>
  );
}

export default Home;
