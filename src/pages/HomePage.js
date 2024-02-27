import React, { useContext, useEffect } from "react";
import Home from "../components/home/Home";
import { ServerAPIContext } from "../shared/context/serverApi-context";

function HomePage() {
  const { sendToServerRequest, setFilmList, getAllWatchlistMovies } =
    useContext(ServerAPIContext);

  useEffect(() => {
    getAllWatchlistMovies(undefined, (data) => {
      setFilmList(data.result);
    });
  }, []);
  return <Home />;
}

export default HomePage;
