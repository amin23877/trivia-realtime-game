// Reacts
import React, { useMemo } from "react";

// Components, Services, Functions
import EmptyList from "common/components/empties/EmptyList";
import CardLeagueInfo from "common/components/cardLeagueInfo/CardLeagueInfo";

// Styles, Icons, Images
import "./LeaguesHistory.scss";
import { TYPE_LEAGUE_HOME } from "common/values/TYPES";
import { useRequest } from "common/hooks/useRequest";
import HeaderGoBack from "common/components/headerGoBack/HeaderGoBack";

const LeaguesHistory = () => {
	const currentDate = useMemo(() => Date.now(), []);
	const { response: dataLeagueHistory, status } = useRequest(`league?minendtime=${currentDate}`);

	return (
		status === "success" && (
			<div className="w-100 h-100 history">
				<HeaderGoBack title="leagues.history" />

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
