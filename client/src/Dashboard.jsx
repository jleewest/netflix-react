import React from 'react';
import './Dashboard.css';
import MovieList from './MovieList.jsx';
import CategoryList from './CategoryList.jsx';

export default function Dashboard({ movies, toggleList, myList }) {
  return (
    <div className='Dashboard'>
      {myList.length === 0 || <h3>My List</h3>}
      {<MovieList movies={myList} isMyList={true} toggleList={toggleList} />}
      {movies !== null && <h3>Discover</h3>}
      {movies !== null && <MovieList movies={movies} toggleList={toggleList} />}
      {movies !== null && (
        <CategoryList movies={movies} toggleList={toggleList} />
      )}
    </div>
  );
}
