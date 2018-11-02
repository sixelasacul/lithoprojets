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
				<Grid item>
					<Typography variant="h1" gutterBottom>
						Lithoprojets
					</Typography>
				</Grid>
				<Grid item>
					{(this.state.projects && this.state.projects.length > 0) && (
						<Paper>
							<List>
								{this.state.projects.map(project => {
									return (
										<Link key={project.code} to={{
											pathname: `/${project.code}`,
											state: { project: project }
										}}>
											<ListItem button>
												<ListItemIcon>
													<Typography variant="h4">
														<FontAwesomeIcon icon="cross" />
													</Typography>
												</ListItemIcon>
												<ListItemText>
													<Typography variant="h4" noWrap>
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