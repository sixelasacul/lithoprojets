import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

ProjectTitle.propTypes = {
	project: PropTypes.shape({
		name: PropTypes.string.isRequired,
		code: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		contributors: PropTypes.array.isRequired,
		startDate: PropTypes.string.isRequired,
		endDate: PropTypes.string.isRequired,
		steps: PropTypes.array.isRequired
	}).isRequired,
};

function ProjectTitle({project}) {
	return (
		<Link to={{
			pathname: `/${project.code}`,
			state: {project: project}
		}}>{project.name}</Link>
	)
}

export default ProjectTitle;