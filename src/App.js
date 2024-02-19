import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainNavigation from "./shared/UIElements/NavBar/MainNavigation";
import WatchlistPage from "./pages/WatchlistPage";
import FilmDetailPage from "./pages/FilmDetailPage";
import SearchResultPage from "./pages/SearchResultPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/watchlist" element={<WatchlistPage />} />
        <Route path="/films/:id" element={<SearchResultPage />} />
        <Route path="/:id" element={<FilmDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// const KEY = "a36111d7";
// const query = "";

// const fetchData = async () => {
//   try {
//     // const res = await fetch(
//     //   `http://www.omdbapi.com/?s=${query}&page=1&apikey=${KEY}`
//     // );

//     // const res = await fetch(
//     //   `http://www.omdbapi.com/?i=tt1851398&apikey=${KEY}`
//     // );

//     const res = await fetch(`https://www.mediawiki.org/w/api.php`);

//     if (!res.ok) {
//       throw new Error("something went wrong");
//     }
//     const data = await res.json();

//     console.log(data);
//   } catch (error) {}
// };
