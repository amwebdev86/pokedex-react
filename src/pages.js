import React, { useState, useEffect } from 'react';
import { Link, useParams, useRouteMatch } from 'react-router-dom';

import Search from './components/searchForm';

// Home
export function PokedexHome() {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState('1'); //grabs first pokemon
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newQuery = e.target[0].value;
    setQuery(newQuery);
  };

  useEffect(() => {
    setLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon/${query}/`)
      .then((response) => {
        return response.json();
      })
      .then(setData)
      .then(setLoading(false))
      .catch((err) => setError(err));
  }, [query]);

  if (loading) return <h1 className='loading-text'>Loading...</h1>;
  if (error) return <pre>Error:{JSON.stringify(error, 'error', 2)}</pre>;

  return data ? (
    <div className='pokedex'>
      <h1>Pokedex</h1>

      <Search handleSubmit={handleSubmit} />
      <Link to={'/pokemon/' + data.id}>{data.name}</Link>
    </div>
  ) : (
    <>
      <pre>There was an issue</pre>
    </>
  );
}
//--------------------------

//Pokemon

export function Pokemon() {
  let { url } = useRouteMatch();
  let { id } = useParams();
  console.log(url);
  console.log(id);

  return !id ? <h1>Pokemon </h1> : <h1>Pokemon {id}</h1>;
}

export function NotFound404() {
  return <h1 className='error'>Not Found</h1>;
}
