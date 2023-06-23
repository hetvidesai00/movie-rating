import React from 'react';
import "./movieCard.css";
import { Link } from 'react-router-dom';

function MovieCard({data}) {
  return (
    <div className='cardItem'>
      <Link to={`/movie/${data.imdbID}`}>
      <div className='cardInner'>
        <div className='cardTop'>
          <img src={data.Poster} alt={data.Title}></img>
        </div>
        <div className='cardBottom'>
          <div className='cardInfo'>
            <h4>{data.Title}</h4>
            <p>{data.Year}</p>
          </div>
        </div>
      </div>
      </Link>
    </div>
  )
}

export default MovieCard