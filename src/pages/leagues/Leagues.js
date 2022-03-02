// Reacts
import React from "react";
// Hooks
import { Link, useNavigate } from "react-router-dom";

// Components, Services, Functions
import CardLeagueInfo from "common/components/cardLeagueInfo/CardLeagueInfo";
import { Swiper, SwiperSlide } from "swiper/react";

// Redux
import { TYPE_LEAGUE_HOME } from "common/values/TYPES";

// Styles, Icons, Images
import "swiper/css";
import "./Leagues.scss";
import arrowForwardMini from "assets/images/icons/arrow-forward-mini.svg";
import logo from "assets/images/icons/header-logo.svg";
import { useRequest } from "common/hooks/useRequest";

const LeaguesCategory = ({ data, title, seeAllPageLink, children }) => {
	return (
		<>
			<div className="d-flex justify-content-between align-items-center">
				<p className="leagues-title flex-grow-1">{title}</p>

				{seeAllPageLink && (
					<Link className="leagues-subtitle" to={seeAllPageLink}>
						see all
						<img className="mx-2" src={arrowForwardMini} alt="" />
					</Link>
				)}
			</div>

			{data ? children : <p className="empty-list">There is nothing ... </p>}
		</>
	);
};

const Leagues = () => {
	const navigate = useNavigate();

	const { response: dataLeagueHome, status } = useRequest("league/home");

	const handleNavigate = (event, path) => {
		event.stopPropagation();
		navigate(path);
	};

	return (
		status === "success" && (
			<div className="fadeInFast w-100 leagues">
				<div className="leagues-header">
					<img src={logo} alt="logo" />
				</div>

				<div className="leagues-body">
					<LeaguesCategory title="Daily League" data={dataLeagueHome[TYPE_LEAGUE_HOME.DAILY]}>
						<div className="card-league">
							<div
								className="ratio _dish-cardLeagueInfo"
								onClick={(e) =>
									handleNavigate(e, `/leagues/${dataLeagueHome[TYPE_LEAGUE_HOME.DAILY]._id}`)
								}
							>
								<CardLeagueInfo info={dataLeagueHome[TYPE_LEAGUE_HOME.DAILY]} />
							</div>
						</div>
					</LeaguesCategory>

					<LeaguesCategory title="Weekly League" data={dataLeagueHome[TYPE_LEAGUE_HOME.WEEKLY]}>
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
					</LeaguesCategory>

					<LeaguesCategory title="Grand League" data={dataLeagueHome[TYPE_LEAGUE_HOME.GRAND]}>
						<div className="card-league">
							<div
								className="ratio _dish-cardLeagueInfo"
								onClick={(e) =>
									handleNavigate(e, `/leagues/${dataLeagueHome[TYPE_LEAGUE_HOME.GRAND]._id}`)
								}
							>
								<CardLeagueInfo
									info={dataLeagueHome[TYPE_LEAGUE_HOME.GRAND]}
									hasEnterBtn={false}
									type={TYPE_LEAGUE_HOME.GRAND}
								/>
							</div>
						</div>
					</LeaguesCategory>

					<LeaguesCategory
						seeAllPageLink="/leagues/history"
						title="League History"
						data={dataLeagueHome[TYPE_LEAGUE_HOME.HISTORY]}
					>
						<Swiper slidesPerView={1} spaceBetween={16}>
							{dataLeagueHome[TYPE_LEAGUE_HOME.HISTORY]?.map((el, index) => (
								<SwiperSlide key={index}>
									<div className="card-league">
										<div
											className="ratio _dish-cardLeagueInfo"
											onClick={(e) => handleNavigate(e, `/leagues/${el._id}`)}
										>
											<CardLeagueInfo info={el} type={TYPE_LEAGUE_HOME.HISTORY} />
										</div>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</LeaguesCategory>
				</div>
			</div>
		)
	);
};
export default Leagues;
