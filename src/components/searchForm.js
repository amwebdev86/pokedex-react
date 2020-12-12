import React from 'react';

export default function Search({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Enter name or ID' />
      <input className='btn search-btn' type='submit'></input>
    </form>
  );
}
