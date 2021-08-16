import React, { Component } from 'react';
import Search from '../Search/Search'
import Trending from '../Trending/Trending';
export default class App extends Component {
  render() {
    return (
      <main className='App'>
        <Search />
        <Trending />
      </main>
    );
  }
}