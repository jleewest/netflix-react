import React from 'react';
import MovieItem from './MovieItem';
import './MovieList.css';

export default function MovieList({ movies, toggleList, isMyList }) {
  return (
    <div className='MovieList'>
      <ul>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <MovieItem
                data={movie}
                onToggleClick={() => toggleList(movie)}
                isMyList={isMyList}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
