import React from 'react';
import Release from './Release';
import PropTypes from 'prop-types';

const Releases = ({ releases, artistName }) => {

  const releasesList = releases.map(release => {
    return <Release artistName={artistName} release={release} key={release.id} />;
  });

  return (
      <>
      {releasesList}
      </>
  );
};

Releases.propTypes = {
  releases: PropTypes.array.isRequired,
  artistName: PropTypes.string
};



export default Releases;

