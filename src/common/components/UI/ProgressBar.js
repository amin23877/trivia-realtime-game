import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { DESKTOP_BREAKPOINT } from "common/values/CORE";

const BorderLinearProgress = withStyles(() => ({
	root: {
		height: 14,
		borderRadius: 20,
		boxShadow: "0 1px 1.5px rgba(121, 124, 133, 0.15)",

		[`@media (min-width: ${DESKTOP_BREAKPOINT})`]: {
			height: 28,
		},
	},
	colorPrimary: {
		backgroundColor: "#EEEDF7",

		[`@media (min-width: ${DESKTOP_BREAKPOINT})`]: {
			backgroundColor: "#fff",
		},
	},
	bar: {
		borderRadius: 20,
		backgroundColor: "#0064A2",
		boxShadow: "0 1px 1.5px rgba(121, 124, 133, 0.15)",
	},
}))(LinearProgress);

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
	},
});

function ProgressBar({ value }) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<BorderLinearProgress variant="determinate" value={value} />
		</div>
	);
}

ProgressBar.propTypes = {
	value: PropTypes.number,
};

export default ProgressBar;
