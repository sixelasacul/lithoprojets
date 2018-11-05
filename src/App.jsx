import React, { Component } from "react";
import PropTypes from "prop-types";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ProjectList from "./ProjectList"
import ProjectDetails from "./ProjectDetails"

const styles = {
	appBar: {
		marginBottom: "20px"
	}
};

class App extends Component {
	render() {
		return (
			<>
				<AppBar position="static" color="secondary" classes={{ root: this.props.classes.appBar }}>
					<ToolBar>
						<Typography variant="h6">
							Lithoprojets
						</Typography>
						{/* <Button>
							<Typography variant="h6">
								Github
							</Typography>
						</Button> */}
					</ToolBar>
				</AppBar>
				<HashRouter basename="/">
					<Switch>
						<Route path="/:id" component={ProjectDetails} />
						<Route path="/" component={ProjectList} />
						<Redirect to="/" />
					</Switch>
				</HashRouter>
			</>
		);
	}
}

App.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
