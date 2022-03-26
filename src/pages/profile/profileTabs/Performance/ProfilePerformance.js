import React from "react";

//---assets
import s from "./ProfilePerformance.module.scss";

//----components
import PerformanceLevelCard from "pages/profile/profileTabs/Performance/PerformanceLevelCard";
import ParticipatingHistoryCard from "pages/profile/profileTabs/Performance/cards/ParticipatingHistoryCard";
import PlayedHistoryCard from "pages/profile/profileTabs/Performance/cards/PlayedHistoryCard";
import PerformanceList from "pages/profile/profileTabs/Performance/PerformanceList";

const ProfilePerformance = ({ id, progressProps }) => {
	return (
		<div className={s.container}>
			<PerformanceLevelCard {...progressProps} />

			<PerformanceList
				titleNs="profile.performance.played-topics"
				apiEndpoint={`user/${id}/performance/topic`}
				dataFieldName="topicPerformance"
			>
				{(data) => data.map((el, index) => <PlayedHistoryCard key={index} data={el} />)}
			</PerformanceList>

			<PerformanceList
				titleNs="profile.performance.played-leagues"
				apiEndpoint={`user/${id}/performance/league`}
				dataFieldName="leaguePerformance"
			>
				{(data) => data.map((el, index) => <ParticipatingHistoryCard key={index} data={el} />)}
			</PerformanceList>
		</div>
	);
};

export default ProfilePerformance;
