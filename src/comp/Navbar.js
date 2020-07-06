import React from 'react';
import {Nav} from 'react-bootstrap';

class Navbar extends React.Component{
    render(){
    return (
        <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/APIpeople">APIPeople</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/PokedexHeader">Pokedex</Nav.Link>
        </Nav.Item>
      </Nav>

    )
    }
  }
export default Navbar
/*
  <nav>
            <ul className = "nav-links">
                <Link  to ="/">
                    <li>Home</li>
                </Link>
                <Link  to ="/APIpeople">
                    <li>APIPeople</li>
                </Link>
                <Link to="PokedexHeader">
                    <li>Pokedex</li>
                </Link>
            </ul>
        </nav>
    )
    */