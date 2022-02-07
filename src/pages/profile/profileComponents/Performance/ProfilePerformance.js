import React, { useEffect, useState } from "react";

//---assets
import "./ProfilePerformance.scss";
import { MOCK_HISTORY_OF_PARTICIPATING, MOCK_PERFORMANCE_LEVEL } from "common/mocks/MOCK";
//----components
import PerformanceLevelCard from "./PerformanceLevelCard";
import ParticipatingHistoryCard from "./ParticipatingHistoryCard";
import PlayedHistoryCard from "./PlayedHistoryCard";
import PerformanceContentSection from "./PerformanceContentSectoin";
import EmptyList from "common/components/empties/EmptyList";

const ProfilePerformance = () => {
	//----data states
	const [performanceData, setPerformanceData] = useState();
	const [participatingHistoryData, setParticipatingHistoryData] = useState();
	const [playedTopicsData, setPlayedTopics] = useState();
	//----loading states
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		setPerformanceData(MOCK_PERFORMANCE_LEVEL);
		setParticipatingHistoryData(MOCK_HISTORY_OF_PARTICIPATING);
		setPlayedTopics(MOCK_HISTORY_OF_PARTICIPATING);
		setIsLoading(false);
		// fetch favorite topics
		// set loading status
	}, []);
	return (
		<>
			{isLoading && <div>Loading...</div>}
			{!isLoading && (playedTopicsData.length > 0 || participatingHistoryData.length > 0) ? (
				<div className="profile-performance">
					<PerformanceLevelCard data={performanceData} />
					<PerformanceContentSection title="History Of Participating Leagues" seeMoreLink="/">
						{participatingHistoryData.map((p, i) => (
							<ParticipatingHistoryCard key={i} data={p} />
						))}
					</PerformanceContentSection>
					<PerformanceContentSection title="Played Topics History" seeMoreLink="/">
						{playedTopicsData.map((p, i) => (
							<PlayedHistoryCard key={i} data={p} />
						))}
					</PerformanceContentSection>
				</div>
			) : (
				<>
					<EmptyList type="PROFILE_TOPIC" />
				</>
			)}
		</>
	);
};

export default ProfilePerformance;
