import './css/pages.css';
import React, { useState, useEffect, useMemo, Suspense } from 'react';
import { Link, useParams, useRouteMatch } from 'react-router-dom';
import { hectoToKilogram } from '../utils';
import pokemonData from '../data/pokemonData.json';
//code splitting
const DisplayComponent = React.lazy(() =>
  import('../components/PokedexDisplay')
);
const SearchComponent = React.lazy(() => import('../components/SearchForm'));
// Home
function PokedexHome() {
  const [data, setData] = useState(pokemonData);
  const [query, setQuery] = useState(pokemonData.name); //grabs first pokemon
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
    const fetchData = async () => {
      const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}/`)
        .then((res) => res.json())
        .catch((err) => {
          setError(err);
        });
      setData(result);
      setLoading(false);
    };
    setLoading(true);
    fetchData();
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

      {/* <Search handleSubmit={handleSubmit} /> */}
      <Suspense fallback={<div>Loading...</div>}>
        <SearchComponent handleSubmit={handleSubmit} />
        <DisplayComponent
          name={data.name}
          id={data.id}
          order={data.order}
          baseXP={data.base_experience}
          height={data.height}
          weight={hectoToKilogram(data.weight)}
          sprites={images}
        />
      </Suspense>

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
      <Suspense fallback={<div>Loading...</div>}>
        <SearchComponent handleSubmit={handleSubmit} />
      </Suspense>
      <h3 className='pokedex-failed'>
        Nothing to Display. Try Searching again
      </h3>
    </div>
  );
}
//--------------------------

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
      <img src={image[0 + 2]} alt={`front facing ${data.name}`} />
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
