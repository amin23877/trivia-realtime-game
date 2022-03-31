import React from "react";
import PropTypes from "prop-types";
import { Tab as MuiTab, Tabs as MuiTabs } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DESKTOP_BREAKPOINT } from "common/values/CORE";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
	root: {
		minHeight: "auto",
		overflowX: "auto",
	},

	indicator: {
		backgroundColor: "#0064A2",
		display: ({ variant }) => (variant === "button" ? "none" : "block"),
	},

	tab: {
		textTransform: "none",
		fontSize: 12,
		borderRadius: 6,
		minHeight: "auto",
		minWidth: "auto",
		fontFamily: "inherit",
		flexGrow: ({ variant }) => (variant === "button" ? 0 : 1),
		padding: ({ variant }) => (variant === "button" ? "5px 10px" : "12px 24px"),

		["@media (min-width :" + DESKTOP_BREAKPOINT + ")"]: {
			fontSize: 16,
			padding: ".5rem 1rem",
			borderRadius: 12,
			flexGrow: "0 !important",
		},
	},

	selectedTab: {
		backgroundColor: ({ variant }) => (variant === "button" ? "#0064A2" : "transparent"),
		color: ({ variant }) => (variant === "button" ? "white" : "#0064A2"),
	},
});

const Tabs = ({ variant = "button", tabs = [], ...rest }) => {
	const { t } = useTranslation();

	const s = useStyles({ variant });

	return (
		<MuiTabs variant="scrollable" classes={{ root: s.root, indicator: s.indicator }} {...rest}>
			{tabs.map(
				(tab, index) =>
					tab && (
						<MuiTab
							classes={{ root: s.tab, selected: s.selectedTab }}
							key={index}
							label={t(tab.label ?? tab)}
							value={tab.value ?? index}
						/>
					)
			)}
		</MuiTabs>
	);
};

Tabs.propTypes = {
	value: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]),
	onChange: PropTypes.func.isRequired,
	variant: PropTypes.oneOf(["button", "indicator"]),
	/*
	 *  there are two-way for define tabs :
	 *  1 - an array of strings that used index for tab value
	 *  2 - an array of objects with specific value for each tab
	 * */
	tabs: PropTypes.oneOfType([
		PropTypes.arrayOf(
			PropTypes.shape({
				label: PropTypes.string.isRequired,
				value: PropTypes.string.isRequired,
			})
		),
		PropTypes.arrayOf(PropTypes.string),
	]),
};

export default Tabs;
