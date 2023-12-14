import React from 'react';
import './Select.css';

export default function Select({ handleChange, categories }) {
  return (
    <span className='Select'>
      <select name='Categories' id='categoriesSelect' onChange={handleChange}>
        <option value='default category'>Choose a genre...</option>
        {categories !== null &&
          categories.map((category) => {
            return (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            );
          })}
      </select>
    </span>
  );
}
