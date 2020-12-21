import './css/pages.css';
import React, { useState, useEffect } from 'react';
import { Link, useParams, useRouteMatch } from 'react-router-dom';
import { getRandomInt } from '../utils';
import PokedexHome from './PokedexHome';

//Pokemon

function Pokemon() {
  let { url } = useRouteMatch();
  let { id } = useParams();
  const [data, setData] = useState({
    id: id,
  });
  const [image, setImage] = useState(['']);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        `https://pokeapi.co/api/v2${url}`
      ).then((res) => res.json());
      setData(result);
      setImage(
        Object.values(result.sprites).filter(
          (sprite) => typeof sprite === 'string'
        )
      );
      setIsLoading(false);
    };
    setIsLoading(true);
    fetchData();
  }, [url]);

  return isLoading ? (
    <h3>Loading...</h3>
  ) : (
    <div className='Pokedex-details'>
      <h1 className='Pokedex-details-name'>
        #{data.id}-{data.name}
      </h1>
      <img
        src={image[getRandomInt(image.length)]}
        alt={`front facing ${data.name}`}
      />

      <Link className='App-btn-link-details' to='/'>
        Back
      </Link>
    </div>
  );
}

function PokeBattle() {
  return (
    <div className='PokeBattle-main'>
      <h3>Coming Soon</h3>
    </div>
  );
}

function NotFound404() {
  return <h1 className='error'>Not Found</h1>;
}

export { PokedexHome, Pokemon, PokeBattle, NotFound404 };
