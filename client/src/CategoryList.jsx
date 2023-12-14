import React from 'react';
import { useState, useEffect } from 'react';
import MovieList from './MovieList';
import './CategoryList.css';
import Select from './Select';

export default function CategoryList({ toggleList, movies }) {
  const [categories, setCategories] = useState(null);
  const [categoryList, setCategoryList] = useState([]);
  const [genreList, setGenreList] = useState({});

  useEffect(() => {
    const apiUrl = `http://cw-api.eu-west-3.elasticbeanstalk.com/movied/categories/`;
    fetch(apiUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('No API response');
      })
      .then((json) => {
        setCategories(json);
      });
  }, []);

  function toggleCategoriesList(genre) {
    if (categoryList.includes(genre)) {
      setCategoryList(categoryList.filter((a) => a !== genre));
    } else {
      setCategoryList((currentList) => [...currentList, genre]);
    }
  }

  function toggleGenreList(genreObject, genre) {
    if (genreList[genre]) {
      const list = { ...genreList };
      delete list[genre];
      setGenreList(list);
    } else {
      setGenreList({ ...genreList, [genre]: genreObject });
    }
  }

  function handleChange(event) {
    event.preventDefault();
    const genre = event.target.value;
    const genreDetails = categories.find(
      (category) => category.name === event.target.value
    );
    const genreId = genreDetails.id;
    const apiUrl = `http://cw-api.eu-west-3.elasticbeanstalk.com/movied/categories/${genreId}`;
    fetch(apiUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('No API response');
      })
      .then((json) => {
        toggleGenreList(json, genre);
      });
    toggleCategoriesList(event.target.value);
  }

  return (
    <div className='CategoryList'>
      <label id='selectLabel'>Add a genre to your list:</label>
      <Select categories={categories} handleChange={handleChange} />
      <div>
        {categoryList !== null &&
          categoryList.map((category, index) => {
            return (
              <div key={index}>
                <div>
                  <h3>{category}</h3>
                </div>
                {genreList[category] && (
                  <MovieList
                    movies={genreList[category]}
                    toggleList={toggleList}
                  />
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}
