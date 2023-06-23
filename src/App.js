import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./components/home/home";
import MovieDetails from "./components/movieDetail/movieDetail";
import PageNotFound from "./components/pageNotFound/pageNotFound";
import Footer from "./components/footer/footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
