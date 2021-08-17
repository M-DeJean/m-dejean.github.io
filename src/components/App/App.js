import React, { Component } from 'react';
import Header from '../Header/Header'
import Giphy from '../Giphy/Giphy';
import Trending from '../Trending/Trending';
import Details from '../Giphy/Details'
import { Route } from 'react-router-dom';
export default class App extends Component {
  render() {
    return (
      <main className='App'>
        <Header />
        <Route
          exact 
          path={'/search'}
          component={Giphy}
        />
        <Route 
          exact
          path={'/trending'}
          component={Trending}
        />
        <Route 
          exact
          path={'/:url/:id'}
          component={Details}
        />
      </main>
    );
  }
}