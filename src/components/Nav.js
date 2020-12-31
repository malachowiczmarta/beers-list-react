import React from 'react';
import {Link} from 'react-router-dom';


function Nav() {
  return (
    <nav>
    <div className="nav-container">
      <Link to="/"><p>cheers beers</p></Link>
      <p>sign in</p>

    </div>
    </nav>
  );
}

export default Nav;
