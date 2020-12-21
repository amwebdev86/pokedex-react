import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './styles/App.css';
import { Pokemon, PokedexHome, NotFound404, PokeBattle } from './pages';
import ErrorDisplay from './components/ErrorDisplay';
import ErrorBoundary from './components/ErrorBoundary';

function App({ login }) {
  return (
    <ErrorBoundary component={ErrorDisplay}>
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
            <PokedexHome />
          </Route>
          <Route path='/pokemon/:id'>
            <Pokemon />
          </Route>
          <Route path='/battle'>
            <PokeBattle />
          </Route>
          <Route path='*'>
            <NotFound404 />
          </Route>
        </Switch>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
