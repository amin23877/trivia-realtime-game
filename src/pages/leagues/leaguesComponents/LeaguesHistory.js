// Reacts
import React, { useMemo } from "react";
// Hooks
import { useNavigate } from "react-router-dom";
// Packages
// Components, Services, Functions
import EmptyList from "common/components/empties/EmptyList";
import CardLeagueInfo from "common/components/cardLeagueInfo/CardLeagueInfo";

// Styles, Icons, Images
import "./LeaguesHistory.scss";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { TYPE_LEAGUE_HOME } from "common/values/TYPES";
import { useRequest } from "common/hooks/useRequest";

const LeaguesHistory = () => {
	const navigate = useNavigate();

	const currentDate = useMemo(() => Date.now(), []);
	const { response: dataLeagueHistory, status } = useRequest(`league?minendtime=${currentDate}`);

	const handleGoBack = () => {
		navigate(-1);
	};

	return (
		status === "success" && (
			<div className="w-100 h-100 history">
				<div className="history-header">
					<ArrowBackIcon className="color-primary" onClick={handleGoBack} />
					<div className="_header-title color-primary mx-2">League History</div>
				</div>

				<div className="history-body ">
					{dataLeagueHistory ? (
						dataLeagueHistory?.map((el, index) => (
							<div key={index} className="ratio mb-3 mb-xl-3 _dish-cardLeagueInfo">
								<CardLeagueInfo info={el} type={TYPE_LEAGUE_HOME.HISTORY} />
							</div>
						))
					) : (
						<EmptyList />
					)}
				</div>
			</div>
		)
	);
};
export default LeaguesHistory;
