import React, { useState } from "react";
import { useRequest } from "common/hooks/useRequest";
//---assets
import "./ProfilePerformance.scss";
//----components
import PerformanceLevelCard from "pages/profile/profileTabs/Performance/PerformanceLevelCard";
import ParticipatingHistoryCard from "pages/profile/profileTabs/Performance/ParticipatingHistoryCard";
import PlayedHistoryCard from "pages/profile/profileTabs/Performance/PlayedHistoryCard";
import PerformanceContentSection from "pages/profile/profileTabs/Performance/PerformanceContentSectoin";

const ProfilePerformance = ({ id }) => {
	const [performanceData, setPerformanceData] = useState();

	const { response, success } = useRequest(`user/${id}/performance`);

	return (
		success && (
			<div className="profile-performance">
				<PerformanceLevelCard data={performanceData} />

				<PerformanceContentSection title="History Of Participating Leagues" seeMoreLink="/">
					{response.leaguePerformance?.map((el, index) => (
						<ParticipatingHistoryCard key={index} data={el} />
					))}
				</PerformanceContentSection>

				<PerformanceContentSection title="Played Topics History" seeMoreLink="/">
					{response.topicPerformance.map((el, index) => (
						<PlayedHistoryCard key={index} data={el} />
					))}
				</PerformanceContentSection>
			</div>
		)
	);
};

export default ProfilePerformance;
