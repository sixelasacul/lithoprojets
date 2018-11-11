import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import withWidth from "@material-ui/core/withWidth";
import Tooltip from "@material-ui/core/Tooltip";
import RootRef from '@material-ui/core/RootRef';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { listIconTheme } from "./themes";
import { isEllipsisActive } from "./utils/overflow";

class GenericListItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false,
			isHovered: false
		};
		this.bodyRef = React.createRef();
		this.handleTooltipOpen = this.handleTooltipOpen.bind(this);
		this.handleTooltipClose = this.handleTooltipClose.bind(this);
		this.onMouseEnter = this.onMouseEnter.bind(this);
		this.onMouseLeave = this.onMouseLeave.bind(this);
	}

	handleTooltipClose() {
		this.setState({
			open: false
		});
	}

	handleTooltipOpen() {
		if(isEllipsisActive(this.bodyRef.current)) {
			this.setState({
				open: true
			});
		}
	}

	onMouseEnter() {
		this.setState({
			isHovered: true
		});
	}

	onMouseLeave() {
		this.setState({
			isHovered: false
		});
	}

	render() {
		const { isHovered } = this.state;
		const {project, icon, width, iconTheme, ...props} = this.props;
		const itemVariant = width === "xs" ? "h6" : "h4";
		return (
			<Tooltip
				onClose={this.handleTooltipClose}
				onOpen={this.handleTooltipOpen}
				open={this.state.open}
				title={project.name}
			>
				<ListItem
					button
					component={Link} to={{
						pathname: `/${project.code}`,
						state: { project }
					}}
					onMouseEnter={this.onMouseEnter}
					onMouseLeave={this.onMouseLeave}>
					{icon &&
						<MuiThemeProvider theme={isHovered ? iconTheme : listIconTheme}>
							<ListItemIcon>
								<Typography variant={itemVariant} color="primary" {...props}>
									{icon}
								</Typography>
							</ListItemIcon>
						</MuiThemeProvider>
					}
					<ListItemText>
						<RootRef rootRef={this.bodyRef}>
							<Typography variant={itemVariant} noWrap {...props}>
								{project.name}
							</Typography>
						</RootRef>
					</ListItemText>
				</ListItem>
			</Tooltip>
		);
	}
}

GenericListItem.propTypes = {
	project: PropTypes.shape({
		name: PropTypes.string.isRequired,
		code: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		contributors: PropTypes.array.isRequired,
		startDate: PropTypes.string.isRequired,
		endDate: PropTypes.string.isRequired,
		steps: PropTypes.array.isRequired
	}).isRequired,
	icon: PropTypes.element,
	iconTheme: PropTypes.shape({
		palette: PropTypes.shape({
			primary: PropTypes.shape({
				main: PropTypes.string.isRequired
			}).isRequired
		}).isRequired
	})
};

export default withWidth()(GenericListItem);