import React, { Component } from 'react';
import Search from '../Search/Search'
import Trending from '../Trending/Trending';
import { Route, Switch } from 'react-router-dom';
export default class App extends Component {
  render() {
    return (
      <main className='App'>
        <Route 
          path={'/'}
          component={Search}
        />
        <Route 
          exact
          path={'/trending'}
          component={Trending}
        />
      </main>
    );
  }
}