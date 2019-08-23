import React, { useState, useEffect } from 'react';
import Songs from '../Songs/Songs';


const ReleaseDetail = ({ match }) => {


  const [songs, setSongs] = useState([]);
  
  useEffect(() => {
    fetchSongs();
  }, []);

  const fetchSongs = async() => {
    const fetchSongs = await fetch(`http://musicbrainz.org/ws/2/recording?release=${match.params.id}&fmt=json`);
    const songs = await fetchSongs.json();
    setSongs(songs.recordings);
    console.log(songs.recordings);
  };

  return (
      <>
      <Songs songs={songs} />
      </>
  );

};

export default ReleaseDetail;
