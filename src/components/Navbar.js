import React, { useState } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Router>
      <nav className="navbar">
        <div className="nav-brand">Your-Project</div>
        <div className={`menu-icon ${showMenu ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className={`nav-links ${showMenu ? 'open' : ''}`}>
          <NavLink exact to="/" activeClassName="active" onClick={toggleMenu}>
            Home
          </NavLink>
          <NavLink to="/news" activeClassName="active" onClick={toggleMenu}>
            News
          </NavLink>
          <NavLink to="/blog" activeClassName="active" onClick={toggleMenu}>
            Blog
          </NavLink>
          <NavLink to="/about" activeClassName="active" onClick={toggleMenu}>
            About
          </NavLink>
        </div>
      </nav>
    </Router>
  );
}

export default Navbar;
