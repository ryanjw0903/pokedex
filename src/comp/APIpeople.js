import React from 'react';
import {
    Segment,
    Header
    } from 'semantic-ui-react';
const APIpeople = ({person}) => {
    return (
    <Segment basic inverted>
        <Header>
         <div>{person}</div>
        </Header>
    </Segment>
    )
  }
export default APIpeople