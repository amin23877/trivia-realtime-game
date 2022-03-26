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
// Redux
import { fetchTopics } from "redux/actions/topicActions/topicsActions";
// Material - lab
import { Drawer } from "@material-ui/core";
// Styles, Icons, Images
import "./Home.scss";
import { SET_SPINNER } from "redux/actions/mainActions/generalActions";
import ApiCall from "common/services/ApiCall";

const Home = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const apiCall = new ApiCall();

	const topics = useSelector((state) => state.stateTopic.topics);

	const [dataLeague, setDataLeague] = useState();
	const [openDrawerMenu, setOpenDrawerMenu] = useState(false);

	const handleNavigate = (event, path) => {
		event.stopPropagation();
		// console.log(path);
		navigate(path);
	};

	const handleDrawerOpen = () => {
		setOpenDrawerMenu(true);
	};

	const handleDrawerClose = () => {
		setOpenDrawerMenu(false);
	};

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
			dispatch(fetchTopics());
			getDataLeague();
		}
		return () => {
			isMounted = false;
		};
	}, []);

	return (
		topics && (
			<div className="fadeInFast home">
				<div className="home__header">
					<MobileHeader onDrawerOpen={handleDrawerOpen} />
				</div>

				<Drawer className="d-xl-none" variant="persistent" anchor="left" open={openDrawerMenu}>
					<Menu onDrawerClose={handleDrawerClose} />
				</Drawer>

				<div className="home__body">
					<div className="home-card-league">
						{!_.isEmpty(dataLeague) ? (
							<div
								className="ratio _dish-cardLeagueInfo"
								onClick={(e) => handleNavigate(e, `/leagues/${dataLeague?._id}`)}
							>
								<CardLeagueInfo info={dataLeague} />
							</div>
						) : null}
					</div>

					<HomeTopics topics={topics[0]?.topicList} type={topics[0]?.type} titleNs="home.top-topics" />

					<HomeTopics topics={topics[1]?.topicList} type={topics[1]?.type} titleNs="home.latest-topics" />

					<HomeTopics topics={topics[2]?.topicList} type={topics[2]?.type} titleNs="home.favorite-topics" />
				</div>
			</div>
		)
	);
};
export default Home;
