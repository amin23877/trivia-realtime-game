// Reacts
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// Hooks
// Packages
import _ from "lodash";
// Components, Services, Functions
import ApiCall from "common/services/ApiCall";
import { IMAGE_URL } from "common/values/CORE";
import { MOCK_LEADERS } from "common/mocks/MOCK";
import { TYPE_LEADERBOARD } from "common/values/TYPES";
import EmptyList from "common/components/empties/EmptyList";
import CardLeagueInfo from "common/components/cardLeagueInfo/CardLeagueInfo";
// Redux
import { useDispatch } from "react-redux";
import { SET_SPINNER } from "redux/actions/mainActions/generalActions";
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
import { SET_SNACKBAR } from "redux/actions/mainActions/generalActions";
import { TYPE_SNAKBAR } from "common/values/TYPES";
import { CORE } from "common/values/CORE";

const HomeTopicsInner = () => {
	let { id } = useParams();
	const apiCall = new ApiCall();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [dataInnerTopic, setDataInnerTopic] = useState();
	const [dataLeague, setDataLeague] = useState();
	const [dataLeaderboard, setDataLeaderboard] = useState([]);

	const styleBgImg = {
		backgroundImage: `url(${IMAGE_URL}${dataInnerTopic?.logo})`,
	};

	const mockLeaders = MOCK_LEADERS;
	const mockLeadersBest = [mockLeaders[0], mockLeaders[1], mockLeaders[2]];
	const mockLeadersOther = mockLeaders;

	const cardInfo = {
		title: "Chemical Compounds",
		remainingTime: 8407,
		price: 5000,
		players: 2,
		img: "",
	};

	const tabs = [
		{ name: "All points", type: TYPE_LEADERBOARD.ALL },
		{ name: "Daily", type: TYPE_LEADERBOARD.DAY },
		{ name: "Weekly", type: TYPE_LEADERBOARD.WEEK },
		{ name: "Monthly", type: TYPE_LEADERBOARD.MONTH },
	];
	const [activatedTab, setActivatedTab] = useState(0);

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
			.get(`league/${id}?minendtime=${Date.now()}`)
			.then((res) => {
				dispatch(SET_SPINNER(false));
				setDataLeague(res.data);
				console.log(res.data);
			})
			.catch((err) => {
				dispatch(SET_SPINNER(false));
			});
	};

	const getDataLeaderboard = (type, index) => {
		setActivatedTab(index);
		dispatch(SET_SPINNER(true));
		apiCall
			.get(`topicleaderboard/${id}/${type}`)
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
			getDataInnerTopic();
			// getDataLeague();
			getDataLeaderboard(TYPE_LEADERBOARD.ALL, 0);
		}
		return () => {
			isMounted = false;
		};
	}, []);

	return (
		<div className="w-100 h-100 topicsInner">
			<div className="topicsInner-header">
				<div className="d-flex justify-content-between align-items-center sec-img" style={styleBgImg}>
					{/* <img src={bgImgUrl} /> */}

					<p className="d-flex justify-content-center align-items-center" onClick={handleGoBack}>
						<ArrowBackIcon />
					</p>
					<p className="d-flex justify-content-center align-items-center">
						<ShareOutlinedIcon />
					</p>
				</div>

				<div className="sec-info">
					<p className="title">{dataInnerTopic?.name}</p>
					<p className="subtitle">{dataInnerTopic?.categoryName}</p>
					<div className="pt-2 d-flex justify-content-between align-items-center">
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

					<hr />

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

			<div className="topicsInner-body">
				<div className="ratio _dish-cardLeagueInfo">
					{/* <CardLeagueInfo info={cardInfo} /> */}
					{/* EDIT */}
				</div>

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

					<div className="tabs">
						{tabs.map((el, index) => (
							<button
								key={index}
								className={`tab ${activatedTab === index ? "tab-active" : ""}`}
								onClick={() => getDataLeaderboard(el.type, index)}
							>
								{el.name}
							</button>
						))}
					</div>

					{dataLeaderboard.length > 0 ? (
						<>
							<div className="best">
								<div className="d-flex best-users">
									{_.slice(dataLeaderboard, 0, 3).map((el, index) => (
										<div key={index} className={`user ${index === 1 ? "best-user" : ""}`}>
											{!_.isEmpty(el) ? (
												<>
													<img
														className="avatar"
														src={`${IMAGE_URL}${el?.UserId?.avatar}`}
														alt=""
													/>
													<p className="username">{el?.UserId?.username}</p>
													<p className="points">{`${el?.xp} points`}</p>
												</>
											) : (
												<></>
											)}
										</div>
									))}
								</div>

								<div className="d-flex align-items-center levels">
									<div className="level level-2">2</div>
									<div className="level level-1">1</div>
									<div className="level level-3">3</div>
								</div>
							</div>
							{dataLeaderboard.length > 3 ? (
								<div className="results">
									{_.slice(dataLeaderboard, 3, dataLeaderboard?.length).map((el, index) => (
										<div key={index} className="d-flex align-items-center _br-bottom user">
											<span className="index">{`${index + 4}.`}</span>
											<img className="avatar" src={`${IMAGE_URL}${el?.UserId?.avatar}`} alt="" />
											<p className="username">{el?.UserId?.username}</p>
											<p className="points">{`${el?.xp} points`}</p>
										</div>
									))}
									<p className="seemore">See more</p>
								</div>
							) : (
								<></>
							)}
						</>
					) : (
						<EmptyList />
					)}
				</div>
			</div>

			<div className="d-flex justify-content-center align-items-center topicsInner-footer">
				<button className="btn-play" onClick={handlePlay}>
					<span className="mx-1">Play</span>
					<PlayArrowIcon className="mx-1" />
				</button>
			</div>
		</div>
	);
};

export default HomeTopicsInner;
