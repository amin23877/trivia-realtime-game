// Reacts
import React, { useEffect, useState } from "react";
// Hooks
import { useNavigate } from "react-router-dom";
// Packages
// Components, Services, Functions
import ApiCall from "common/services/ApiCall";
import { MOCK_CARDINFO } from "common/mocks/MOCK";
import EmptyList from "common/components/empties/EmptyList";
import CardLeagueInfo from "common/components/cardLeagueInfo/CardLeagueInfo";
// Redux
import { useDispatch } from "react-redux";
// Material - lab
// Styles, Icons, Images
import "./LeaguesHistory.scss";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { SET_SPINNER } from "redux/actions/mainActions/generalActions";

const LeaguesHistory = () => {
	const navigate = useNavigate();
	const apiCall = new ApiCall();
	const dispatch = useDispatch();

	const currentDate = Date.now();

	const [dataLeagueHistory, setDataLeagueHistory] = useState([]);

	const mockHistory = [MOCK_CARDINFO, MOCK_CARDINFO, MOCK_CARDINFO, MOCK_CARDINFO, MOCK_CARDINFO, MOCK_CARDINFO];

	const handleGoBack = () => {
		navigate(-1);
	};

	const getDataLeagueHistory = () => {
		dispatch(SET_SPINNER(true));
		apiCall
			.get(`league?minendtime=${currentDate}`)
			.then((res) => {
				dispatch(SET_SPINNER(false));
				// console.log(res.data);
				setDataLeagueHistory(res.data);
			})
			.catch((err) => {
				dispatch(SET_SPINNER(false));
				// console.log(err);
			});
	};

	useEffect(() => {
		let isMounted = true;
		if (isMounted) {
			getDataLeagueHistory();
		}
		return () => {
			isMounted = false;
		};
	}, []);

	return (
		<div className="w-100 h-100 history">
			<div className="d-flex d-xl-none align-items-center _header _header-shadow history-header">
				<ArrowBackIcon className="color-primary" onClick={handleGoBack} />
				<div className="_header-title color-primary mx-2">League History</div>
			</div>

			<div className="_body-height-H history-body ">
				{dataLeagueHistory.length > 0 ? (
					dataLeagueHistory?.map((el, index) => (
						<div key={index} className="card-league">
							<div className="ratio _dish-cardLeagueInfo">
								<CardLeagueInfo info={el} expired={true} />
							</div>
						</div>
					))
				) : (
					<EmptyList />
				)}
			</div>
		</div>
	);
};
export default LeaguesHistory;
