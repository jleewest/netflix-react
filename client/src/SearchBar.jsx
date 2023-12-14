import React from 'react';
import './SearchBar.css';
import { useState } from 'react';

export default function SearchBar({ movies, toggleList }) {
  const [query, setQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);

  function filterMovies(searchedMovie) {
    const filtered = movies.filter((movie) => {
      if (searchedMovie == '') {
        return movies;
      } else {
        return movie.title.toLowerCase().includes(searchedMovie.toLowerCase());
      }
    });
    setFilteredMovies(searchedMovie ? filtered : []);
  }

  function handleChange(event) {
    const searchedMovie = event.target.value;
    setQuery(searchedMovie);
    filterMovies(searchedMovie);
  }

  return (
    <div>
      <div className='SearchBar'>
        <div id='outerSearch'>
          <input
            type='search'
            placeholder='🔍 Search'
            name='search'
            id='search'
            value={query}
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        {filteredMovies.length > 0 && (
          <ul id='searchSelect'>
            {filteredMovies.map((movie) => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
