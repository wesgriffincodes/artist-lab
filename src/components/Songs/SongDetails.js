import React, { useState, useEffect } from 'react';
import Lyrics from '../lyrics/Lyrics';
import PropTypes from 'prop-types';

const SongDetail = ({ match }) => {

  const [lyrics, setLyrics] = useState('');

  useEffect(() => {
    fetchLyrics();
  }, []);

  const fetchLyrics = async() => {
    const fetchLyrics = await fetch(`https://api.lyrics.ovh/v1/${match.params.artistName}/${match.params.title}`);
    const { lyrics } = await fetchLyrics.json();
    setLyrics(lyrics);
    console.log(lyrics);
  };

  return (
      <>
      <Lyrics artistName={match.params.artistName} lyrics={lyrics} title={match.params.title} />
      </>
  );
};

SongDetail.propTypes = { 
  match: PropTypes.object,
};

export default SongDetail;
