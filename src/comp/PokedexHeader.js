
import React from 'react';
import { Input, Segment } from 'semantic-ui-react';
class PokedexHeader extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      pokeName: null
    }
    this.onChange=this.onChange.bind(this)
  }
  onChange(event,data) {
    this.setState({
      pokeName: data.value
    })
  }

    render(){
    return (
      <div>
      <Segment>
      <Input
        label = {"Input Pokemon Name"}
        onChange={this.onChange}
        value = {this.state.pokeName}
      />
      </Segment>
      <h1>{this.state.pokeName}</h1>
      </div>
    );
    }
  }
export default PokedexHeader