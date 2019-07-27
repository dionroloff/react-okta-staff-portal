import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Security, SecureRoute, ImplicitCallback } from "@okta/okta-react";
import "./App.css";

import NavBar from "./components/Layout/NavBar";
import Home from "./components/Pages/Home";
import Staff from "./components/Pages/Staff";
import Login from "./components/Auth/Login";

function onAuthRequired({ history }) {
  history.push("/login");
}

class App extends Component {
  render() {
    return (
      <Router>
        <Security
          issuer="https://dev-548277.okta.com/oauth2/default"
          client_id="0oa10ic0rsMNB1VNw357"
          redirect_uri={window.location.origin + "/implicit/callback"}
          onAuthRequired={onAuthRequired}
        >
          <div className="App">
            <NavBar />
            <div className="container">
              <Route path="/" exact={true} component={Home} />
              <SecureRoute path="/staff" exact={true} component={Staff} />
              <Route
                path="/login"
                render={() => <Login baseUrl="https://dev-548277.okta.com/" />}
              />
              <Route path="/implicit/callback" component={ImplicitCallback} />
            </div>
          </div>
        </Security>
      </Router>
    );
  }
}

export default App;
