import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { MOCK_LEADERS } from "common/mocks/MOCK";
import { MOCK_BADGETES } from "common/mocks/MOCK";

import CardLeagueInfo from "common/components/cardLeagueInfo/CardLeagueInfo";

import "./HomeTopicsInner.scss";
import AddIcon from "@material-ui/icons/Add";
import HelpIcon from "@material-ui/icons/Help";
import RemoveIcon from "@material-ui/icons/Remove";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import StarRateOutlinedIcon from "@material-ui/icons/StarRateOutlined";
import ApiCall from "common/services/ApiCall";
import { useDispatch } from "react-redux";
import { SET_SPINNER } from "redux/actions/mainActions/generalActions";
import { IMAGE_URL } from "common/values/CORE";

const HomeTopicsInner = () => {
	let { id } = useParams();

	const apiCall = new ApiCall();

	const [data, setData] = useState();
	const [testFlagAdd, setTestFlagAdd] = useState(true);

	const styleBgImg = {
		backgroundImage: `url(${IMAGE_URL}${data?.logo})`,
	};

	// const bgImgUrl = `${IMAGE_URL}${data?.logo}`;

	const cardInfo = {
		title: "Chemical Compounds",
		remainingTime: 8407,
		price: 5000,
		players: 2,
		img: "",
	};

	const mockBadges = MOCK_BADGETES;
	const mockLeaders = MOCK_LEADERS;
	const mockLeadersBest = [mockLeaders[0], mockLeaders[1], mockLeaders[2]];
	const mockLeadersOther = mockLeaders;

	const tabs = ["All points", "Daily", "Weekly", "Monthly"];
	const [activatedTab, setActivatedTab] = useState(0);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleGoBack = () => {
		navigate(-1);
	};

	const handlePlay = () => {
		console.log("TODO handlePlay & id: ", id);
	};

	const handleAddToFavorites = () => {
		setTestFlagAdd(false);
		dispatch(SET_SPINNER(true));
		apiCall
			.post(`topic/${id}/add`)
			.then((res) => {
				dispatch(SET_SPINNER(false));
				console.log(res.data);
			})
			.catch((err) => {
				dispatch(SET_SPINNER(false));
				console.log(err);
			});
	};

	const handleRemoveFavorites = () => {
		setTestFlagAdd(true);
		dispatch(SET_SPINNER(true));
		apiCall
			.post(`topic/${id}/remove`)
			.then((res) => {
				dispatch(SET_SPINNER(false));
				console.log(res.data);
			})
			.catch((err) => {
				dispatch(SET_SPINNER(false));
				console.log(err);
			});
	};

	// .get("topicleaderboard/614c26b0b1e4a4815030b691/day")
	// .post("/topic/61bf3bb79328db0eb516bfe3/add")
	// .post("/topic/61bf3bb79328db0eb516bfe3/add")
	const getData = () => {
		dispatch(SET_SPINNER(true));
		apiCall
			.get(`topic/${id}`)
			.then((res) => {
				dispatch(SET_SPINNER(false));
				setData(res.data);
				console.log(res.data);
			})
			.catch((err) => {
				dispatch(SET_SPINNER(false));
				console.log(err);
			});
	};

	useEffect(() => {
		let isMounted = true;
		if (isMounted) {
			getData();
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
					<p className="title">{data?.name}</p>
					<p className="subtitle">{data?.categoryName}</p>
					<div className="pt-2 d-flex justify-content-between align-items-center">
						<p className="grey">
							<PlayArrowIcon />
							<span className="mx-1">{data?.singlePlays + data?.doublePlays}</span>
						</p>
						<p className="grey">
							<HelpIcon />
							<span className="mx-1">{data?.questions}</span>
						</p>
						<p className="gold">
							<StarRateOutlinedIcon />
							<span className="mx-1">{data?.rate}</span>
							<span className="mx-1 grey">{`(${data?.raters})`}</span>
						</p>
					</div>

					<hr />

					{testFlagAdd ? (
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
					<CardLeagueInfo info={cardInfo} />
				</div>

				<div className="description">
					<p className="title">Description</p>
					<p className="text">{data?.description}</p>
				</div>

				<div className="d-flex flex-wrap badges">
					{data?.tags?.map((el, index) => (
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
								onClick={() => setActivatedTab(index)}
							>
								{el}
							</button>
						))}
					</div>

					<div className="best">
						<div className="d-flex best-users">
							{mockLeadersBest.map((el, index) => (
								<div key={index} className={`user ${index === 1 ? "best-user" : ""}`}>
									<div className="mx-auto avatar"></div>
									<p className="username">{el.username}</p>
									<p className="points">{`${el.points} points`}</p>
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
						{mockLeadersOther.map((el, index) => (
							<div key={index} className="d-flex align-items-center _br-bottom user">
								<span className="index">{`${index + 4}.`}</span>
								<div className="avatar"></div>
								<p className="username">{el.username}</p>
								<p className="points">{`${el.points} points`}</p>
							</div>
						))}

						<p className="seemore">See more</p>
					</div>
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
