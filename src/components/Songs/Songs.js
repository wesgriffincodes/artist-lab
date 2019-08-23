import React from 'react';
import Song from './Song';
import PropTypes from 'prop-types';

const Songs = ({ songs }) => {

  const songList = songs.map(song => {
    return <Song song={song} key={song.id} />;
  });

  return (
      <>
      {songList}
      </>
  );
};

Songs.propTypes = {
  songs: PropTypes.array.isRequired
};

export default Songs;
