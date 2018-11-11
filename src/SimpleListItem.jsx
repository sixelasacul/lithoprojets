import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { darkTheme } from "./themes";
import GenericListItem from "./GenericListItem";

const SimpleListItem = ({ project, ...props }) => {
	return <GenericListItem project={project} icon={<FontAwesomeIcon icon="cross" />} iconTheme={darkTheme} {...props} />;
};

export default SimpleListItem;