import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchAndFindByCode } from './utils';

class ProjectDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			project: (this.props.location.state && this.props.location.state.project) || this.props.project,
			exists: true
		}
	}

	componentDidMount() {
		fetchAndFindByCode(this.props.location.pathname.substring(1), (err, data) => {
			if (!err) {
				this.setState({
					project: data
				});
			} else {
				this.setState({
					exists: false
				});
			}
		})
	}

	render() {
		const project = this.state.project;
		return (
			<div>
				{project &&
					<ul>
						<li>{project.name}</li>
						<li>{project.code}</li>
						<li>{project.description}</li>
						<li>{project.contributors}</li>
						<li>{project.startDate}</li>
						<li>{project.endDate}</li>
						<li>{project.steps}</li>
					</ul>
				}
				{!project && !this.state.exists &&
					<p>Pas trouvé</p>
				}
				{!project && this.state.exists &&
					<p>Wait for it</p>
				}
			</div>
		)
	}
}

ProjectDetails.propTypes = {
	location: PropTypes.object,
	project: PropTypes.shape({
		name: PropTypes.string.isRequired,
		code: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		contributors: PropTypes.array.isRequired,
		startDate: PropTypes.string.isRequired,
		endDate: PropTypes.string.isRequired,
		steps: PropTypes.array.isRequired
	}),
};

export default ProjectDetails;