import { createContext, useCallback, useEffect, useState } from "react";
import { useHttpRequest } from "../hooks/fetchData-hook";

export const OMDbApiContext = createContext({
  query: "",
  storage: "",
  page: 1,
  movies: [],
  film: {},
  totalResults: 0,
  allMovies: [],
  setQuery: () => {},
  setPage: () => {},
  setMovies: () => {},
  setFilm: () => {},
  setTotalResults: () => {},
  setStorage: () => {},
  fetchFilmData: () => {},
  setAllMovies: () => {},
  fetchAllMovies: () => {},
  fetchDetailMovie: () => {},
});

const KEY = "a36111d7";
export const Provider = (props) => {
  const [query, setQuery] = useState("");
  const [storage, setStorage] = useState("");
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [film, setFilm] = useState({});
  const [allMovies, setAllMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const { isLoading, error, sendRequest, clearErrorHandler } = useHttpRequest();

  const fetchFilmData = useCallback((controller, query) => {
    localStorage.clear();
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

  const fetchAllMovies = useCallback((page, searchQuery) => {
    sendRequest(
      `http://www.omdbapi.com/?s=${searchQuery}&page=${page}&apikey=${KEY}`,
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

  const fetchDetailMovie = useCallback((id) => {
    sendRequest(
      `http://www.omdbapi.com/?i=${id}&apikey=${KEY}`,
      "GET",
      undefined,
      undefined,
      undefined,
      (data) => {
        setFilm(data ? data : {});
        console.log(data);
      }
    );
  }, []);

  return (
    <OMDbApiContext.Provider
      value={{
        query,
        storage,
        page,
        movies,
        film,
        allMovies,
        totalResults,
        setQuery,
        setPage,
        setMovies,
        setTotalResults,
        setAllMovies,
        setStorage,
        setFilm,
        fetchFilmData,
        fetchAllMovies,
        fetchDetailMovie,
      }}
    >
      {props.children}
    </OMDbApiContext.Provider>
  );
};
