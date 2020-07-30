import React from 'react';
import PropTypes from 'prop-types';
import ReposItem from './ReposItem';

const Repos = ({ repos }) => {
  return repos.map((repo) => <ReposItem repo={repo} key={repo.id} />);
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
