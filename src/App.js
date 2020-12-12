import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import { Pokemon, PokedexHome, NotFound404 } from './pages';

function App({ login }) {
  return (
    <Router>
      <h1>Home</h1>
      <nav>
        <Link to='/'>Home</Link>

        <Link to='/pokemon'>pokemon</Link>
      </nav>
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
