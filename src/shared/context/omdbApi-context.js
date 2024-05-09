import { createContext, useCallback, useState } from "react";
import { useHttpRequest } from "../hooks/fetchData-hook";

export const OMDbApiContext = createContext({
  query: "",
  page: 1,
  movies: [],
  film: {},
  totalResults: 0,
  allMovies: [],
  isLoading: false,
  error: null,
  setQuery: () => {},
  setPage: () => {},
  setMovies: () => {},
  setFilm: () => {},
  setTotalResults: () => {},
  fetchFilmData: () => {},
  setAllMovies: () => {},
  fetchAllMovies: () => {},
  fetchDetailMovie: () => {},
});

const KEY = "a36111d7";
export const Provider = (props) => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [film, setFilm] = useState({});
  const [allMovies, setAllMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const { isLoading, error, sendRequest } = useHttpRequest();

  const fetchFilmData = useCallback((controller, query) => {
    sendRequest(
      `http://www.omdbapi.com/?s=${query}&apikey=${KEY}`,
      "GET",
      controller,
      undefined,
      undefined,
      (data) => {
        setMovies(data.Search ? data.Search : []);
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
      }
    );
  }, []);

  return (
    <OMDbApiContext.Provider
      value={{
        query,
        page,
        movies,
        film,
        allMovies,
        totalResults,
        isLoading,
        error,
        setQuery,
        setPage,
        setMovies,
        setTotalResults,
        setAllMovies,
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
