import React from 'react';
import './App.css';
import PokedexHeader from './comp/PokedexHeader';
import {
  Input,
  Segment
} from 'semantic-ui-react'

class App extends React.Component {
  constructor(props){
      super(props)
      this.state={
        name: "Ryan"
      }
      this.onChange = this.onChange.bind(this)
  }
  onChange(event,data){
    this.setState({
      name: data.value
    })
  }
  render(){
  return (
      <div className = "App ">
        <PokedexHeader name = {this.state.name} />
        <Segment  basic> 
           <Input
            label = "Input Pokemon name"
            onChange = {this.onChange} 
            value = {this.state.name}
           /> 
        </Segment>
      </div>
    )
  }
}

export default App;
