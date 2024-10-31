import React from "react";

const MovieCard = ({ isWatchlisted, movie, toggleWatchlist }) => {
  const handleError = (e) => {
    e.target.src = 'images/default.jpg';
  }

  const getRatingClass = (rating) => {
    if (rating >= 8) return 'rating-good';

    if (rating >= 5) return 'rating-ok';

    return 'rating-bad';
  }

  return (
    <div key={movie.id} className="movie-card">
      <img
        alt={movie.title}
        src={`images/${movie.image}`}
        onError={handleError}
      />

      <div className='movie-card-info'>
        <h3 className='movie-card-title'>
          {movie.title}
        </h3>

        <div>
          <span className='movie-card-genre'>
            {movie.genre}
          </span>

          <span
            className={`movie-card-rating ${getRatingClass(movie.rating)}`}
          >
            {movie.rating}
          </span>
        </div>

        <label className='switch'>
          <input
            checked={isWatchlisted}
            type='checkbox'
            onChange={() => toggleWatchlist(movie.id)}
          />

          <span className='slider'>
            <span className='slider-label '>
              {
                isWatchlisted ? 'In watchlist' : 'Add to watchlist'
              }
            </span>
          </span>
        </label>
      </div>
    </div>
  )
}

export default MovieCard;
