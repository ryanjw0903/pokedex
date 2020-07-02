import React from 'react';
import './App.css';
import PokedexHeader from './comp/PokedexHeader';
import {
  Input,
  Segment
} from 'semantic-ui-react'
import APIpeople from './comp/APIpeople';

class App extends React.Component {
  constructor(props){
      super(props)
      this.state={
        name: "Ryan",
        person: null,
      }
      this.onChange = this.onChange.bind(this)
  }
  onChange(event,data){
    this.setState({
      name: data.value
    })
  }
   async componentDidMount(){
        const url = "https://api.randomuser.me/"
        const response = await fetch(url);
        const data = await response.json();
        this.setState({person: data.results[0]})
        console.log(data)
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
        {!this.state.person ? (<div>Loading</div>) : 
        (
        <div>
          <APIpeople person={this.state.person.name.first}/>
          <APIpeople person={this.state.person.name.last}/>
          <img src = {this.state.person.picture.large}/>
        </div>
        )}
      </div>
    )
  }
}

export default App;
