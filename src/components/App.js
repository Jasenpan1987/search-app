import React, { Component } from 'react';
import './style.css';

import Search from "./Search";
import Result from "./Result";

class App extends Component {
  render() {
    return (
      <div className="mui-container container">
        <div className="mui-panel">
          <h3 className="mui--text-display1 mui--text-center">Search App</h3>
            <Search />
            
            <div className="">
              <Result />
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
