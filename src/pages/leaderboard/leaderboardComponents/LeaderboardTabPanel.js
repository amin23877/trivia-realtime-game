// Reacts
import React, { useEffect, useState } from "react";
// Hooks
// Packages
import _ from "lodash";
// Components, Services, Functions
// Redux
// Material - lab
// Styles, Icons, Images
import "./LeaderboardTabPanel.scss";
import LeaderboardTabPanelHeader from "./LeaderboardTabPanelHeader";
import LeaderboardTabPanelBody from "./LeaderboardTabPanelBody";
import { SET_SPINNER } from "redux/actions/mainActions/generalActions";
import { TYPE_LEADERBOARD_COMPONENT } from "common/values/TYPES";
import { useDispatch, useSelector } from "react-redux";
import ApiCall from "common/services/ApiCall";
import { useParams } from "react-router-dom";

const LeaderboardTabPanel = ({ type }) => {
	let { id } = useParams();

	const apiCall = new ApiCall();
	const dispatch = useDispatch();

	const stateGeneral = useSelector((state) => state.stateGeneral);

	const [dataLeaderboard, setDataLeaderboard] = useState([]);

	const makeUrl = () => {
		let url;
		switch (stateGeneral.typeLeaderboardComponent) {
			case TYPE_LEADERBOARD_COMPONENT.INNER_TOPIC:
				url = `topicleaderboard/${id}/${type}`;
				break;
			case TYPE_LEADERBOARD_COMPONENT.INNER_LEAGUE:
				url = `league/leaderboard/${id}/${type}`;
				break;

			default:
				url = `topicleaderboard/${"all"}/me`;
				break;
		}

		return url;
	};

	const getDataLeaderboard = () => {
		let url = makeUrl();
		dispatch(SET_SPINNER(true));
		apiCall
			// .get(`topicleaderboard/${id}/${type}`)
			.get(url)
			.then((res) => {
				dispatch(SET_SPINNER(false));
				let LeaderboardSorted = _.orderBy(res.data.result, ["xp"], ["desc"]);
				switch (LeaderboardSorted.length) {
					case 0:
						setDataLeaderboard([]);
						break;
					case 1:
						setDataLeaderboard(_.concat([{}], LeaderboardSorted[0], [{}]));
						break;
					case 2:
						setDataLeaderboard(_.concat(LeaderboardSorted[1], LeaderboardSorted[0], [{}]));
						break;

					default:
						setDataLeaderboard(
							_.concat(
								LeaderboardSorted[1],
								LeaderboardSorted[0],
								_.slice(LeaderboardSorted, 2, LeaderboardSorted.length)
							)
						);
						break;
				}
			})
			.catch((err) => {
				dispatch(SET_SPINNER(false));
				// console.log(err);
			});
	};

	useEffect(() => {
		let isMounted = true;
		if (isMounted) {
			getDataLeaderboard();
		}
		return () => {
			isMounted = false;
		};
	}, []);

	return (
		<div className="w-100 h-100 tabPanel">
			{dataLeaderboard.length > 0 ? <LeaderboardTabPanelHeader dataLeaderboard={dataLeaderboard} /> : <></>}
			<div className="mt-5">
				<LeaderboardTabPanelBody dataLeaderboard={dataLeaderboard} />
			</div>
		</div>
	);
};
export default LeaderboardTabPanel;
