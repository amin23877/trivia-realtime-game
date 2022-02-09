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
import { SET_SPINNER } from "redux/actions/mainActions/generalActions";
import ApiCall from "common/services/ApiCall";
import { useDispatch } from "react-redux";

const ProfilePerformance = () => {
	//----data states
	const [performanceData, setPerformanceData] = useState();
	const [participatingHistoryData, setParticipatingHistoryData] = useState();
	const [playedTopicsData, setPlayedTopics] = useState();

	const apiCall = new ApiCall();
	const dispatch = useDispatch();

	const [performanceTopic, setPerformanceTopic] = useState([]);
	const [performanceLeague, setPerformanceLeague] = useState([]);

	const getData = () => {
		dispatch(SET_SPINNER(true));
		apiCall
			.get("user/me/performance")
			.then((res) => {
				dispatch(SET_SPINNER(false));
				setPerformanceTopic(res.data?.topicPerformance);
				setPerformanceLeague(res.data?.leaguePerformance);
				// console.log(">>> ", res);
			})
			.catch((err) => {
				dispatch(SET_SPINNER(false));
			});
	};

	useEffect(() => {
		let isMounted = true;
		if (isMounted) {
			getData();
			setPerformanceData(MOCK_PERFORMANCE_LEVEL);
			setParticipatingHistoryData(MOCK_HISTORY_OF_PARTICIPATING);
			setPlayedTopics(MOCK_HISTORY_OF_PARTICIPATING);

			// fetch favorite topics
			// set loading status
		}
		return () => {
			isMounted = false;
		};
	}, []);

	return (
		<div className="profile-performance">
			<PerformanceLevelCard data={performanceData} />

			{performanceLeague?.length > 0 || performanceTopic?.length > 0 ? (
				<>
					{performanceLeague?.length > 0 ? (
						<PerformanceContentSection title="History Of Participating Leagues" seeMoreLink="/">
							{participatingHistoryData?.map((p, i) => (
								<ParticipatingHistoryCard key={i} data={p} />
							))}
						</PerformanceContentSection>
					) : (
						<EmptyList type="PROFILE_TOPIC" />
					)}

					{performanceTopic?.length > 0 ? (
						<PerformanceContentSection title="Played Topics History" seeMoreLink="/">
							{playedTopicsData.map((p, i) => (
								<PlayedHistoryCard key={i} data={p} />
							))}
						</PerformanceContentSection>
					) : (
						<EmptyList type="PROFILE_TOPIC" />
					)}
				</>
			) : (
				<EmptyList type="PROFILE_TOPIC" />
			)}
		</div>
	);
};

export default ProfilePerformance;
