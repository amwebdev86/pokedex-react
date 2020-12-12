import { useEffect, useState } from "react";
import "./App.css";

function App({ login }) {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState('1'); //grabs first pokemon
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${query}/`)
      .then(response => {
        if (!response.ok) throw new Error('Not Found');
       return response.json();
      }).then(setData)
      .then(setLoading(false))
      .catch(setError)
    
  }, [query]);
  if (loading) return <h1 className='loading-text'>Loading...</h1>;
  if (error) return <h1>{JSON.stringify(error, null, 2)}</h1>
  console.log(data)
  return (
    <div className='App'>
      <h1>Pokedex</h1>
      <form>
        <input
          type='text'
          placeholder='Enter name or ID'
          
        />
        <input className='btn search-btn' type='submit'></input>
      </form>
    </div>
  );
}

export default App;
