import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
			<Grid container justify="center" direction="column" alignItems="center">
				<Grid item xs={6}>
					<Typography variant="h1" gutterBottom>
						Lithoprojets
					</Typography>
				</Grid>
				<Grid item xs={3}>
					{(this.state.projects && this.state.projects.length > 0) && (
						<Paper>
							<List>
								{this.state.projects.map(project => {
									return (
										<Link to={{
											pathname: `/${project.code}`,
											state: { project: project }
										}}>
											<ListItem button key={project.code}>
												<ListItemIcon>
													<Typography variant="h4">
														<FontAwesomeIcon icon="cross" />
													</Typography>
												</ListItemIcon>
												<ListItemText>
													<Typography variant="h4">
														{project.name}
													</Typography>
												</ListItemText>
											</ListItem>
										</Link>
									)
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