// Reacts
import React, { useEffect, useState } from "react";
// Hooks
import { useNavigate } from "react-router-dom";
// Packages
import _ from "lodash";
// Components, Services, Functions
import { MOCK_CARDINFO } from "common/mocks/MOCK";
import Footer from "common/components/footer/Footer";
import CardLeagueInfo from "common/components/cardLeagueInfo/CardLeagueInfo";
// Redux
// Material - lab
// Styles, Icons, Images
import "./Leagues.scss";
import arrowForwardMini from "assets/images/icons/arrow-forward-mini.svg";

import logo from "assets/images/icons/header-logo.svg";
import ApiCall from "common/services/ApiCall";
import { useDispatch } from "react-redux";
import { SET_SPINNER } from "redux/actions/mainActions/generalActions";
import { TYPE_LEAGUE_HOME } from "common/values/TYPES";
import EmptyList from "common/components/empties/EmptyList";
import { SET_SNACKBAR } from "redux/actions/mainActions/generalActions";
import { TYPE_SNAKBAR } from "common/values/TYPES";
import { TYPE_LEAGUE_CARD } from "common/values/TYPES";

const Leagues = () => {
	const navigate = useNavigate();
	const apiCall = new ApiCall();
	const dispatch = useDispatch();

	const [dataLeagueHome, setDataLeagueHome] = useState([]);

	const cardInfo = MOCK_CARDINFO;

	const mockHistory = [MOCK_CARDINFO, MOCK_CARDINFO, MOCK_CARDINFO];

	const handleNavigate = (event, path) => {
		event.stopPropagation();
		// console.log(path);
		navigate(path);
	};

	const getDataLeagueHome = () => {
		dispatch(SET_SPINNER(true));
		apiCall
			.get("league/home")
			.then((res) => {
				dispatch(SET_SPINNER(false));
				setDataLeagueHome(res.data);
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

				navigate("/");
				// console.log(err);
			});
	};

	useEffect(() => {
		let isMounted = true;
		if (isMounted) {
			getDataLeagueHome();
		}
		return () => {
			isMounted = false;
		};
	}, []);

	return (
		<div className="fadeInFast w-100 h-100 leagues">
			<div className="d-flex d-xl-none justify-content-center align-items-center _header _header-shadow">
				<img src={logo} alt="" />
			</div>

			<div className="_body-height-H leagues-body">
				<p className="leagues-title">Daily League</p>

				{dataLeagueHome[TYPE_LEAGUE_HOME.DAILY] ? (
					<div className="card-league">
						<div
							className="ratio _dish-cardLeagueInfo"
							onClick={(e) => handleNavigate(e, `/leagues/${dataLeagueHome[TYPE_LEAGUE_HOME.DAILY]._id}`)}
						>
							<CardLeagueInfo info={dataLeagueHome[TYPE_LEAGUE_HOME.DAILY]} />
						</div>
					</div>
				) : (
					<p className="empty-list">There is nothing ... </p>
				)}

				<p className="leagues-title">Weekly League</p>
				{dataLeagueHome[TYPE_LEAGUE_HOME.WEEKLY] ? (
					<div className="card-league">
						<div
							className="ratio _dish-cardLeagueInfo"
							onClick={(e) =>
								handleNavigate(e, `/leagues/${dataLeagueHome[TYPE_LEAGUE_HOME.WEEKLY]._id}`)
							}
						>
							<CardLeagueInfo info={dataLeagueHome[TYPE_LEAGUE_HOME.WEEKLY]} />
						</div>
					</div>
				) : (
					<p className="empty-list">There is nothing ... </p>
				)}

				<p className="leagues-title">Grand League</p>
				{dataLeagueHome[TYPE_LEAGUE_HOME.GRAND] ? (
					<div className="card-league">
						<div
							className="ratio _dish-cardLeagueInfo"
							onClick={(e) => handleNavigate(e, `/leagues/${dataLeagueHome[TYPE_LEAGUE_HOME.GRAND]._id}`)}
						>
							<CardLeagueInfo
								info={dataLeagueHome[TYPE_LEAGUE_HOME.GRAND]}
								hasEnterBtn={false}
								type={TYPE_LEAGUE_HOME.GRAND}
							/>
						</div>
					</div>
				) : (
					<p className="empty-list">There is nothing ... </p>
				)}

				<div className="d-flex justify-content-between align-items-center">
					<p className="leagues-title">League History</p>
					<p className="leagues-subtitle" onClick={(e) => handleNavigate(e, "/leagues/history")}>
						see all
						<img className="mx-2" src={arrowForwardMini} alt="" />
					</p>
				</div>

				<div className=" history">
					{dataLeagueHome[TYPE_LEAGUE_HOME.HISTORY] ? (
						dataLeagueHome[TYPE_LEAGUE_HOME.HISTORY]?.map((el, index) => (
							<div key={index} className="card-league">
								<div
									className="ratio _dish-cardLeagueInfo"
									onClick={(e) => handleNavigate(e, `/leagues/${el._id}`)}
								>
									<CardLeagueInfo info={el} type={TYPE_LEAGUE_HOME.HISTORY} />
								</div>
							</div>
						))
					) : (
						<p className="empty-list">There is nothing ... </p>
					)}
				</div>
			</div>
		</div>
	);
};
export default Leagues;
