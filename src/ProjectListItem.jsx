import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProjectListItem = ({project, icon}) => {
	return (
		<li>
			<ListItem button component={Link} to={
					{
						pathname: `/${project.code}`,
						state: { project: project }
					}
				}>
				{icon &&
					<ListItemIcon>
						<Typography variant="h4">
							<FontAwesomeIcon icon={icon} />
						</Typography>
					</ListItemIcon>
				}
				<ListItemText>
					<Typography variant="h4" noWrap>
						{project.name}
					</Typography>
				</ListItemText>
			</ListItem>
		</li>
	);
};

ProjectListItem.propTypes = {
	project: PropTypes.shape({
		name: PropTypes.string.isRequired,
		code: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		contributors: PropTypes.array.isRequired,
		startDate: PropTypes.string.isRequired,
		endDate: PropTypes.string.isRequired,
		steps: PropTypes.array.isRequired
	}).isRequired,
	icon: PropTypes.string
};

export default ProjectListItem;