import { createContext, useCallback, useEffect, useState } from "react";
import { useHttpRequest } from "../hooks/fetchData-hook";

export const ServerAPIContext = createContext({
  sendToServerRequest: () => {},
  filmList: [],
  setFilmList: () => {},
  reviewList: [],
  setReviewList: () => {},
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

  return (
    <ServerAPIContext.Provider
      value={{
        sendToServerRequest,
        filmList,
        setFilmList,
        reviewList,
        setReviewList,
      }}
    >
      {children}
    </ServerAPIContext.Provider>
  );
};
