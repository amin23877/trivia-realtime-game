import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import LeaderboardTabPanel from "./LeaderboardTabPanel";
import { TYPE_LEADERBOARD } from "common/values/TYPES";
import ApiCall from "common/services/ApiCall";
import { useDispatch } from "react-redux";
import { SET_SPINNER } from "redux/actions/mainActions/generalActions";
import _ from "lodash";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
	},
}));

const LeaderboardTabs = () => {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const tabs = ["All", "Daily", "Weekly", "Mounthly"];

	const apiCall = new ApiCall();
	const dispatch = useDispatch();

	const handleChange = (event, newValue) => {
		setValue(newValue);
		console.log(event, newValue);
	};

	const propsPanel = {};

	const [dataLeaderboard, setDataLeaderboard] = useState([]);

	useEffect(() => {
		let isMounted = true;
		if (isMounted) {
		}
		return () => {
			isMounted = false;
		};
	}, []);

	return (
		<div id="tabs">
			<AppBar position="static">
				<Tabs value={value} onChange={handleChange} TabIndicatorProps={{ style: { backgroundColor: "white" } }}>
					{tabs.map((el, index) => (
						<Tab key={index} label={el} {...a11yProps(index)} />
					))}
				</Tabs>
			</AppBar>

			{tabs.map((el, index) => (
				<TabPanel key={index} value={value} index={index}>
					<LeaderboardTabPanel />
				</TabPanel>
			))}
		</div>
	);
};

export default LeaderboardTabs;
