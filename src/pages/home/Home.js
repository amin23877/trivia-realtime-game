import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// Packages
import _ from "lodash";
// Components, Services, Functions
import Menu from "pages/menu/Menu";
import MobileHeader from "common/components/header/MobileHeader";
import HomeTopics from "./homeComponents/homeTopics/HomeTopics";
import CardLeagueInfo from "common/components/cardLeagueInfo/CardLeagueInfo";
import ModalConfirmDeactivation from "pages/modals/ModalConfirmDeactivation";
// Redux
import { MODALS } from "common/values/MODALS";
import { fetchTopics } from "redux/actions/topicActions/topicsActions";
// Material - lab
import { Drawer } from "@material-ui/core";
// Styles, Icons, Images
import "./Home.scss";
import arrowForwardMini from "assets/images/icons/arrow-forward-mini.svg";
import { SET_SPINNER } from "redux/actions/mainActions/generalActions";
import ApiCall from "common/services/ApiCall";

const Home = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const apiCall = new ApiCall();

	const stateGeneral = useSelector((state) => state.stateGeneral);
	const stateTopic = useSelector((state) => state.stateTopic);

	const [dataLeague, setDataLeague] = useState();

	const cardInfo = {
		title: "Chemical Compounds",
		remainingTime: 8407,
		price: 5000,
		players: 2,
		img: "",
	};

	const handleNavigate = (event, path) => {
		event.stopPropagation();
		// console.log(path);
		navigate(path);
	};

	// Drawer Menu --------------------------------------
	const [openDrawerMenu, setOpenDrawerMenu] = React.useState(false);
	const handleDrawerOpen = () => {
		setOpenDrawerMenu(true);
	};
	const handleDrawerClose = () => {
		setOpenDrawerMenu(false);
	};
	// -------------------------------------- Drawer Menu

	const getDataLeague = () => {
		dispatch(SET_SPINNER(true));
		apiCall
			.get(`league?minEndTime=${Date.now()}`)
			.then((res) => {
				dispatch(SET_SPINNER(false));
				res.data.length < 1
					? setDataLeague({})
					: res.data.length > 1
					? setDataLeague(_.orderBy(res.data, ["startTime"], ["asc"])[0])
					: setDataLeague(res.data[0]);
			})
			.catch((err) => {
				dispatch(SET_SPINNER(false));
			});
	};

	useEffect(() => {
		let isMounted = true;
		if (isMounted) {
			// localStorage.setItem('remainingTime', cardInfo.remainingTime);
			// let remainingTime = localStorage.getItem('remainingTime');
			// remainingTime
			//   ? localStorage.setItem('remainingTime', remainingTime)
			//   : localStorage.setItem('remainingTime', cardInfo.remainingTime);

			dispatch(fetchTopics());
			getDataLeague();
		}
		return () => {
			isMounted = false;
		};
	}, []);

	return (
		<div className="fadeInFast home">
			<MobileHeader onDrawerOpen={handleDrawerOpen} />

			<Drawer className="d-xl-none" variant="persistent" anchor="left" open={openDrawerMenu}>
				<Menu onDrawerClose={handleDrawerClose} />
			</Drawer>

			<div className="home__body">
				<div className="card-league">
					{!_.isEmpty(dataLeague) ? (
						<div className="ratio _dish-cardLeagueInfo">
							{/* #ratio */}
							<CardLeagueInfo info={dataLeague} />
						</div>
					) : null}
				</div>

				{stateTopic.topics?.map((item, index) => (
					<div key={index} className="topics">
						<div className="d-flex justify-content-between align-items-center topics-header">
							<p className="title">{item.topic}</p>
							<p className="subtitle" onClick={(e) => handleNavigate(e, `/topics/all/${item.type}`)}>
								see all
								<img className="mx-2" src={arrowForwardMini} alt="" />
							</p>
						</div>

						<div>
							<HomeTopics type={item.type} />
						</div>
					</div>
				))}
			</div>

			{/* #modalUse step0 */}
			{stateGeneral.modals[MODALS.deactivation] ? <ModalConfirmDeactivation /> : null}
		</div>
	);
};
export default Home;
