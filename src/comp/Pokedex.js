
import React from 'react';
import Pokedis from './Pokedis';
class Pokedex extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      load: true,
      pokemon: null
    }
  }
async componentDidMount(){
    const url = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=00"
    const response = await fetch(url);
    const data = await response.json();
    this.setState({pokemon: data.results, load: false})
}
  render(){
    return (
      <div>
      {this.state.load ? <div>woo</div> :
            (
            <div class = "row">
              {this.state.pokemon.map(pokemon=>(
                <Pokedis
                  key = {pokemon.name}
                  name = {pokemon.name}
                  url = {pokemon.url}
                />
              ))}
            </div>
            )}
      </div>
    );
    }
  }
export default Pokedex