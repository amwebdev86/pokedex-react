import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './styles/App.css';
import { Pokemon, PokedexHome, NotFound404 } from './pages/index';

function App({ login }) {
  return (
    <Router>
      <header className='App-header App'>
        <h1>Home</h1>
        <nav>
          <Link className='App-btn-link' to='/'>
            Pokedex
          </Link>
        </nav>
      </header>

      <Switch>
        <Route exact path='/'>
          <PokedexHome />
        </Route>
        <Route path='/pokemon/:id'>
          <Pokemon />
        </Route>
        <Route path='*'>
          <NotFound404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
