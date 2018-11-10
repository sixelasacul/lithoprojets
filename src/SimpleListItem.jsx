import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GenericListItem from "./GenericListItem";

const SimpleListItem = ({ project }) => {
	return <GenericListItem project={project} icon={<FontAwesomeIcon icon="cross" />} />;
};

export default SimpleListItem;