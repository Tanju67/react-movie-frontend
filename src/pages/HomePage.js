import React, { useContext, useEffect } from "react";
import Home from "../components/home/Home";
import { ServerAPIContext } from "../shared/context/serverApi-context";

function HomePage() {
  const { sendToServerRequest, setFilmList } = useContext(ServerAPIContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    sendToServerRequest(
      `movie?page=1&limit=10`,
      "GET",
      undefined,
      { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      (data) => {
        setFilmList(data.result);
      }
    );
  }, []);
  return <Home />;
}

export default HomePage;
