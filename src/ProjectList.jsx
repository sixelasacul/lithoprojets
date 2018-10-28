import React, { Component } from 'react';
import ProjectTitle from './ProjectTitle';
import fs from 'fs'

class ProjectList extends Component {
	constructor(props) {
		super(props);
		this.setState({
			projects: []
		});
	}

	componentDidMount() {
		this.fetchData();
	}

	fetchData() {
		fs.readFile('../data/projects.json', (err, data) => {
			if(err) {
				console.error(err);
				return;
			}
			console.log(data);
			this.setState({
				projects: JSON.parse(data)
			})
		})
	}

	render() {
		return (
			<div>
				<ProjectTitle path='allo' name='ALLOOO' />
			</div>
		);
	}
}

export default ProjectList;