import { createContext, useCallback, useEffect, useState } from "react";
import { useHttpRequest } from "../hooks/fetchData-hook";

export const ServerAPIContext = createContext({
  sendToServerRequest: () => {},
  filmList: [],
  setFilmList: () => {},
  reviewList: [],
  setReviewList: () => {},
  isLoading: false,
  error: null,
  getAllReviews: () => {},
  createReview: () => {},
  getUserReviews: () => {},
  deleteReview: () => {},
  getAllWatchlistMovies: () => {},
  addMovieToWatchlist: () => {},
  deleteMovieFromWatchlist: () => {},
});

export const ServerAPIProvider = ({ children }) => {
  const { sendRequest, isLoading, error } = useHttpRequest();
  const [filmList, setFilmList] = useState([]);
  const [reviewList, setReviewList] = useState([]);

  const sendToServerRequest = useCallback(
    (endPoint, method, body, headers, fn) => {
      sendRequest(
        `http://localhost:5000/api/v1/${endPoint}`,
        method,
        undefined,
        body,
        headers,
        (data) => {
          fn(data);
        }
      );
    },
    []
  );

  const getAllReviews = useCallback((page, fn) => {
    sendToServerRequest(
      `review?page=${page}&limit=5`,
      "GET",
      undefined,
      { "Content-Type": "application/json" },
      (data) => {
        fn(data);
      }
    );
  }, []);

  const createReview = useCallback((body, fn) => {
    const token = localStorage.getItem("token");
    sendToServerRequest(
      "review",
      "POST",
      body,
      { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      () => {
        fn();
      }
    );
  }, []);

  const getUserReviews = useCallback((filmId, showMore, fn) => {
    sendToServerRequest(
      `review/film/${filmId}?page=${showMore}&limit=3`,
      "GET",
      undefined,
      { "Content-Type": "application/json" },
      (data) => {
        fn(data);
      }
    );
  }, []);

  const deleteReview = useCallback((reviewId, fn) => {
    const token = localStorage.getItem("token");
    sendToServerRequest(
      `review/${reviewId}`,
      "DELETE",
      undefined,
      { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      () => {
        fn();
      }
    );
  }, []);

  const getAllWatchlistMovies = useCallback((page, fn) => {
    const token = localStorage.getItem("token");
    sendToServerRequest(
      `movie?page=${page}&limit=10`,
      "GET",
      undefined,
      { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      (data) => {
        fn(data);
      }
    );
  }, []);

  const addMovieToWatchlist = useCallback((body, fn) => {
    const token = localStorage.getItem("token");
    sendToServerRequest(
      "movie",
      "POST",
      body,
      { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      () => {
        fn();
      }
    );
  }, []);

  const deleteMovieFromWatchlist = useCallback((filmId, fn) => {
    const token = localStorage.getItem("token");
    sendToServerRequest(
      `movie/${filmId}`,
      "DELETE",
      undefined,
      { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      () => {
        fn();
      }
    );
  }, []);

  return (
    <ServerAPIContext.Provider
      value={{
        sendToServerRequest,
        filmList,
        setFilmList,
        reviewList,
        setReviewList,
        isLoading,
        error,
        getAllReviews,
        createReview,
        getUserReviews,
        deleteReview,
        getAllWatchlistMovies,
        addMovieToWatchlist,
        deleteMovieFromWatchlist,
      }}
    >
      {children}
    </ServerAPIContext.Provider>
  );
};
