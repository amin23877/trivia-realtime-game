import React from "react";
import { Tab as MuiTab, Tabs as MuiTabs } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { DESKTOP_BREAKPOINT } from "common/values/CORE";

const StyledTabs = withStyles({
	root: {
		borderBottom: "1px solid #0000001f",
		minHeight: "auto",
		paddingBottom: 6,
	},
	indicator: {
		display: "none",
	},
})(MuiTabs);

const StyledTab = withStyles({
	root: {
		textTransform: "none",
		fontSize: 12,
		borderRadius: 6,
		padding: "5px 10px",
		minHeight: "auto",
		["@media (min-width :" + DESKTOP_BREAKPOINT + ")"]: {
			fontSize: 16,
			padding: ".5rem 1rem",
			borderRadius: 12,
		},
	},
	selected: {
		backgroundColor: "#6D6BE6",
		color: "white",
	},
})(MuiTab);

const Tabs = ({ activeTab, onChange, tabs = [] }) => {
	return (
		<StyledTabs value={activeTab} onChange={onChange}>
			{tabs.map((tab, index) => (
				<StyledTab key={index} label={tab} />
			))}
		</StyledTabs>
	);
};

export default Tabs;
