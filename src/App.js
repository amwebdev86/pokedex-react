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

    console.log(newQuery);

  };
  
  
  useEffect(() => {
    setLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${query}/`)
      .then((response) => {
        if (!response.ok) {
          let myError = new Error('Not Found');
          throw myError;
        }
        return response.json();
      })
      .then(setData)
      .then(setLoading(false))
      .catch(err => {
        setError(err);
        console.error(err);
      });
  }, [query]);
  if (loading) return <h1 className='loading-text'>Loading...</h1>;
  if (error) return <h1>Error:{JSON.stringify(error, null, 2)}</h1>;
  // console.log(`the query: ${query}`);
  // console.dir(data)
  return (
    <div className='App'>
      <h1>Pokedex</h1>
      <form onSubmit={handleSubmit }>
        <input type='text'  placeholder='Enter name or ID' />
        <input className='btn search-btn' type='submit'></input>
      </form>
    </div>
    
      
  );
}

export default App;
