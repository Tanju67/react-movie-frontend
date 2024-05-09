import React, { useContext, useEffect } from "react";
import FilmsList from "../../shared/UIElements/FilmsList/FilmsList";
import { ServerAPIContext } from "../../shared/context/serverApi-context";
import { OMDbApiContext } from "../../shared/context/omdbApi-context";
import { AuthContext } from "../../shared/context/auth-context";

function Watchlist() {
  const { filmList, setFilmList, getAllWatchlistMovies } =
    useContext(ServerAPIContext);
  const { isLoggedIn } = useContext(AuthContext);
  const { page, setTotalResults } = useContext(OMDbApiContext);
  useEffect(() => {
    getAllWatchlistMovies(page, (data) => {
      setFilmList(data.result);
      setTotalResults(data.total);
    });
  }, [page]);
  if (!isLoggedIn) {
    return (
      <div>
        <h2>You are not allowed for this route!Please log in.</h2>
      </div>
    );
  }

  return (
    <div>
      <FilmsList watch={true} filmList={isLoggedIn ? filmList : []} />
    </div>
  );
}

export default Watchlist;
