import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ProjectListItem from './ProjectListItem';
import { fetchData } from './utils/fetch';

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
		const { projects } = this.state;

		return (
			<Grid container justify="center" direction="column" alignItems="center">
				<Grid item>
					<Typography variant="h1" gutterBottom>
						Lithoprojets
					</Typography>
				</Grid>
				<Grid item>
					{(projects && projects.length > 0) && (
						<Paper>
							<List>
								{projects.map(project => {
									return <ProjectListItem project={project} icon="cross" key={project.code} />
								})}
							</List>
						</Paper>
					)}
				</Grid>
			</Grid>
		);
	}
}

export default ProjectList;