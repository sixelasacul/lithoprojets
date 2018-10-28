import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

ProjectTitle.propTypes = {
	path: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired
};

function ProjectTitle({path, name}) {
	return (
		<Link to={path}>{name}</Link>
	)
}

export default ProjectTitle;