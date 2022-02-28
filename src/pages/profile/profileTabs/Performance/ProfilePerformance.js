import React, { useState } from "react";
import { useRequest } from "common/hooks/useRequest";

//---assets
import s from "./ProfilePerformance.module.scss";

//----components
import PerformanceLevelCard from "pages/profile/profileTabs/Performance/PerformanceLevelCard";
import ParticipatingHistoryCard from "pages/profile/profileTabs/Performance/cards/ParticipatingHistoryCard";
import PlayedHistoryCard from "pages/profile/profileTabs/Performance/cards/PlayedHistoryCard";
import PerformanceList from "pages/profile/profileTabs/Performance/PerformanceList";

const ProfilePerformance = ({ id }) => {
	const [performanceData, setPerformanceData] = useState();

	const { response, success } = useRequest(`user/${id}/performance`);

	return (
		success && (
			<div className={s.container}>
				<PerformanceLevelCard data={performanceData} />

				<p className={s.title}>Played Topics History</p>

				<PerformanceList data={response.topicPerformance}>
					{(data) => data.map((el, index) => <PlayedHistoryCard key={index} data={el} />)}
				</PerformanceList>

				<p className={s.title}>History Of Participating Leagues</p>

				<PerformanceList data={response.leaguePerformance}>
					{(data) => data.map((el, index) => <ParticipatingHistoryCard key={index} data={el} />)}
				</PerformanceList>
			</div>
		)
	);
};

export default ProfilePerformance;
