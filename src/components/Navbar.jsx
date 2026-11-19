
import React from 'react';
import { Link } from 'react-router';

function Navbar({ appliedCount }) {

  return (

    <nav className="navbar">

      <Link to="/" className="logo">
        <span className="logo-icon">✣</span> JOBLAB
      </Link>

      <div className="nav-links">

        <Link to="/jobs">
          Find Job
        </Link>

        <Link to="/">
          Home
        </Link>

        <Link to="/applied">
          Applied Jobs
          <span className="nav-count">{appliedCount}</span>
        </Link>

      </div>

    </nav>

  );
}

export default Navbar;
