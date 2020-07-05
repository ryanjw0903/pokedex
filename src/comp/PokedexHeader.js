
import React from 'react';
import {
    Image,
    Segment,
    Header
    } from 'semantic-ui-react';
class PokedexHeader extends React.Component{
    render(){
    return (
    <Segment basic inverted>
        <Header textAlign = {'center'}as='h1'>This is a header for Ryan Pokedex</Header>
        <Image  src = {'logo512.png'} size = {"small"} centered/>
        <Header textAlign = {'center'} as='h3'>Author: Ryan Wenham</Header>
    </Segment>
    )
    }
  }
export default PokedexHeader