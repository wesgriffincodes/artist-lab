import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import styles from './Nav.css';

function Nav() {

  return (
    <nav>
      <h3>Artist search</h3>
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
