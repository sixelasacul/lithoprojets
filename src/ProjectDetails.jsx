import React, { Component } from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Slider from "@material-ui/lab/Slider";
import { withStyles } from "@material-ui/core/styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { fetchAndFindByCode } from "./utils";

const styles = {
	textField: {
		textAlign: "center"
	},
	slider: {
		padding: "22px 0px"
	},
	paper: {
		margin: "40px 0px",
		padding: "25px"
	}
};

class ProjectDetails extends Component {
	constructor(props) {
		super(props);
		const project = (this.props.location.state && this.props.location.state.project);
		const value = (this.props.location.hash && this.props.location.hash.substring(1)) || 0;
		this.state = {
			project: project,
			exists: true,
			value: parseInt(value),
			error: false
		}
		this.dateOptions = {
			year: "numeric",
			month: "long"
		};
		this.handleSliderDragged = this.handleSliderDragged.bind(this);
		this.handleTextFieldChanged = this.handleTextFieldChanged.bind(this);
		this.formatDateString = this.formatDateString.bind(this);
	}

	componentDidMount() {
		if (!this.state.project) {
			fetchAndFindByCode(this.props.location.pathname.substring(1), (err, data) => {
				if (!err) {
					this.setState({
						project: data
					}, () => {
						document.title = this.state.project.name
					});
				} else {
					this.setState({
						exists: false
					});
				}
			})
		}
	}

	handleSliderDragged(event, value) {
		this.setState({
			value
		});
	}

	handleTextFieldChanged(event) {
		const newValue = parseInt(event.target.value);
		if(newValue < this.state.project.steps.length && newValue >= 0) {
			this.setState({
				value: parseInt(event.target.value),
				error: false
			});
		} else {
			this.setState({
				error: true
			});
		}
	}

	formatDateString(date) {
		return Date.parse(date).toLocaleDateString("fr-FR", this.options);
	}

	render() {
		const { project, value, error } = this.state;
		const { classes } = this.props;
		return (
			<div>
				{project &&
					<Grid container justify="center" alignItems="center" direction="column">
						<Grid item xs={6}>
							<Typography variant="h1" gutterBottom>
								{project.name}
							</Typography>
						</Grid>
						<Grid item xs={6}>
							<Paper className={classes.paper}>
								<Typography variant="subtitle2" align="left">
									Description
								</Typography>
								<Typography variant="h6" align="right">
									{project.description}
								</Typography>
								<Typography variant="subtitle2" align="left">
									Contributeurs
								</Typography>
								<Typography variant="h6" align="right">
									{project.contributors.sort().join(", ")}
								</Typography>
							</Paper>
							<Paper className={classes.paper}>
								<Grid container justify="center">
									<Grid item xs={2}>
										<TextField
											classes={{fullWidth: classes.textField}}
											label="Étape"
											value={value}
											error={error}
											onChange={this.handleTextFieldChanged}
											type="number"
											inputProps={{
												min: 0,
												max: project.steps.length - 1,
												step: 1
											}}
											variant="outlined"
											fullWidth
										/>
									</Grid>
								</Grid>
								<Grid item xs={12}>
									<Slider
										min={0}
										max={project.steps.length - 1}
										step={1}
										classes={{ container: classes.slider }}
										value={value}
										onChange={this.handleSliderDragged}
										thumb={<FontAwesomeIcon icon="ghost" />}
									/>
								</Grid>
								<Grid container directon="row" justify="space-around" alignItems="flex-start">
									<Grid item xs>
										<Typography align="left" variant="body2">
											{Date.parse(project.startDate)}
										</Typography>
									</Grid>
									<Grid item xs>
										<Typography align="center" variant="body1">
											{project.steps[value]}
										</Typography>
									</Grid>
									<Grid item xs>
										<Typography align="right" variant="body2">
											{project.endDate}
										</Typography>
									</Grid>
								</Grid>
							</Paper>
						</Grid>
					</Grid>
				}
				{!project && !this.state.exists &&
					<p>Pas trouvé</p>
				}
				{!project && this.state.exists &&
					<p>Wait for it</p>
				}
			</div>
		);
	}
}

ProjectDetails.propTypes = {
	location: PropTypes.object,
	project: PropTypes.shape({
		name: PropTypes.string.isRequired,
		code: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		contributors: PropTypes.array.isRequired,
		startDate: PropTypes.string.isRequired,
		endDate: PropTypes.string.isRequired,
		steps: PropTypes.array.isRequired
	}),
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProjectDetails);