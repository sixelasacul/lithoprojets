import React, { Component } from "react";
import PropTypes from "prop-types";
import { HashRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import withStyles from "@material-ui/core/styles/withStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import GraveStone from "mdi-material-ui/GraveStone";
import List from "./List"
import Details from "./Details"

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
	},
	easterEggButton: {
        '&:hover': {
            backgroundColor: 'transparent'
        }
    }
};

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			countClick: 0,
			countToMamanCoste: 20,
			countToGodMode: 5
		};

		this.decrementToEasterEggs = this.decrementToEasterEggs.bind(this);
	}

	decrementToEasterEggs() {
		if(this.state.countClick < this.state.countToGodMode || this.state.countClick < this.state.countToMamanCoste) {
			const currentCount = this.state.countClick;
			this.setState({
				countClick: currentCount + 1
			});
		}
	}

	render() {
		const { classes } = this.props;
		const { countClick, countToGodMode, countToMamanCoste } = this.state;
		const godMode = countClick >= countToGodMode;
		const mamanCoste = countClick >= countToMamanCoste;

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
								<Button
									onClick={this.decrementToEasterEggs}
									className={classes.easterEggButton}>
									<Icon />
								</Button>
								<IconButton href="https://github.com/sixelasacul/lithoprojets" target="_blank">
									<FontAwesomeIcon icon={{ prefix: "fab", iconName: "github" }} />
								</IconButton>
							</ToolBar>
						</AppBar>
						<Switch>
							<Route path="/:id" component={Details} />
							<Route path="/" render={(props) => <List {...props} displayNSFWProjects={godMode} displayEasterEggs={mamanCoste} />} />
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
