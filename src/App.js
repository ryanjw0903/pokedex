import React from 'react';
import './App.css';
import PokedexHeader from './comp/PokedexHeader';
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
            <Route path = "/PokedexHeader" component={PokedexHeader} />
          </Switch>
      </div>
      </Router>
    )
  }
}

export default App;
