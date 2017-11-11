import React, { Component } from 'react';
import SearchBar from '../containers/searchBar';
import WeatherList from '../containers/WeatherList';

export default class App extends Component {
  render() {
    return (
      <div>
      	<nav className="navbar navbar-light bg-light">
     	 	<SearchBar />
		</nav>
      	<WeatherList />
      </div>
    );
  }
}
