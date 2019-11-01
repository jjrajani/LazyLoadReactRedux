import React from "react";
// import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

// import ./style.scss

/**
 * Nav
 * @param {NavProps} props
 */
const Nav = props => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Single Level Lazy Load</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

Nav.defaultProps = {};

/**
 * NavProps
 * @typedef {Object} NavProps
 */
Nav.propTypes = {};

export default Nav;
