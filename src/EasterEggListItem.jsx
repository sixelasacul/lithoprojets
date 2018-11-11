import React from "react";
import { Pumpkin } from "mdi-material-ui";
import { easterEggTheme } from "./themes";
import GenericListItem from "./GenericListItem";

const EasterEggListItem = ({ project, ...props }) => {
	return <GenericListItem project={project} icon={<Pumpkin />} iconTheme={easterEggTheme} {...props} />;
};

export default EasterEggListItem;