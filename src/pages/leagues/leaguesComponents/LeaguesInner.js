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
import { useDispatch } from "react-redux";
import ApiCall from "common/services/ApiCall";
import { SET_SPINNER } from "redux/actions/mainActions/generalActions";
import { IMAGE_URL } from "common/values/CORE";

const LeaguesInner = () => {
	let { id } = useParams();

	const playerNum = 2;
	const timeRemain = 45050;
	const apiCall = new ApiCall();
	const dispatch = useDispatch();

	const [dataInnerLeague, setDataInnerLeague] = useState();

	const mockLeaders = MOCK_LEADERS;
	const mockLeadersBest = [mockLeaders[0], mockLeaders[1], mockLeaders[2]];
	const mockLeadersOther = mockLeaders;

	const navigate = useNavigate();

	const styleBgImg = {
		backgroundImage: `url(${IMAGE_URL}${dataInnerLeague?.logo})`,
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
				console.log(res.data);
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
			getDataInnerLeague();
			// getDataLeaderboard(TYPE_LEADERBOARD.ALL, 0);
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

						<p className="grey">
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
					<p className="subtitle">Your position: 0</p>

					<div className="best">
						<div className="d-flex best-users">
							{mockLeadersBest.map((el, index) => (
								<div key={index} className={`user ${index === 1 ? "best-user" : ""}`}>
									<div className="mx-auto avatar"></div>
									<p className="username">{el.username}</p>
									<p className="points">{`${el.points} points`}</p>
									<p className="reward">{`$ ${el.reward}`}</p>
								</div>
							))}
						</div>

						<div className="d-flex align-items-center levels">
							<div className="level level-2">2</div>
							<div className="level level-1">1</div>
							<div className="level level-3">3</div>
						</div>
					</div>
					<div className="results">
						<div className="d-flex headers">
							<p className="clm reward">reward</p>
							{playerNum > 1 ? <p className="clm points">points</p> : null}

							<p className="clm score">score</p>
						</div>
						{mockLeadersOther.map((el, index) => (
							<div key={index} className="d-flex align-items-center _br-bottom user">
								<span className="index">{`${index + 4}.`}</span>
								<div className="avatar"></div>
								<p className="username">{el.username}</p>
								<p className="clm reward">{`$ ${el.reward}`}</p>
								{playerNum > 1 ? <p className="clm points">{`${el.points}`}</p> : null}
								<p className="clm score">{`${el.score}`}</p>
							</div>
						))}

						<p className="seemore">See more</p>
					</div>
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
