import React from 'react';
import PropTypes from 'prop-types';
import styles from './Lyrics.css';

const Lyrics = ({ lyrics }) => {

  return (
    <div className={styles.Lyrics}>
      <p>{lyrics}</p>
    </div>
  );


};

Lyrics.propTypes = {
  lyrics: PropTypes.string
};

export default Lyrics;
