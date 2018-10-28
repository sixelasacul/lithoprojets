import React, { Component } from 'react';
import ProjectTitle from './ProjectTitle';
import { fetchData } from './utils';

class ProjectList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: []
		};
	}

	componentDidMount() {
		fetchData((data) => {
			this.setState({
				projects: data
			});
		})
	}

	render() {
		return (
			<div>
				{(this.state.projects && this.state.projects.length > 0) && (
					<div>
						<ul>
							{this.state.projects.map(project => {
								return (
									<li key={project.code}>
										<ProjectTitle project={project} />
									</li>
								)
							})}
						</ul>
					</div>
				)}
			</div>
		);
	}
}

export default ProjectList;