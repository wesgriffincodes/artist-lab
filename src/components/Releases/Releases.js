import React from 'react';
import Release from './Release';
import PropTypes from 'prop-types';

const Releases = ({ releases }) => {

  const releasesList = releases.map(release => {
    return <Release release={release} key={release.id} />;
  });

  return (
      <>
      {releasesList}
      </>
  );
};

Releases.propTypes = {
  releases: PropTypes.array.isRequired
};



export default Releases;

