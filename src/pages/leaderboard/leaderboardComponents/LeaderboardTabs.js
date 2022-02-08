import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import LeaderboardTabPanel from "./LeaderboardTabPanel";
import { TYPE_LEADERBOARD, TYPE_LEADERBOARD_COMPONENT } from "common/values/TYPES";
import { useSelector } from "react-redux";

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
			{value === index && <Box p={3}>{children ? children : null}</Box>}
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
	tab: {
		fontSize: 14,
		"@media (min-width: 1366px)": {
			fontSize: 16,
		},
	},
}));

const LeaderboardTabs = () => {
	const stateGeneral = useSelector((state) => state.stateGeneral);

	const classes = useStyles();
	const [type, setType] = useState(TYPE_LEADERBOARD.ALL);
	const [value, setValue] = React.useState(0);

	const tabs = [
		{ name: "All", type: TYPE_LEADERBOARD.ALL },
		{ name: "Daily", type: TYPE_LEADERBOARD.DAY },
		{ name: "Weekly", type: TYPE_LEADERBOARD.WEEK },
		{ name: "Mounthly", type: TYPE_LEADERBOARD.MONTH },
	];

	const handleChangeTab = (event, index) => {
		setValue(index);
		setType(tabs[index].type);
	};

	const propsPanel = {};

	return (
		<div id="tabs">
			{stateGeneral.typeLeaderboardComponent !== TYPE_LEADERBOARD_COMPONENT.INNER_LEAGUE ? (
				<>
					<AppBar position="static">
						<Tabs
							value={value}
							onChange={handleChangeTab}
							TabIndicatorProps={{ style: { backgroundColor: "white" } }}
						>
							{tabs.map((el, index) => (
								<Tab className={classes.tab} key={index} label={el.name} {...a11yProps(index)} />
							))}
						</Tabs>
					</AppBar>

					{tabs.map((el, index) => (
						<TabPanel key={index} value={value} index={index}>
							<LeaderboardTabPanel type={type} />
						</TabPanel>
					))}
				</>
			) : (
				<>
					<LeaderboardTabPanel type={""} />
				</>
			)}
		</div>
	);
};

export default LeaderboardTabs;
