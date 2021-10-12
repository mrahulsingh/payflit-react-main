import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <ul>
          <li>
            <Link to="/">
              <button type="button" class="btn btn-link">Home</button>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <button type="button" class="btn btn-link">About</button>
            </Link>
          </li>
        </ul>
    )
}

export default Navbar;
