import { useEffect, useState } from "react";
import "./App.css";


function App({ login }) {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState("1"); //grabs first pokemon
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newQuery = e.target[0].value;
    setQuery(newQuery);
    

  };

  
  useEffect(() => {
    setLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${query}/`)
      .then((response) => {
       
        return response.json();
      })
      .then(setData)
      .then(setLoading(false))
      .catch((err)=>setError(err));
  }, [query]);

  if (loading) return <h1 className='loading-text'>Loading...</h1>;
  if (error) return <pre>Error:{JSON.stringify(error, 'error', 2)}</pre>;
  
  return data ? (
    <div className='App'>
      <h1>Pokedex</h1>
      <form onSubmit={handleSubmit }>
        <input type='text'  placeholder='Enter name or ID' />
        <input className='btn search-btn' type='submit'></input>
      </form>
      <h1>{data.name}</h1>
    </div>
    
      
  ) : (<>
  <pre>There was an issue</pre>
    </>);
    }

    export default App;
