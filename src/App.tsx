import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import RecherchePage from "./pages/RecherchePage";
import FavorisPage from "./pages/FavorisPage";
import "bootstrap/dist/css/bootstrap.min.css";


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="favoris" element={<FavorisPage />} />
          <Route path="recherche" element={<RecherchePage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;