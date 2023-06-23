import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../../features/movies/movieSlice'
import MovieCard from '../movieCard/movieCard';
import "./movieListing.css"

function MovieListing() {
  const movies = useSelector(getAllMovies);
  const shows = useSelector((state) => state.movies.shows)
  //instead of getAllMovies can also write useSelector((state) => state.movies.movies)
  let renderMovies, renderShows = "";
  renderMovies = movies.Response === "True" ? (
    movies.Search.map((movie, index) => (
      <MovieCard key={index} data={movie} />
    ))
  ):(
    <div className="movies-error">{movies.Error}</div>
  );

  renderShows = shows.Response === "True" ? (
    shows.Search.map((shows, index) => (
      <MovieCard key={index} data={shows}/>
    ))
  ) : (
    <div className="shows-error">{shows.error}</div>
  )
  
  return (
    <div className='movieWrapper'>
      <div className='movieList'>
        <h2>Movies</h2>
        <div className='movieContainer'>
          {renderMovies}
        </div>
      </div>
      <div className='showList'>
        <h2>Shows</h2>
        <div className='movieContainer'>
          {renderShows}
        </div>
      </div>
    </div>
  )
}

export default MovieListing