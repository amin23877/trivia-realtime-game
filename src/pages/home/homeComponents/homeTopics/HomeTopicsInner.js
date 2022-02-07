// Reacts
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// Hooks
// Packages
import _ from "lodash";
// Components, Services, Functions
import { CORE } from "common/values/CORE";
import ApiCall from "common/services/ApiCall";
import { IMAGE_URL } from "common/values/CORE";
import { TYPE_SNAKBAR } from "common/values/TYPES";
import { TYPE_LEADERBOARD } from "common/values/TYPES";
import EmptyList from "common/components/empties/EmptyList";
import CardLeagueInfo from "common/components/cardLeagueInfo/CardLeagueInfo";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { SET_SPINNER } from "redux/actions/mainActions/generalActions";
import { SET_SNACKBAR } from "redux/actions/mainActions/generalActions";
// Material - lab
// Styles, Icons, Images
import "./HomeTopicsInner.scss";
import AddIcon from "@material-ui/icons/Add";
import HelpIcon from "@material-ui/icons/Help";
import RemoveIcon from "@material-ui/icons/Remove";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import StarRateOutlinedIcon from "@material-ui/icons/StarRateOutlined";
import { SET_TYPE_LEADERBOARD_COMPONENT } from "redux/actions/mainActions/generalActions";
import { TYPE_LEADERBOARD_COMPONENT } from "common/values/TYPES";
import LeaderboardTabs from "pages/leaderboard/leaderboardComponents/LeaderboardTabs";

const HomeTopicsInner = () => {
	let { id } = useParams();
	const apiCall = new ApiCall();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [dataInnerTopic, setDataInnerTopic] = useState();
	const [dataLeague, setDataLeague] = useState();
	const stateGeneral = useSelector((state) => state.stateGeneral);

	const styleBgImg = {
		backgroundImage: `url(${IMAGE_URL}${encodeURI(dataInnerTopic?.logo)})`,
	};

	const handleGoBack = () => {
		navigate(-1);
	};

	const handlePlay = () => {
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
		<div className="w-100 h-100 topicsInner">
			<p className="title d-none d-xl-block mb-3">{dataInnerTopic?.name}</p>

			<div className="topicsInner-header">
				<div className="d-flex justify-content-between align-items-center sec-img" style={styleBgImg}>
					<p className="d-flex d-xl-none justify-content-center align-items-center" onClick={handleGoBack}>
						<ArrowBackIcon />
					</p>
					<p className="d-flex d-xl-none justify-content-center align-items-center">
						<ShareOutlinedIcon />
					</p>
				</div>

				<div className="sec-info">
					<p className="title d-xl-none">{dataInnerTopic?.name}</p>
					<p className="subtitle">{dataInnerTopic?.categoryName}</p>
					<div className="icons-container">
						<p className="grey">
							<PlayArrowIcon />
							<span className="mx-1">{dataInnerTopic?.singlePlays + dataInnerTopic?.doublePlays}</span>
						</p>
						<p className="grey">
							<HelpIcon />
							<span className="mx-1">{dataInnerTopic?.questions}</span>
						</p>
						<p className="gold">
							<StarRateOutlinedIcon />
							<span className="mx-1">{dataInnerTopic?.rate}</span>
							<span className="mx-1 grey">{`(${dataInnerTopic?.raters})`}</span>
						</p>
					</div>

					<hr className="d-xl-none" />

					<div className="actions-btn-container">
						<button className="btn-play d-none d-xl-block" onClick={handlePlay}>
							<span className="mx-1">Play</span>
							<PlayArrowIcon className="mx-1" />
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
				</div>
			</div>

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
					<PlayArrowIcon className="mx-1" />
				</button>
			</div>
		</div>
	);
};

export default HomeTopicsInner;
