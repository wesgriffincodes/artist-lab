import React from 'react';
import Song from './Song';
import PropTypes from 'prop-types';

const Songs = ({ songs, artistName }) => {

  const songList = songs.map(song => {
    return <Song artistName={artistName} song={song} key={song.id} />;
  });

  return (
      <>
      {songList}
      </>
  );
};

Songs.propTypes = {
  songs: PropTypes.array.isRequired,
  artistName: PropTypes.string
};

export default Songs;
