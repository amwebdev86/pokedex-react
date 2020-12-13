import React, { useState, useEffect, useMemo } from 'react';
import { Link, useParams, useRouteMatch } from 'react-router-dom';
import Display from './components/PokedexDisplay';

import Search from './components/SearchForm';
import { hectoToKilogram } from './utils';

// Home
export function PokedexHome() {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState('1'); //grabs first pokemon
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [images, setImages] = useState([]);

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
      .then((data) => {
        setData(data);
      })
      .then(setLoading(false))
      .catch((err) => setError(err));
  }, [query]);

  useMemo(() => {
    let sprites = [];

    if (data) {
      let spritesArr = Object.values(data.sprites);
      let newArr = spritesArr.filter((sprite) => typeof sprite === 'string');
      sprites.push(newArr);
      setImages(sprites);
      console.log(sprites);
    }
  }, [data]);
  if (loading) return <h1 className='loading-text'>Loading...</h1>;
  if (error) return <pre>Error:{JSON.stringify(error, 'error', 2)}</pre>;

  return data ? (
    <div className='pokedex'>
      <h1>Pokedex</h1>

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
      <Link className='btn btn-link' to={'/pokemon/' + data.id}>
        Details
      </Link>
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
