// Reacts
import React from "react";

// Hooks
import { Link, useNavigate } from "react-router-dom";
import { useRequest } from "common/hooks/useRequest";

// Components, Services, Functions
import CardLeagueInfo from "common/components/cardLeagueInfo/CardLeagueInfo";
import Logo from "common/components/UI/Logo";
import { Swiper, SwiperSlide } from "swiper/react";

// Redux
import { TYPE_LEAGUE_HOME } from "common/values/TYPES";

// Styles, Icons, Images
import "swiper/css";
import "./Leagues.scss";
import arrowForwardMini from "assets/images/icons/arrow-forward-mini.svg";
import Text from "common/components/UI/text/Text";

const LeaguesCategory = ({ data, titleNs, seeAllPageLink, children }) => {
	return (
		data && (
			<>
				<div className="d-flex justify-content-between align-items-center">
					<Text className="leagues-title flex-grow-1" ns={titleNs} />

					{seeAllPageLink && (
						<Link className="leagues-subtitle" to={seeAllPageLink}>
							<Text as="span" ns="see-all" />
							<img className="mx-2" src={arrowForwardMini} alt="" />
						</Link>
					)}
				</div>

				{children}
			</>
		)
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
					<Logo className="leagues-header-logo" />
				</div>

				<div className="leagues-body">
					<LeaguesCategory titleNs="leagues.daily" data={dataLeagueHome[TYPE_LEAGUE_HOME.DAILY]}>
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

					<LeaguesCategory titleNs="leagues.weekly" data={dataLeagueHome[TYPE_LEAGUE_HOME.WEEKLY]}>
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

					<LeaguesCategory titleNs="leagues.grand" data={dataLeagueHome[TYPE_LEAGUE_HOME.GRAND]}>
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
						titleNs="leagues.history"
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
