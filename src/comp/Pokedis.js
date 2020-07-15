
import React from 'react';
class Pokedis extends React.Component{
    state = {
        name: ''
    }

    render(){
        const name = this.props
        return (
          <div className='row'>
              <h1>{name}</h1>
          </div>
        );
    }
  }

export default Pokedis;