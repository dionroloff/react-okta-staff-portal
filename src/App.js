import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./components/Layout/NavBar";
import Home from './components/Pages/Home';
import Staff from './components/Pages/Staff';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route path="/" exact={ true } component={ Home } />
          <Route path="/staff" exact={ true } component={ Staff } />
        </div>
      </Router>
    );
  }
}

export default App;
