import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import withWidth from "@material-ui/core/withWidth";
import SimpleListItem from "./SimpleListItem";
import EasterEggListItem from "./EasterEggListItem";
import { fetchData } from "./utils/fetch";

class ProjectList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: []
		};
	}

	componentDidMount() {
		this.fetchProjects((data) => {
			this.setState({
				projects: data
			});
		})
	}

	fetchProjects(callback) {
		fetchData(callback, "https://raw.githubusercontent.com/sixelasacul/lithoprojets/master/data/projects.json");
	}

	prepareProjects(initialList, displayNSFWProjects, easterEggs) {
		return initialList.filter(project => (displayNSFWProjects || project.displayed) && (easterEggs || !project.isEasterEgg)).sort((projectA, projectB) => {
			if(projectA.name.toLowerCase() < projectB.name.toLowerCase())
				return -1
			if(projectA.name.toLowerCase() > projectB.name.toLowerCase())
				return 1
			return 0
		})
	}

	render() {
		const { displayNSFWProjects, displayEasterEggs } = this.props;
		const projects = this.prepareProjects(this.state.projects, displayNSFWProjects, displayEasterEggs);
		const titleVariant = this.props.width === "xs" ? "h3" : "h1";

		return (
			<Grid container justify="center" direction="column" alignItems="center">
				<Grid item lg={6} md={6} sm={8} xs={10}>
					<Typography variant={titleVariant} gutterBottom>
						Lithoprojets
					</Typography>
				</Grid>
				<Grid item lg={6} md={6} sm={8} xs={10}>
					{(projects && projects.length > 0) && (
						<Paper>
							<List>
								{projects.map(project => {
									return project.isEasterEgg ? <EasterEggListItem project={project} key={project.code}/> : <SimpleListItem project={project} key={project.code}/>
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

export default withWidth()(ProjectList);