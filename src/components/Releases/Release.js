import React from 'react';
import PropTypes from 'prop-types';
import imageReplace from '../../assets/parental.png';
import { Link } from 'react-router-dom';


const Release = ({ release }) => {

  const coverArt = release['cover-art-archive'].front ? 
    `http://coverartarchive.org/release/${release.id}/front-250` : 
    imageReplace;




  return (
    <>
    <Link to={`/songs/${release.title}/${release.id}`}>
      <h1>{release.title}</h1>
    </Link>
      <img src={coverArt} />
      </>
  );
};

Release.propTypes = {
  release: PropTypes.object,
  artist: PropTypes.object
  
};

export default Release;
