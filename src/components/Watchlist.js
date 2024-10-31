import React from "react";
import '../styles.css';
import MovieCard from "./MovieCard";

const Watchlist = ({ movies, watchlist, toggleWatchlist }) => {
  return (
    <div>
      <h1 className='title'>Your Watchlist</h1>

      <div className='watchlist'>
        {
          watchlist.map(id => {
            const movie = movies.find(({ id: movieId }) => id === movieId);

            return (
              <MovieCard
                isWatchlisted={true}
                key={id}
                movie={movie}
                toggleWatchlist={toggleWatchlist}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default Watchlist;
