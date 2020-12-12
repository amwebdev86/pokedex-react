import React, { useState, useEffect } from 'react';
import { Link, useParams, useRouteMatch } from 'react-router-dom';
import ImageDisplay from './components/ImageDisplay';
import Display from './components/PokedexDisplay';

import Search from './components/SearchForm';
import { hectoToKilogram } from './utils/convert';

// Home
export function PokedexHome() {
  const [data, setData] = useState({sprites: {back_female:"http://pokeapi.co/media/sprites/pokemon/back/female/12.png",
back_shiny_female:"http://pokeapi.co/media/sprites/pokemon/back/shiny/female/12.png",
back_default:"http://pokeapi.co/media/sprites/pokemon/back/12.png",
front_female:"http://pokeapi.co/media/sprites/pokemon/female/12.png",
front_shiny_female:"http://pokeapi.co/media/sprites/pokemon/shiny/female/12.png",
back_shiny:"http://pokeapi.co/media/sprites/pokemon/back/shiny/12.png",
front_default:"http://pokeapi.co/media/sprites/pokemon/12.png",
front_shiny:"http://pokeapi.co/media/sprites/pokemon/shiny/12.png"
}});
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
  if (data.sprites) {
    let sprites = Object.values(data.sprites);
    
    
  }
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
