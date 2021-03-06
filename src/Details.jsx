import React, { Component } from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Slider from "@material-ui/lab/Slider";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import withWidth from "@material-ui/core/withWidth";
import { withRouter } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { fetchAndFindByCode } from "./utils/fetch";
import { changeDateFormat } from "./utils/date";

const styles = theme => ({
	textField: {
		color: theme.palette.primary.main
	},
	sliderRoot: {
		padding: "22px 0px"
	},
	sliderContainer: {
		color: theme.palette.secondary.main
	},
	sliderTrack: {
		backgroundColor: theme.palette.primary.main
	},
	title: {
		textAlign: "center"
	},
	paper: {
		margin: "40px 0px",
		padding: "25px"
	},
	iconButton: {
		marginRight: theme.spacing.unit
	}
});

class ProjectDetails extends Component {
	constructor(props) {
		super(props);
		const project = (this.props.location.state && this.props.location.state.project);
		document.title = project ? project.name : document.title;
		const value = (this.props.location.hash && this.props.location.hash.substring(1)) || 0;
		this.state = {
			project: project,
			exists: true,
			value: parseInt(value),
			error: false
		}
		this.shareLink = ""
		this.hiddenInput = React.createRef()
		this.handleSliderDragged = this.handleSliderDragged.bind(this);
		this.handleTextFieldChanged = this.handleTextFieldChanged.bind(this);
		this.copyToClipboard = this.copyToClipboard.bind(this);
	}

	componentDidMount() {
		if (!this.state.project) {
			this.fetchProject(this.props.location.pathname.substring(1), (err, data) => {
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

	fetchProject(code, callback) {
		fetchAndFindByCode(code, callback, "https://raw.githubusercontent.com/sixelasacul/lithoprojets/master/data/projects.json");
	}

	removeEnd(initialString, partToRemove) {
		return initialString.substring(0, initialString.length - partToRemove.length)
	}

	copyToClipboard() {
		const currentHash = this.props.location.hash;
		const currentUrl = window.location.href;
		const newBaseUrl = this.removeEnd(currentUrl, currentHash);
		this.shareLink = newBaseUrl + "#" + this.state.value;
		navigator.clipboard.writeText(this.shareLink)
			.then(() => {
				console.log("Copié: ", this.shareLink);
			})
			.catch(err => {
				console.log("Impossible d'écrire dans le presse-papier: ", err);
				this.props.history.push(this.shareLink);
			});
	}

	changeDateFormat(date) {
		return changeDateFormat(date, "DD/MM/YYYY", "MMMM YYYY");
	}

	handleSliderDragged(event, value) {
		this.setState({
			value
		});
	}

	handleTextFieldChanged(event) {
		const newValue = parseInt(event.target.value);
		if (newValue < this.state.project.steps.length && newValue >= 0) {
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

	render() {
		const { project, value, error } = this.state;
		const { classes, width } = this.props;
		const titleVariant = width === "xs" ? "h3" : "h1";
		const dtVariant = width === "xs" ? "body2" : "subtitle2";
		const ddVariant = width === "xs" ? "subtitle2" : "h6";
		const smWidth = width === "sm" || width === "xs";

		return (
			<div>
				{project &&
					<Grid container justify="center" alignItems="center" direction="column">
						<Grid item lg={6} md={6} sm={8} xs={10} classes={{ item: classes.title }}>
							<Typography variant={titleVariant} gutterBottom>
								{project.name}
							</Typography>
						</Grid>
						<Grid item lg={6} md={6} sm={8} xs={10}>
							<Paper className={classes.paper}>
								<Typography variant={dtVariant} align="left">
									Description
								</Typography>
								<Typography variant={ddVariant} align="right">
									{project.description}
								</Typography>
								<Typography variant={dtVariant} align="left">
									Contributeurs
								</Typography>
								<Typography variant={ddVariant} align="right">
									{project.contributors.sort().join(", ")}
								</Typography>
							</Paper>
							<Paper className={classes.paper}>
								<Grid container direction="column" spacing={16}>
									<Grid item>
										<Grid container direction="row" justify="center" alignItems="center">
											<TextField
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
												variant="standard"
											/>
										</Grid>
									</Grid>
									<Grid item>
										<Grid container direction="row" justify="center" alignItems="center">
											<Button color="primary" variant="contained" onClick={this.copyToClipboard}>
												<FontAwesomeIcon icon="share-alt" className={classes.iconButton} />
												Partager
											</Button>
										</Grid>
									</Grid>
									{smWidth &&
										<Grid item>
											<Grid container directon="row" justify="space-around" alignItems="flex-start">
												<Grid item xs>
													<Typography align="left" variant="body2">
														{this.changeDateFormat(project.startDate)}
													</Typography>
												</Grid>
												<Grid item xs>
													<Typography align="right" variant="body2">
														{this.changeDateFormat(project.endDate)}
													</Typography>
												</Grid>
											</Grid>
										</Grid>
									}
									<Grid item>
										<Slider
											color="secondary"
											min={0}
											max={project.steps.length - 1}
											step={1}
											classes={{
												root: classes.sliderRoot,
												container: classes.sliderContainer,
												track: classes.sliderTrack
											}}
											value={value}
											onChange={this.handleSliderDragged}
											thumb={<FontAwesomeIcon icon="ghost" />}
										/>
									</Grid>
									<Grid item>
										<Grid container directon="row" justify="space-around" alignItems="flex-start">
											{!smWidth &&
												<Grid item xs>
													<Typography align="left" variant="body2">
														{this.changeDateFormat(project.startDate)}
													</Typography>
												</Grid>
											}
											<Grid item xs>
												<Typography align="center" variant="body1">
													{project.steps[value]}
												</Typography>
											</Grid>
											{!smWidth &&
												<Grid item xs>
													<Typography align="right" variant="body2">
														{this.changeDateFormat(project.endDate)}
													</Typography>
												</Grid>
											}
										</Grid>
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
	classes: PropTypes.object.isRequired,
	titleTypoVariant: PropTypes.string
};

export default withWidth()(withRouter(withStyles(styles)(ProjectDetails)));