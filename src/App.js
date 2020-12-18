import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './styles/App.css';
import { Pokemon, PokedexHome, NotFound404, PokeBattle } from './pages/index';
import ErrorBoundary from './components/ErrorBoundary';

function App({ login }) {
  return (
    <Router>
      <header className='App-header App'>
        {/* TODO: Change from home to a custom welcome message */}
        <h1 className='App-title'>Menu</h1>
        <nav>
          <Link className='App-btn-link-2' to='/'>
            Pokedex
          </Link>
          <Link className='App-btn-link-2' to='/battle'>
            Battle
          </Link>
        </nav>
      </header>

      <Switch>
        <Route exact path='/'>
          <ErrorBoundary>
            <PokedexHome />
          </ErrorBoundary>
        </Route>
        <Route path='/pokemon/:id'>
          <ErrorBoundary>
            <Pokemon />
          </ErrorBoundary>
        </Route>
        <Route path='/battle'>
          <ErrorBoundary>
            <PokeBattle />
          </ErrorBoundary>
        </Route>
        <Route path='*'>
          <ErrorBoundary>
            <NotFound404 />
          </ErrorBoundary>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
