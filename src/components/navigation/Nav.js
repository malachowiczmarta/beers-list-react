import React from 'react';
import {Link} from 'react-router-dom';
import "./Nav.css"


function Nav() {
  return (
    <nav>
    <div className="nav-container">
      <p>cheers beers</p>
      <div className="nav-links">
        <Link to="/"><p>Home</p></Link>
        <Link to="/favorite"><p>Favorite</p></Link>
      </div>
      <p>sign in</p>

    </div>
    </nav>
  );
}

export default Nav;
