// Reacts
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// Hooks
// Packages
import _ from "lodash";
// Components, Services, Functions
import ApiCall from "common/services/ApiCall";
import { TYPE_LEADERBOARD_COMPONENT, TYPE_SNAKBAR } from "common/values/TYPES";
import CardLeagueInfo from "common/components/cardLeagueInfo/CardLeagueInfo";
import LeaderboardTabs from "pages/leaderboard/leaderboardComponents/LeaderboardTabs";
import CardInner from "common/components/cardInner/CardInner";
// Redux
import { useDispatch, useSelector } from "react-redux";
import {
	SET_GAME_SELECTION_TYPE,
	SET_OPEN_GAME_TYPES,
	SET_SNACKBAR,
	SET_SPINNER,
	SET_TYPE_LEADERBOARD_COMPONENT,
} from "redux/actions/mainActions/generalActions";
// Material - lab
// Styles, Icons, Images
import "./HomeTopicsInner.scss";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { ReactComponent as PlayIcon } from "assets/images/icons/gray-play-icon.svg";
import { ReactComponent as HelpIcon } from "assets/images/icons/help-icon.svg";
import { ReactComponent as RateIcon } from "assets/images/icons/rate-mini.svg";

const HomeTopicsInner = () => {
	let { id } = useParams();
	const apiCall = new ApiCall();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [dataInnerTopic, setDataInnerTopic] = useState();
	const [dataLeague, setDataLeague] = useState();
	const stateGeneral = useSelector((state) => state.stateGeneral);

	const handleGoBack = () => {
		navigate(-1);
	};

	const handlePlay = () => {
		dispatch(SET_GAME_SELECTION_TYPE({ type: "topic", id: id }));
		dispatch(SET_OPEN_GAME_TYPES(true));
		console.log("TODO handlePlay & id: ", id);
	};

	const handleAddToFavorites = () => {
		dispatch(SET_SPINNER(true));
		apiCall
			.post(`topic/${id}/add`)
			.then((res) => {
				// dispatch(SET_SPINNER(false));
				getDataInnerTopic();
				// #snackbar step2
				dispatch(
					SET_SNACKBAR({
						show: true,
						type: TYPE_SNAKBAR.SUCCESS,
						message: res.data.msg,
					})
				);
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

				console.log(err);
			});
	};

	const handleRemoveFavorites = () => {
		dispatch(SET_SPINNER(true));
		apiCall
			.post(`topic/${id}/remove`)
			.then((res) => {
				getDataInnerTopic();
				dispatch(
					SET_SNACKBAR({
						show: true,
						type: TYPE_SNAKBAR.SUCCESS,
						message: res.data.msg,
					})
				);

				// dispatch(SET_SPINNER(false));
				// console.log(res.data);
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

				// console.log(err);
			});
	};

	const getDataInnerTopic = () => {
		dispatch(SET_SPINNER(true));
		apiCall
			.get(`topic/${id}`)
			.then((res) => {
				dispatch(SET_SPINNER(false));
				setDataInnerTopic(res.data);
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

	const getDataLeague = () => {
		dispatch(SET_SPINNER(true));
		apiCall
			.get(`league?TopicId=${id}&minendTime=${Date.now()}`)
			.then((res) => {
				dispatch(SET_SPINNER(false));
				res.data.length > 0 ? setDataLeague(res.data[0]) : setDataLeague({});
			})
			.catch((err) => {
				dispatch(SET_SPINNER(false));
			});
	};

	useEffect(() => {
		let isMounted = true;
		if (isMounted) {
			dispatch(SET_TYPE_LEADERBOARD_COMPONENT(TYPE_LEADERBOARD_COMPONENT.INNER_TOPIC));
			getDataInnerTopic();
			getDataLeague();
		}
		return () => {
			isMounted = false;
		};
	}, []);

	return (
		<div className="w-100 topicsInner">
			<CardInner
				banner={encodeURI(dataInnerTopic?.logo)}
				title={dataInnerTopic?.name}
				subtitle={dataInnerTopic?.categoryName}
			>
				<div className="card-inner-icons">
					<p className="grey">
						<PlayIcon className="icon" />
						<span className="mx-1">{dataInnerTopic?.singlePlays + dataInnerTopic?.doublePlays || 0}</span>
					</p>
					<p className="grey flex-grow-1">
						<HelpIcon className="icon" />
						<span className="mx-1">{dataInnerTopic?.questions}</span>
					</p>
					<p className="gold">
						<RateIcon className="icon" />
						<span className="mx-1">{dataInnerTopic?.rate}</span>
						<span className="mx-1 grey">{`(${dataInnerTopic?.raters})`}</span>
					</p>
				</div>

				<hr className="d-xl-none my-0" />

				<div className="card-inner-actions-buttons">
					<button className="btn-play d-none d-xl-block" onClick={handlePlay}>
						<span className="mx-1">Play</span>
					</button>

					{!dataInnerTopic?.status ? (
						<p className="text-center add" onClick={handleAddToFavorites}>
							<AddIcon /> Add to favorites
						</p>
					) : (
						<p className="text-center remove" onClick={handleRemoveFavorites}>
							<RemoveIcon /> Remove from Favorites
						</p>
					)}
				</div>
			</CardInner>

			<div className="topicsInner-body">
				{!_.isEmpty(dataLeague) ? (
					<div className="ratio _dish-cardLeagueInfo">
						<CardLeagueInfo info={dataLeague} />
					</div>
				) : null}

				<div className="description">
					<p className="title">Description</p>
					<p className="text">{dataInnerTopic?.description}</p>
				</div>

				<div className="d-flex flex-wrap badges">
					{dataInnerTopic?.tags?.map((el, index) => (
						<p key={index} className="badge">
							{el}
						</p>
					))}
				</div>

				<div className="board">
					<p className="title">Topic Leaderboard</p>
					{stateGeneral.typeLeaderboardComponent ? <LeaderboardTabs /> : null}
				</div>
			</div>

			<div className="d-flex d-xl-none justify-content-center align-items-center topicsInner-footer">
				<button className="btn-play" onClick={handlePlay}>
					<span className="mx-1">Play</span>
					<PlayIcon className="mx-1 icon" />
				</button>
			</div>
		</div>
	);
};

export default HomeTopicsInner;
