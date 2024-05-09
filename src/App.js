import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import MainNavigation from "./shared/UIElements/NavBar/MainNavigation";
import HomePage from "./pages/HomePage";
import WatchlistPage from "./pages/WatchlistPage";
import FilmDetailPage from "./pages/FilmDetailPage";
import SearchResultPage from "./pages/SearchResultPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ReviewsPage from "./pages/ReviewsPage";
import { AuthContext } from "./shared/context/auth-context";

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {isLoggedIn && <Route path="/watchlist" element={<WatchlistPage />} />}
        <Route path="/films/:id" element={<SearchResultPage />} />
        <Route path="/:id" element={<FilmDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
