import React from 'react';
import {NavLink, Link} from 'react-router-dom'

const NavBar = () => {
    return(
        <nav className= "nav-wrapper red darken-3">
            <div className="container">
                <a className ="brand-logo">PokeTimes</a>
                <ul className="right">
                    <li><Link link to="/">Home</Link></li>
                    <li><Link link to="/about">About</Link></li>
                    <li><Link link to= "/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
