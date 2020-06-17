import React from 'react';
import './App.css';
import PokedexHeader from './comp/PokedexHeader';

class App extends React.Component {
  constructor(props){
      super(props)
      this.state={
        name: "Ryan"
      }
  }
  render(){
  return (
      <div className = "App ">
        <PokedexHeader name = {this.state.name} />
      </div>
    )
  }
}

export default App;
