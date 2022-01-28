// Reacts
import React from "react";
// Hooks
import { useNavigate } from "react-router-dom";
// Packages
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

const Leagues = () => {
	const navigate = useNavigate();

	const cardInfo = MOCK_CARDINFO;

	const mockHistory = [MOCK_CARDINFO, MOCK_CARDINFO, MOCK_CARDINFO];

	const handleNavigate = (event, path) => {
		event.stopPropagation();
		console.log(path);
		navigate(path);
	};
	return (
		<div className="w-100 h-100 leagues">
			<div className="d-flex justify-content-center align-items-center _header _header-shadow">
				<img src={logo} alt="" />
			</div>

			<div className="_body-height-H leagues-body">
				<p className="leagues-title">Daily League</p>

				<div className="card-league">
					<div className="ratio _dish-cardLeagueInfo" onClick={(e) => handleNavigate(e, "/leagues/5")}>
						<CardLeagueInfo info={cardInfo} />
					</div>
				</div>

				<p className="leagues-title">Weekly League</p>
				<div className="card-league">
					<div className="ratio _dish-cardLeagueInfo" onClick={(e) => handleNavigate(e, "/leagues/5")}>
						<CardLeagueInfo info={cardInfo} />
					</div>
				</div>

				<p className="leagues-title">Grand League</p>
				<div className="card-league">
					<div className="ratio _dish-cardLeagueInfo" onClick={(e) => handleNavigate(e, "/leagues/5")}>
						<CardLeagueInfo info={cardInfo} />
					</div>
				</div>

				<div className="d-flex justify-content-between align-items-center">
					<p className="leagues-title">League History</p>
					<p className="leagues-subtitle" onClick={(e) => handleNavigate(e, "/leagues/history")}>
						see all
						<img className="mx-2" src={arrowForwardMini} alt="" />
					</p>
				</div>

				<div className=" history">
					{mockHistory.map((el, index) => (
						<div key={index} className="card-league">
							<div
								className="ratio _dish-cardLeagueInfo"
								onClick={(e) => handleNavigate(e, "/leagues/5")}
							>
								<CardLeagueInfo info={el} expired={true} />
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
export default Leagues;
