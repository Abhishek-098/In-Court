import React from 'react';
import { NavLink } from 'react-router-dom';
import './CSS/Navbar.css';


// RESPONSIBLE FOR NAVBAR ON TOP OF EACH PAGE 

const Navbar = () =>{
    return(<>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to ='/'>LOGO</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav ">
                            <NavLink exact activeClassName ="menu_active"  className="nav-link" to='/'>Home</NavLink>
                            <NavLink exact activeClassName ="menu_active"  className="nav-link" to ='/today-details'>Today's Details</NavLink>
                            <NavLink exact activeClassName ="menu_active"  className="nav-link" to ='/add-client'>Add Clients</NavLink>
                            <NavLink exact activeClassName ="menu_active"  className="nav-link" to ='/log-in'>LogIn</NavLink>
                        </div>
                        </div>
                    </div>
                </nav>
    </>);
}

export default Navbar;