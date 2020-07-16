
import React from 'react';
class Pokedis extends React.Component{
    state = {
        name: ''
    }
    render(){
        const name = this.props
        return (
          <div>
              <h1>{name}</h1>
              <img src='https://img.pokemondb.net/sprites/black-white/normal/zubat.png'/>

          </div>
        );
    }
  }

export default Pokedis;