// Reacts
import React, { useEffect, useState } from "react";
// Hooks
import { useNavigate, useParams } from "react-router-dom";
// Packages
import _ from "lodash";
// Components, Services, Functions
import { MOCK_LEADERS } from "common/mocks/MOCK";
import { MOCK_CARDINFO } from "common/mocks/MOCK";
import CountdownTimer from "common/components/countdownTimer/CountDownTimer";
// Redux
// Material - lab
// Styles, Icons, Images
import "./LeaguesInner.scss";
import Countdown from "react-countdown";
import CloseIcon from "@material-ui/icons/Close";
import PersonIcon from "@material-ui/icons/Person";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import { useDispatch, useSelector } from "react-redux";
import ApiCall from "common/services/ApiCall";
import { SET_SPINNER } from "redux/actions/mainActions/generalActions";
import { IMAGE_URL } from "common/values/CORE";
import { TYPE_LEADERBOARD } from "common/values/TYPES";
import LeaderboardTabs from "pages/leaderboard/leaderboardComponents/LeaderboardTabs";
import { TYPE_LEADERBOARD_COMPONENT } from "common/values/TYPES";
import { SET_TYPE_LEADERBOARD_COMPONENT } from "redux/actions/mainActions/generalActions";

const LeaguesInner = () => {
	let { id } = useParams();

	const playerNum = 2;
	const timeRemain = 45050;
	const apiCall = new ApiCall();
	const dispatch = useDispatch();

	const stateGeneral = useSelector((state) => state.stateGeneral);

	const [activatedTab, setActivatedTab] = useState(0);

	const [dataInnerLeague, setDataInnerLeague] = useState();

	const mockLeaders = MOCK_LEADERS;
	const mockLeadersBest = [mockLeaders[0], mockLeaders[1], mockLeaders[2]];
	const mockLeadersOther = mockLeaders;

	const navigate = useNavigate();

	const styleBgImg = {
		backgroundImage: `url(${IMAGE_URL}${encodeURI(dataInnerLeague?.logo)})`,
	};

	const handleGoBack = () => {
		navigate(-1);
	};

	const handleStop = (e) => {
		// console.log(e);
	};

	const handlePlay = () => {
		console.log("TODO handlePlay");
	};

	const getDataInnerLeague = () => {
		dispatch(SET_SPINNER(true));
		apiCall
			.get(`league/${id}`)
			.then((res) => {
				// console.log(res.data);
				dispatch(SET_SPINNER(false));
				setDataInnerLeague(res.data);
			})
			.catch((err) => {
				dispatch(SET_SPINNER(false));
				// console.log(err);
			});
	};

	useEffect(() => {
		let isMounted = true;
		if (isMounted) {
			dispatch(SET_TYPE_LEADERBOARD_COMPONENT(TYPE_LEADERBOARD_COMPONENT.INNER_LEAGUE));
			getDataInnerLeague();
		}
		return () => {
			isMounted = false;
		};
	}, []);

	return (
		<div className="w-100 h-100 leaguesInner">
			<div className="leaguesInner-header">
				<div className="d-flex justify-content-between align-items-center sec-img" style={styleBgImg}>
					<p className="d-flex justify-content-center align-items-center" onClick={handleGoBack}>
						<CloseIcon />
					</p>
					<p className="d-flex justify-content-center align-items-center">
						<ShareOutlinedIcon />
					</p>
				</div>

				<div className="sec-info">
					<p className="title">{_.truncate(dataInnerLeague?.name, { length: 35, separator: " " })}</p>
					<p className="subtitle">
						{_.truncate(dataInnerLeague?.TopicId?.name, { length: 40, separator: " " })}
					</p>
					<div className="pt-2 d-flex justify-content-between align-items-center">
						<div id="primaryWhiteBlack" className="d-flex timer">
							<Countdown
								date={Date.now() + timeRemain * 1000}
								renderer={CountdownTimer}
								onComplete={(e) => handleStop(e)}
							/>
						</div>

						<p className="grey players-num">
							{dataInnerLeague?.players > 1 ? <SupervisorAccountIcon /> : <PersonIcon />}
							<span className="mx-1">{`${dataInnerLeague?.players} player`}</span>
						</p>
					</div>
				</div>
			</div>

			<div className="leaguesInner-body">
				<div className="description">
					<p className="title">Description:</p>
					<p className="text">{dataInnerLeague?.description}</p>
				</div>

				<div className="awards">
					<p className="title">Winners Awards:</p>
					<p>
						<span className="key">first one:</span>
						<span className="mx-2 value">$ 250</span>
					</p>
					<p>
						<span className="key">second one:</span>
						<span className="mx-2 value">$ 200</span>
					</p>
					<p>
						<span className="key">Third one:</span>
						<span className="mx-2 value">$ 180</span>
					</p>
					<p>
						<span className="key">Fourth to tenth one:</span>
						<span className="mx-2 value">$ 90</span>
					</p>
				</div>

				<div className="board">
					<p className="title">Latest results:</p>
					{stateGeneral.typeLeaderboardComponent ? <LeaderboardTabs /> : null}
				</div>
			</div>

			<div className="d-flex justify-content-center align-items-center leaguesInner-footer">
				<button className="btn-play" onClick={handlePlay}>
					<span className="mx-1">Play Now</span>
				</button>
			</div>
		</div>
	);
};

export default LeaguesInner;
