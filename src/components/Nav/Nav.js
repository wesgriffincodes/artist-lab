import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import styles from './Nav.css';

function Nav() {

  return (
    <nav className={styles.Nav}>
      <h2>Artist search</h2>
      <ul className={styles.Navlink}>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/search'>
          <li>Search</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
