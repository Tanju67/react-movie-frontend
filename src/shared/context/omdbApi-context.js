import { createContext, useCallback, useEffect, useState } from "react";
import { useHttpRequest } from "../hooks/fetchData-hook";

export const OMDbApiContext = createContext({
  query: "",
  page: 1,
  movies: [],
  totalResults: 0,
  allMovies: [],
  setQuery: () => {},
  setPage: () => {},
  setMovies: () => {},
  setTotalResults: () => {},
  fetchFilmData: () => {},
  setAllMovies: () => {},
  fetchAllMovies: () => {},
});

const KEY = "a36111d7";
export const Provider = (props) => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const { isLoading, error, sendRequest, clearErrorHandler } = useHttpRequest();

  const fetchFilmData = useCallback((controller, query) => {
    sendRequest(
      `http://www.omdbapi.com/?s=${query}&apikey=${KEY}`,
      "GET",
      controller,
      undefined,
      undefined,
      (data) => {
        setMovies(data.Search ? data.Search : []);
        console.log(data);
      }
    );
  }, []);

  const fetchAllMovies = useCallback((page) => {
    sendRequest(
      `http://www.omdbapi.com/?s=${"matrix"}&page=${page}&apikey=${KEY}`,
      "GET",
      undefined,
      undefined,
      undefined,
      (data) => {
        setAllMovies(data.Search ? data.Search : []);
        setTotalResults(data.totalResults ? data.totalResults : 0);
        console.log(data);
      }
    );
  }, []);

  return (
    <OMDbApiContext.Provider
      value={{
        query,
        page,
        movies,
        allMovies,
        totalResults,
        setQuery,
        setPage,
        setMovies,
        setTotalResults,
        setAllMovies,
        fetchFilmData,
        fetchAllMovies,
      }}
    >
      {props.children}
    </OMDbApiContext.Provider>
  );
};
