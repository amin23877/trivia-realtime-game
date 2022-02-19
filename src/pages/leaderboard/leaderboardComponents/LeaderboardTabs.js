import React, { useState } from "react";
import LeaderboardTabPanel from "./LeaderboardTabPanel";
import { TYPE_LEADERBOARD } from "common/values/TYPES";
import Tabs from "common/components/UI/tabs/Tabs";
import TabPanel from "common/components/UI/tabs/TabPanel";

const tabs = [
	{ label: "All", value: TYPE_LEADERBOARD.ALL },
	{ label: "Daily", value: TYPE_LEADERBOARD.DAY },
	{ label: "Weekly", value: TYPE_LEADERBOARD.WEEK },
	{ label: "Monthly", value: TYPE_LEADERBOARD.MONTH },
];

const LeaderboardTabs = () => {
	const [type, setType] = useState(TYPE_LEADERBOARD.ALL);

	const handleChangeTab = (event, newValue) => {
		setType(newValue);
	};

	return (
		<div id="tabs">
			<Tabs tabs={tabs} activeTab={type} onChange={handleChangeTab} />

			{tabs.map((el, index) => (
				<TabPanel key={index} activeTab={type} value={el.value}>
					<LeaderboardTabPanel type={type} />
				</TabPanel>
			))}
		</div>
	);
};

export default LeaderboardTabs;
