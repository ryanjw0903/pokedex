
import React from 'react';
import { Input, Segment } from 'semantic-ui-react';
import Pokedis from './Pokedis';
class Pokedex extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      //pokeName: null,
      load: true,
      pokemon: null
    }
   // this.onChange=this.onChange.bind(this)
  }
  /*
  onChange(event,data) {
    this.setState({
      pokeName: data.value
    })
  }
   <Segment>
      <Input
        label = {"Input Pokemon Name"}
        onChange={this.onChange}
        value = {this.state.pokeName}
      />
      </Segment>
      <h1>{this.state.pokeName}</h1>
  */
async componentDidMount(){
    const url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
    const response = await fetch(url);
    const data = await response.json();
    this.setState({pokemon: data['results'], load: false})
}
  render(){
    return (
      <div>
      {this.state.load ? <div>None</div> :
            (
            <div>
              {this.state.pokemon.map(pokemon=>(
                <Pokedis
                  key = {pokemon.name}
                  name = {pokemon.name}
                />
              ))}
            </div>
            )}

      </div>
    );
    }
  }
export default Pokedex