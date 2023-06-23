import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncDetails,
  removeSelectedDetails,
} from "../../features/movies/movieSlice";
import "./movieDetail.css";

const MovieDetails = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.movies.selectedDetails);
  useEffect(() => {
    dispatch(fetchAsyncDetails(imdbID));
    return () => {
      dispatch(removeSelectedDetails());
    };
  }, [dispatch, imdbID]);
  return (
    <div className="movieSection">
      {Object.keys(data).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <div className="sectionLeft">
            <div className="movieTitle">{data.Title}</div>
            <div className="movieRating">
              <span>
                IMDB Rating <i className="fa fa-star">{data.imdbRating}</i>
              </span>
              <span>
                IMDB Votes <i className="fa fa-thumbs-up"></i> : {data.imdbVotes}
              </span>
              <span>
                Runtime <i className="fa fa-film"></i> : {data.Runtime}
              </span>
              <span>
                Year <i className="fa fa-calendar"></i> : {data.Year}
              </span>
            </div>
            <div className="moviePlot">{data.Plot}</div>
            <div className="movieInfo">
              <div>
                <span>Director</span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Generes</span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </div>
          <div className="sectionRight">
            <img src={data.Poster} alt={data.Title}></img>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
