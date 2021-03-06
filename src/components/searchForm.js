import React from 'react';
import './css/SearchForm.css';

export default function Search({ handleSubmit }) {
  const form = (
    <form className='poke-search' onSubmit={handleSubmit}>
      <label>
        <span>Search:</span>
        <input type='text' placeholder='Enter name or ID' />
      </label>

      <input
        className=' App-btn-link-1 App-shadow'
        type='submit'
        value='Search'
      />
    </form>
  );

  return <div>{form}</div>;
}
