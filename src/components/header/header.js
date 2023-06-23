import React, { useState } from "react";
import { Link } from "react-router-dom";
import users from "../../images/user.png";
import "./header.css";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const submitHandller = (e) => {
    e.preventDefault();
    if (term === 0) {
      alert("Please enter a valid search");
    }
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
  };
  return (
    <div className="header">
      <div className="logo">
        <Link to="/"> Movie App </Link>
      </div>
      <div className="searchBar">
        <form onSubmit={submitHandller}>
          <input
            type="text"
            value={term}
            placeholder="Search Movies"
            onChange={(e) => setTerm(e.target.value)}
          ></input>
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="user-image">
        <img src={users} alt="user"></img>
      </div>
    </div>
  );
};

export default Header;
