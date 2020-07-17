import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Pokedex from './comp/Pokedex';
import APIpeople from './comp/APIpeople';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from './comp/Navbar';
import Home from './comp/Home';
class App extends React.Component {

  render(){
  return (
    <Router>
      <div className = "App ">
          <Navbar></Navbar>
          <Switch>
            <Route path = "/" exact component={Home}/>
            <Route path = "/APIpeople" component={APIpeople}/>
            <Route path = "/Pokedex" component={Pokedex} />
          </Switch>
      </div>
      </Router>
    )
  }
}

export default App;
