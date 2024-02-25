import React, { useContext, useEffect } from "react";
import classes from "./Watchlist.module.css";
import FilmsList from "../../shared/UIElements/FilmsList/FilmsList";
import { ServerAPIContext } from "../../shared/context/serverApi-context";
import { OMDbApiContext } from "../../shared/context/omdbApi-context";

function Watchlist() {
  const { sendToServerRequest, filmList, setFilmList } =
    useContext(ServerAPIContext);
  const { page, setTotalResults } = useContext(OMDbApiContext);
  useEffect(() => {
    const token = localStorage.getItem("token");
    sendToServerRequest(
      `movie?page=${page}&limit=10`,
      "GET",
      undefined,
      { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      (data) => {
        setFilmList(data.result);
        setTotalResults(data.total);
      }
    );
  }, [page]);

  return (
    <div>
      <FilmsList watch={true} filmList={filmList} />
    </div>
  );
}

export default Watchlist;
