import React, { Component } from "react";
import PropTypes from "prop-types";
import { HashRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import withStyles from "@material-ui/core/styles/withStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import GraveStone from "mdi-material-ui/GraveStone";
import ProjectList from "./ProjectList"
import ProjectDetails from "./ProjectDetails"

const styles = {
	appBar: {
		marginBottom: "20px"
	},
	root: {
		flexGrow: 1,
	},
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	}
};

class App extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div>
				<HashRouter basename="/">
					<>
						<AppBar position="static" color="secondary" classes={{ root: classes.appBar }}>
							<ToolBar>
								<IconButton component={Link} to="/" replace>
									<GraveStone />
								</IconButton>
								<Typography variant="h6" className={classes.grow}>
									Lithoprojets
							</Typography>
								<IconButton href="https://github.com/sixelasacul/lithoprojets" target="_blank">
									<FontAwesomeIcon icon={{ prefix: "fab", iconName: "github" }} />
								</IconButton>
							</ToolBar>
						</AppBar>
						<Switch>
							<Route path="/:id" component={ProjectDetails} />
							<Route path="/" component={ProjectList} />
							<Redirect to="/" />
						</Switch>
					</>
				</HashRouter>
			</div>
		);
	}
}

App.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
