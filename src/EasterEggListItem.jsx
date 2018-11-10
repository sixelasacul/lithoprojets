import React from "react";
import { Pumpkin } from "mdi-material-ui";
import GenericListItem from "./GenericListItem";

const EasterEggListItem = ({ project }) => {
	return <GenericListItem project={project} icon={<Pumpkin />} />;
};

export default EasterEggListItem;