import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';
import { fetchAndFindByCode } from './utils';

const styles = {
	root: {
		width: 300
	},
	slider: {
		padding: '22px 0px'
	},
	paper: {
		margin: '40px 0px',
		padding: '25px'
	}
};

class ProjectDetails extends Component {
	constructor(props) {
		super(props);
		const project = (this.props.location.state && this.props.location.state.project) || this.props.project;
		this.state = {
			project: project,
			exists: true,
			value: (project.length - 1) || 0
		}
		this.handleChange = this.handleChange.bind(this);
		this.getIndex = this.getIndex.bind(this);
	}

	componentDidMount() {
		fetchAndFindByCode(this.props.location.pathname.substring(1), (err, data) => {
			if (!err) {
				this.setState({
					project: data
				});
			} else {
				this.setState({
					exists: false
				});
			}
		})
	}

	handleChange(event, value) {
		this.setState({
			value
		});
	}

	getIndex() {
		return Math.round(this.state.value);
	}

	render() {
		const { project, value } = this.state;
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
									{project.contributors.sort().join(', ')}
								</Typography>
							</Paper>
							<Paper className={classes.paper}>
								<Grid item xs={12}>
									<Slider
										min={0}
										max={project.steps.length-1}
										classes={{ container: classes.slider }}
										value={value}
										onChange={this.handleChange}
									/>
								</Grid>
								<Grid container directon="row" justify="space-around" alignItems="flex-start">
									<Grid item xs>
										<Typography align="left" variant="body2">
											{project.startDate}
										</Typography>
									</Grid>
									<Grid item xs>
										<Typography align="center" variant="body1">
											{project.steps[this.getIndex()]}
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