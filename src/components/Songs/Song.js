import React from 'react';
import PropTypes from 'prop-types';

const Song = ({ song }) => {

  return (
    <>
    <h1>{song.title}</h1>
    </>
  );
};

Song.propTypes = {
  song: PropTypes.object,
};

export default Song;
