import React from 'react';
import '../App/App.css';
import '../App/BurgerMenu.css';
import { slide as Menu } from 'react-burger-menu';

class NavBar extends React.Component {     
   
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