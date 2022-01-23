import React from 'react';
import PropTypes from "prop-types";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

function ProgressBar({ 
  value, 
  barColor = "#6D6BE6", 
  height = "14px", 
  backgroundColor = "rgba(121, 124, 133, 0.1)", 
  borderRadius = "20px" 
}) {
	const BorderLinearProgress = withStyles(() => ({
		root: {
			height,
			borderRadius,
		},
		colorPrimary: {
			backgroundColor,
		},
		bar: {
			borderRadius: borderRadius,
			backgroundColor: barColor,
		},
	}))(LinearProgress);

	const useStyles = makeStyles({
		root: {
			flexGrow: 1,
		},
	});
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<BorderLinearProgress variant="determinate" value={value} />
		</div>
	);
}
ProgressBar.propTypes = {
  value: PropTypes.number, 
  barColor: PropTypes.string, 
  height: PropTypes.string, 
  backgroundColor: PropTypes.string, 
  borderRadius: PropTypes.string, 
}
export default React.memo(ProgressBar)
