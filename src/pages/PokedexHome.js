import React, { useEffect, useState, Suspense } from 'react';
import { hectoToKilogram } from '../utils/index';
import { Link } from 'react-router-dom';
import pokemonData from '../data/pokemonData.json';
const DisplayComponent = React.lazy(() =>
  import('../components/PokedexDisplay')
);
const SearchComponent = React.lazy(() => import('../components/SearchForm'));

//TODO REWORK HOME PAGE
function PokedexHome() {
  const [data, setData] = useState(pokemonData);
  const [query, setQuery] = useState(pokemonData.name);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [images, setImages] = useState(pokemonData.sprites);
  const handleSubmit = (e) => {
    e.preventDefault();
    //TODO Better validate v1.0.1
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
  useEffect(() => {
    //TODO: Add setting images here
  }, []);

  if (loading) return <h1 className='loading-text'>Loading...</h1>;

  if (error) {
    return (
      <>
        <pre>Error:{JSON.stringify(error)}</pre>
      </>
    );
  }

  return data ? (
    <div className='pokedex'>
      <h1 className='pokedex-title'>Pokedex</h1>

      {/* <Search handleSubmit={handleSubmit} /> */}
      <Suspense fallback={<div>Loading...</div>}>
        <SearchComponent handleSubmit={handleSubmit} />
        <DisplayComponent
          name={data.name ? data.name : pokemonData.name}
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
export default PokedexHome;
