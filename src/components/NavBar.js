import React from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {     
    
    render() {
        return (
            
                <nav className="main-nav">
                <ul>
                    <NavLink to="/home"><li>Home</li></NavLink> 
                    <NavLink to="/"><li>About</li></NavLink> 
                    <NavLink to="/add-music"><li>Add Music</li></NavLink> 
                    <NavLink to="/search-form"><li>Search for Music</li></NavLink> 
                   
                </ul>
            </nav>
            
            
        );
    }
}

export default NavBar;