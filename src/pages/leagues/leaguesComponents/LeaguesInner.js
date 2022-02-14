// Reacts
import React, { useEffect, useState } from "react";
// Hooks
import { useNavigate, useParams } from "react-router-dom";
// Components, Services, Functions
import CountdownTimer from "common/components/countdownTimer/CountDownTimer";
// Redux
// Material - lab
// Styles, Icons, Images
import "./LeaguesInner.scss";
import Countdown from "react-countdown";
import PersonIcon from "@material-ui/icons/Person";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import { useDispatch, useSelector } from "react-redux";
import ApiCall from "common/services/ApiCall";
import {
	SET_GAME_SELECTION_TYPE,
	SET_OPEN_GAME_TYPES,
	SET_SNACKBAR,
	SET_SPINNER,
	SET_TYPE_LEADERBOARD_COMPONENT,
} from "redux/actions/mainActions/generalActions";
import LeaderboardTabs from "pages/leaderboard/leaderboardComponents/LeaderboardTabs";
import { TYPE_LEADERBOARD_COMPONENT, TYPE_SNAKBAR } from "common/values/TYPES";
import CardInner from "common/components/cardInner/CardInner";

const LeaguesInner = () => {
	let { id } = useParams();

	var ordinal = require("ordinal");

	const timeRemain = 45050;
	const apiCall = new ApiCall();
	const dispatch = useDispatch();

	const stateGeneral = useSelector((state) => state.stateGeneral);

	const [dataInnerLeague, setDataInnerLeague] = useState();

	const navigate = useNavigate();

	const handleGoBack = () => {
		navigate(-1);
	};

	const handleStop = (e) => {
		// console.log(e);
	};

	const handlePlay = () => {

		dispatch(SET_GAME_SELECTION_TYPE({ type: "league", id: id }));
		if(dataInnerLeague?.players==1){
			navigate(`/leagues/${id}/onePlayer`)
		}else{
			navigate(`/leagues/${id}/twoPlayers`)

		}
		// dispatch(SET_OPEN_GAME_TYPES(true));
	};
	const getDataInnerLeague = () => {
		dispatch(SET_SPINNER(true));
		apiCall
			.get(`league/${id}`)
			.then((res) => {
				// console.log(res);
				dispatch(SET_SPINNER(false));
				setDataInnerLeague(res.data);
			})
			.catch((err) => {
				dispatch(SET_SPINNER(false));
				dispatch(
					SET_SNACKBAR({
						show: true,
						type: TYPE_SNAKBAR.ERROR,
						message: err.message,
					})
				);

				handleGoBack();
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
			<CardInner
				subtitle={dataInnerLeague?.TopicId?.name}
				title={dataInnerLeague?.name}
				banner={encodeURI(dataInnerLeague?.logo)}
			>
				<div className="league-card-inner-content">
					<div id="primaryWhiteBlack" className="d-flex py-xl-2">
						<div className="mx-xl-auto">
							<Countdown
								date={Date.now() + timeRemain * 1000}
								renderer={CountdownTimer}
								onComplete={(e) => handleStop(e)}
							/>
						</div>
					</div>

					<p className="league-card-inner-content__player-num">
						{dataInnerLeague?.players > 1 ? <SupervisorAccountIcon /> : <PersonIcon />}
						<span className="mx-1">{`${dataInnerLeague?.players} player`}</span>
					</p>

					<button className="btn-play d-none d-xl-inline" onClick={handlePlay}>
						<span className="mx-1">Play Now</span>
					</button>
				</div>
			</CardInner>

			<div className="leaguesInner-body">
				<div className="description">
					<p className="title">Description:</p>
					<p className="text">{dataInnerLeague?.description}</p>
				</div>

				<div className="awards">
					<p className="title">Winners Awards:</p>

					<div className="awards__container">
						{dataInnerLeague?.rewards?.map((el, index) => (
							<p key={index}>
								{el.place ? (
									<span className="key">{`${ordinal(el?.place)} one:`}</span>
								) : (
									<span className="key">{`${ordinal(el?.startPlace)} to ${ordinal(
										el?.endPlace
									)} one:`}</span>
								)}

								<span className="mx-2 value">{`$ ${el.reward}`}</span>
							</p>
						))}
					</div>
				</div>

				<div className="board">
					<p className="title">Latest results:</p>
					<p className="your-position">Your position : 0</p>
					{stateGeneral.typeLeaderboardComponent ? <LeaderboardTabs /> : null}
				</div>
			</div>

			<div className="d-flex d-xl-none justify-content-center align-items-center leaguesInner-footer">
				<button className="btn-play" onClick={handlePlay}>
					<span className="mx-1">Play Now</span>
				</button>
			</div>
		</div>
	);
};

export default LeaguesInner;
