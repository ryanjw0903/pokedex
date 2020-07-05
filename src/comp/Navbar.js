import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component{
    render(){
    return (
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
    }
  }
export default Navbar