import React from 'react';
import PropTypes from 'prop-types';

const Release = ({ release }) => {


  return (
    <div>
      
      <h1>{release.title}</h1>
    </div>
  );
};

Release.propTypes = {
  release: PropTypes.object.isRequired
};

export default Release;
