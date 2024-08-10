import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import FavouritePage from "./pages/FavouritePage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<DetailPage />} />
        <Route path="/favourites" element={<FavouritePage />} />
      </Routes>
    </Router>
  );
};

export default App;
