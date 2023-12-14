import React from 'react';
import addBtn from './assets/btn-add.svg';
import addedBtn from './assets/btn-added.svg';
import { useState } from 'react';
import './MovieItem.css';

export default function MovieItem({ data, onToggleClick, isMyList }) {
  const [add, setAdd] = useState(!!isMyList);

  function handleClick() {
    setAdd(!add);
  }

  return (
    <div className='MovieItem'>
      <img
        src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`}
        alt='movie-poster'
        id='poster'
      />
      <div id='hover'>
        <p id='title'>{data.title}</p>
        <button id='btn'>
          {add ? (
            <img
              title='Removed from List'
              src={addedBtn}
              alt=''
              id='btnIcon'
              onClick={() => {
                onToggleClick();
                handleClick();
              }}
            />
          ) : (
            <img
              title='Added to List'
              src={addBtn}
              alt=''
              id='btnIcon'
              onClick={() => {
                onToggleClick();
                handleClick();
              }}
            />
          )}
        </button>
      </div>
    </div>
  );
}
