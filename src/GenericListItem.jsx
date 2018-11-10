import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import withWidth from "@material-ui/core/withWidth";

const GenericListItem = ({project, icon, width, ...props}) => {
	const itemVariant = width === "xs" ? "h6" : "h4";
	return (
		<>
			<ListItem button component={Link} to={
					{
						pathname: `/${project.code}`,
						state: { project }
					}
				}>
				{icon &&
					<ListItemIcon>
						<Typography variant={itemVariant} {...props}>
							{icon}
						</Typography>
					</ListItemIcon>
				}
				<ListItemText>
					<Typography variant={itemVariant} noWrap {...props}>
						{project.name}
					</Typography>
				</ListItemText>
			</ListItem>
		</>
	);
};

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
	icon: PropTypes.element
};

export default withWidth()(GenericListItem);