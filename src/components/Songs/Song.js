import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Song = ({ song, artistName }) => {

  return (
    <>
    <Link to={`/lyrics/${artistName}/${song.title}/${song.id}`}>
      <h1>{song.title}</h1>
    </Link>
    </>
  );
};

Song.propTypes = {
  song: PropTypes.object,
  artistName: PropTypes.string
};

export default Song;
