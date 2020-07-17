
import React from 'react';
import { Stats } from 'fs';
class Pokedis extends React.Component{
    state = {
        name: '',
        url: '',
        stats: null
    }
    async componentDidMount(){
      const {name, url} = this.props
      const response = await fetch(url);
      const data = await response.json();
      this.setState({stats: data.ablities})
    }
    render(){
        return (
          <div>
              <h1>{this.state.name}</h1>
              <h1>{this.state.stats.forms.name}</h1>
          </div>
        );
    }
  }

export default Pokedis;