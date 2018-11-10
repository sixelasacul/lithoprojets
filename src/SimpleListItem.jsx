import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GenericListItem from "./GenericListItem";

const SimpleListItem = ({ project, ...props }) => {
	return <GenericListItem project={project} icon={<FontAwesomeIcon icon="cross" />} {...props} />;
};

export default SimpleListItem;