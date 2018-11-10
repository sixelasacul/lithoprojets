import React from "react";
import { Pumpkin } from "mdi-material-ui";
import GenericListItem from "./GenericListItem";

const EasterEggListItem = ({ project, ...props }) => {
	return <GenericListItem project={project} icon={<Pumpkin />} {...props} />;
};

export default EasterEggListItem;