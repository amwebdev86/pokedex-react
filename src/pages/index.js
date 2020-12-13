import './css/pages.css';
import React, { useState, useEffect, useMemo } from 'react';
import { Link, useParams, useRouteMatch } from 'react-router-dom';
import Display from '../components/PokedexDisplay';

import Search from '../components/SearchForm';
import { hectoToKilogram } from '../utils';

// Home
export function PokedexHome() {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState('1'); //grabs first pokemon
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [images, setImages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target[0].value || e.target[0].value.startsWith('0')) return;
    let newQuery = e.target[0].value;
    setQuery(newQuery);
  };

  useEffect(() => {
    setLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon/${query}/`)
      .then((response) => {
        if (!response.ok) return;
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .then(setLoading(false))
      .catch((err) => setError(err));
  }, [query]);

  useMemo(() => {
    if (data) {
      let spritesArr = Object.values(data.sprites);
      let newArr = spritesArr.filter((sprite) => typeof sprite === 'string');

      setImages(newArr);
    }
  }, [data]);
  if (loading) return <h1 className='loading-text'>Loading...</h1>;
  if (error) {
    return (
      <div className='error-div'>
        <pre>Error:{JSON.stringify(error, 'error', 2)}</pre>
        <Link className='App-btn-link-1' to='/'>
          Back to Home
        </Link>
      </div>
    );
  }

  return data ? (
    <div className='pokedex'>
      <h1 className='pokedex-title'>Pokedex</h1>

      <Search handleSubmit={handleSubmit} />

      <Display
        name={data.name}
        id={data.id}
        order={data.order}
        baseXP={data.base_experience}
        height={data.height}
        weight={hectoToKilogram(data.weight)}
        sprites={images}
      />
      <div>
        <Link
          className='App-btn-link-details App-shadow'
          to={'/pokemon/' + data.id}>
          Details
        </Link>
      </div>
    </div>
  ) : (
    <div className='pokedex'>
      <Search handleSubmit={handleSubmit} />
      <h3 className='pokedex-failed'>
        Nothing to Display. Try Searching again
      </h3>
    </div>
  );
}
//--------------------------

//Pokemon

export function Pokemon() {
  let { url } = useRouteMatch();
  let { id } = useParams();
  const [data, setData] = useState({
    id: id,
    name: null,
  });

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2${url}`)
      .then((response) => response.json())
      .then(setData)
      .catch((err) => console.error(err));
  }, [url]);
  console.log(url);
  return !id ? (
    <h1>Pokemon will display here </h1>
  ) : (
    <>
      <h1>
        {data.id}
        {data.name}
      </h1>
      <Link to='/'>Back</Link>
    </>
  );
}

export function NotFound404() {
  return <h1 className='error'>Not Found</h1>;
}
