import React from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';
import TokenService from '../services/token-service'

class NavBar extends React.Component {

    handleLogoutClick = () => {
    }

    renderLogoutLink() {
        return (
          <div className='Header__logged-in'>
            <NavLink
              onClick={this.handleLogoutClick}
              to='/'>
              <li>Logout</li>
            </NavLink>
          </div>
        )
      }

      renderLoginLink() {
        return (
          <div className='Header__not-logged-in'>
            {/* <Link
              to='/register'>
              Register
            </Link> */}
           
            <NavLink
              to='/login-form'>
              <li>Login</li>
            </NavLink>
          </div>
        )
      }
    
    render() {
        return (
            
                <nav className="main-nav">
                <ul>
                    <NavLink to="/home"><li>Home</li></NavLink> 
                    <NavLink to="/"><li>About</li></NavLink> 
                    <NavLink to="/create-catalogue"><li>Create Catalogue</li></NavLink> 
                    <NavLink to="/add-music"><li>Add Music</li></NavLink> 
                    <NavLink to="/search-form"><li>Search for Music</li></NavLink> 
                    {TokenService.hasAuthToken()
                        ? this.renderLogoutLink()
                        : this.renderLoginLink()}
                </ul>
            </nav>
            
            
        );
    }
}

export default NavBar;