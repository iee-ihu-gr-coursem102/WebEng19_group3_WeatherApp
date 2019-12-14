import React from 'react';
import './App.css';
import Login from './login_page/Login'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
      return(<Router>
        <div className="App">
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
                <Route exact path='/' component={Login} />
                <Route path="/sign-in" component={Login} />
              </Switch>
            </div>
          </div>
        </div></Router>
      )
  }
}

export default App
