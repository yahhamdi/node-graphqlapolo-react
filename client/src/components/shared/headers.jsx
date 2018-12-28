import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isTokenExpired } from '../../helper/jwtHelper';

const Header = ({ token }) => (

  <div className="topnav app">
    <Link to="/">List Photo</Link>
    <Link to="/add/photo">Add Photo</Link>
    <Link to="/user"> List User</Link>
    {!token && isTokenExpired(token) && <Link to="/add/user">Signup</Link>}
    {!token && isTokenExpired(token) && <Link to="/login/user">Log in</Link>}
    {token && <Link to="/profil">Profile</Link>}
    {token && <Link to="/">Log out</Link>}
  </div>
);
Header.propTypes = {
  token: PropTypes.string.isRequired,
};
export default Header;
