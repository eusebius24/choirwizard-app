import React from 'react';
import './App.css';
import './BurgerMenu.css';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

class NavBar extends React.Component {     
    // showSettings(event) {
    //     event.preventDefault();
    // }
    render() {
        
        return (
            <Menu>
                <a id="home" className="menu-item" href="/home">Home</a>
                <a id="about" className="menu-item" href="/">About</a>
                <a id="add-music" className="menu-item" href="/add-music">Add Music</a>
                <a id="search" className="menu-item" href="/search-form">Search for Music</a>
            </Menu>
            
            
        );
    }
}

export default NavBar;