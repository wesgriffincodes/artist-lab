import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Artist.css';
import Releases from '../Releases/Releases';


const Artist = ({ match }) => {

  const [releases, setReleases] = useState([]);

  useEffect(() => {
    fetchArtist();
  }, []);
    
  const fetchArtist = async() => {
    const fetchArtist = await fetch(`http://musicbrainz.org/ws/2/release?artist=${match.params.id}&fmt=json`);
    const releases = await fetchArtist.json();
    setReleases(releases.releases);
    console.log(releases.releases);
  };

  return (
    <div className={styles.Artist}>
      <Releases artistName={match.params.artistName} releases={releases} />
      <h1>hard code</h1>
    </div>
  );
};

Artist.propTypes = {
  name: PropTypes.string,
  country: PropTypes.string,
  match: PropTypes.object
};

export default Artist;
