import React, { useContext, useEffect } from "react";
import FilmDetail from "../components/filmdetail/FilmDetail";
import { ServerAPIContext } from "../shared/context/serverApi-context";

function FilmDetailPage() {
  const { setFilmList, getAllWatchlistMovies } = useContext(ServerAPIContext);

  useEffect(() => {
    getAllWatchlistMovies(1, (data) => {
      setFilmList(data.result);
    });
  }, []);
  return <FilmDetail />;
}

export default FilmDetailPage;
