import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './styles/App.css';
import { Pokemon, PokedexHome, NotFound404 } from './pages/index';

function App({ login }) {
  return (
    <Router>
      <header className='App-header App'>
        {/* TODO: Change from home to a custom welcome message */}
        <h1 className='App-title'>Home</h1>
        <nav>
          <Link className='App-btn-link-2' to='/'>
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
