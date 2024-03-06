// import { Link } from 'react-router-dom';
import { BrowserRouter as NavLink} from 'react-router-dom';
import '../Style/Navbar.css'
import React from 'react';




const Navbar = () => {
  return (
    <div>
       <nav>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;
