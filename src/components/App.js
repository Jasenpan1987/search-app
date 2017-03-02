import React, { Component } from 'react';
// import './App.css';

import Search from "./Search";
import Result from "./Result";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Search />
        <Result />
      </div>
    );
  }
}

export default App;
