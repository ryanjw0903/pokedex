
import React from 'react';
class Pokedis extends React.Component{
    state = {
        stat: "",
        statImg: null,
        statType: [],
        url: " "
    }
    async componentDidMount(){
      const nurl = this.props.url
      const response = await fetch(nurl);
      const data = await response.json();
      const statType = data.types.map(type => type.type.name);
      const id = data.order
      this.setState({
        stat: data.name,
        id,
        statType,
        statImg: data.sprites.front_shiny,
        url: nurl
      })
    }
    render(){
        return (
          <div class ="col-md-3 col-sm-6 mb-5">
          <div class="card">
            <div class="card-header">
              <p>{this.state.stat}</p>
              <div class = 'row'>
                <img src={this.state.statImg} classname="rounded float-left"/>
                <div class = 'col'>
                  {this.state.statType.map(type =>(
                    <p>{type}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          </div>
        );
    }
  }

export default Pokedis;