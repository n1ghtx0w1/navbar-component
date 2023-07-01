import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <Router>
      <nav className="navbar">
      <div className="nav-brand">Your-Project</div> {/* Change brand */}
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/news" activeClassName="active">
          News
        </NavLink>
        <NavLink to="/blog" activeClassName="active">
          Blog
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
      </nav>
    </Router>
  );
}

export default Navbar;
