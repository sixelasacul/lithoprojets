import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ProjectListItem from "./ProjectListItem";
import { fetchData } from "./utils/fetch";

class ProjectList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: [],
			easterEggs: []
		};
	}

	componentDidMount() {
		this.fetchProjects((data) => {
			this.setState({
				projects: data
			});
		})
		if(this.props.displayEasterEggs) {
			this.fetchEasterEggs((data) => {
				this.setState({
					easterEggs: data
				})
			})
		}
	}

	fetchProjects(callback) {
		fetchData(callback, "https://raw.githubusercontent.com/sixelasacul/lithoprojets/master/data/projects.json");
	}

	fetchEasterEggs(callback) {
		fetchData(callback, "https://raw.githubusercontent.com/sixelasacul/lithoprojets/master/data/projects.json");
	}

	prepareProjects(initialList, displayNSFWProjects, easterEggs) {
		const list = easterEggs && easterEggs.length !== 0 ? [...initialList, ...easterEggs] : initialList;
		return list.filter(project => displayNSFWProjects || project.displayed).sort((projectA, projectB) => {
			if(projectA.name.toLowerCase() < projectB.name.toLowerCase())
				return -1
			if(projectA.name.toLowerCase() > projectB.name.toLowerCase())
				return 1
			return 0
		})
	}

	render() {
		const { displayNSFWProjects } = this.props;
		const projects = this.prepareProjects(this.state.projects, displayNSFWProjects);

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

ProjectList.propTypes = {
	displayNSFWProjects: PropTypes.bool,
	displayEasterEggs: PropTypes.bool
};

ProjectList.defaultProps = {
	displayNSFWProjects: false,
	displayEasterEggs: false
};

export default ProjectList;