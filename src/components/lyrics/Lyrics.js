import React from 'react';
import PropTypes from 'prop-types';
import styles from './Lyrics.css';

const Lyrics = ({ lyrics, artistName, title }) => {

  return (
    <div className={styles.Lyrics}>
      <h1>{`"${title}"`}</h1>
      <h3>{artistName}</h3>
      <p>{lyrics}</p>
    </div>
  );


};

Lyrics.propTypes = {
  lyrics: PropTypes.string,
  artistName: PropTypes.string
};

export default Lyrics;
