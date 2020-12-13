import React from 'react';
import './css/SearchForm.css';

export default function Search({ handleSubmit }) {
  return (
    <form className='poke-search' onSubmit={handleSubmit}>
      <input type='text' placeholder='Enter name or ID' />
      <input
        className='btn search-btn App-btn-link'
        type='submit'
        value='Search'
      />
    </form>
  );
}
