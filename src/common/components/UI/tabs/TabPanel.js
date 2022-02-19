import React from "react";
import PropTypes from "prop-types";

export default function TabPanel(props) {
	const { children, value, activeTab, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== activeTab}
			id={`simple-tabpanel-${value}`}
			aria-labelledby={`simple-tab-${value}`}
			{...other}
		>
			{value === activeTab && children}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	activeTab: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};
