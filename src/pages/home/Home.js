import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// Packages
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

const Home = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const stateGeneral = useSelector((state) => state.stateGeneral);
	const stateTopic = useSelector((state) => state.stateTopic);

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

	useEffect(() => {
		let isMounted = true;
		if (isMounted) {
			// localStorage.setItem('remainingTime', cardInfo.remainingTime);
			// let remainingTime = localStorage.getItem('remainingTime');
			// remainingTime
			//   ? localStorage.setItem('remainingTime', remainingTime)
			//   : localStorage.setItem('remainingTime', cardInfo.remainingTime);

			dispatch(fetchTopics());
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
					<div className="ratio _dish-cardLeagueInfo">
						{/* #ratio */}
						{/* <CardLeagueInfo info={cardInfo} /> */}
						{/* EDIT */}
					</div>
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
