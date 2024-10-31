import React, { useState, useEffect } from "react";
import '../styles.css';
import MovieCard from "./MovieCard";

export const MoviesGrid = ({ movies, watchlist, toggleWatchlist }) => {
  const [foundMovies, setFoundMovies] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');

  const [genre, setGenre] = useState('All Genres');

  const [rating, setRating] = useState('All');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
  }

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  }

  useEffect(() => {
    const checkMovieBySearchTerm = (movie) => {
      return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    }
    const checkMovieByGenre = (movie) => {
      if (genre === 'All Genres') return true;

      return movie.genre.toLowerCase().includes(genre.toLowerCase());
    }

    const checkMovieByRating = (movie) => {
      if (rating === 'All') return true;

      if (rating === 'Good') return movie.rating >= 8;

      if (rating === 'Ok') return movie.rating >= 5 && movie.rating < 8;

      if (rating === 'Bad') return movie.rating < 5;
    }

    setTimeout(() => {
      const foundMovieItems = movies.filter(
        movie => checkMovieBySearchTerm(movie) && checkMovieByGenre(movie) && checkMovieByRating(movie));

      setFoundMovies(foundMovieItems);
    }, 500);
  }, [searchTerm, genre, rating, movies]);

  return (
    <div>
      <input
        className='search-input'
        placeholder='Search for movies ...'
        type='text'
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <div className='filter-bar'>
        <div className='filter-slot'>
          <label>Genre</label>

          <select
            className='filter-dropdown'
            value={genre}
            onChange={handleGenreChange}
          >
            <option>All Genres</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Fantasy</option>
            <option>Horror</option>
          </select>
        </div>

        <div className='filter-slot'>
          <label>Rating</label>

          <select
            className='filter-dropdown'
            value={rating}
            onChange={handleRatingChange}
          >
            <option>All</option>
            <option>Good</option>
            <option>Ok</option>
            <option>Bad</option>
          </select>
        </div>
      </div>

      <div className="movies-grid">
        {
          foundMovies.map(movie => (
            <MovieCard
              isWatchlisted={watchlist.includes(movie.id)}
              key={movie.id}
              movie={movie}
              toggleWatchlist={toggleWatchlist}
            />
          ))
        }
      </div>
    </div>
  )
}
