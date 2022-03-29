import React from "react";

// Hooks
import { useNavigate, useParams } from "react-router-dom";
import { useRequest } from "common/hooks/useRequest";

// Components, Services, Functions
import Countdown from "react-countdown";
import CardInner from "common/components/cardInner/CardInner";
import PlayFooter from "common/components/footer/PlayFooter";
import LeagueLeaderboard from "pages/innerLeague/innerLeagueComponents/LeagueLeaderboard";
import FilledButton from "common/components/UI/button/FilledButton";
import CountDownTimerNormal from "common/components/countdownTimer/CountDownTimerNormal";
import Text from "common/components/UI/text/Text";

// Redux
import { useDispatch } from "react-redux";
import { SET_GAME_SELECTION_TYPE } from "redux/actions/mainActions/generalActions";

// Styles, Icons, Images
import s from "./LeaguesInner.module.scss";
import PersonIcon from "@material-ui/icons/Person";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";

const ordinal = require("ordinal");

function calcLeagueType(start, end) {
	const now = Date.now();

	if (now >= end) {
		return "expired";
	} else if (now >= start) {
		return "started";
	} else {
		return "not-started";
	}
}

const LeaguesInner = () => {
	let { id } = useParams();

	const dispatch = useDispatch();

	const navigate = useNavigate();

	const { response: dataInnerLeague, success } = useRequest(`league/${id}`);

	const handlePlay = () => {
		dispatch(SET_GAME_SELECTION_TYPE({ type: "league", id: id }));
		if (dataInnerLeague?.players === 1) {
			navigate(`/leagues/${id}/onePlayer`);
		} else {
			navigate(`/leagues/${id}/twoPlayers`);
		}
	};

	return (
		success && (
			<div className={s.leaguesInner}>
				<CardInner
					type="league"
					subtitle={dataInnerLeague?.TopicId?.name}
					title={dataInnerLeague?.name}
					banner={encodeURI(dataInnerLeague?.logo)}
					bannerSize={132}
					rounded={false}
				>
					<div className={s.cardInnerContent}>
						<div id="primaryWhiteBlack" className="d-flex py-xl-2">
							<div className="mx-xl-auto">
								<Countdown
									date={dataInnerLeague.endTime}
									renderer={(props) => <CountDownTimerNormal timerProps={props} color="primary" />}
								/>
							</div>
						</div>

						<p className={s.playersNumber}>
							{dataInnerLeague?.players > 1 ? <SupervisorAccountIcon /> : <PersonIcon />}
							<span className="mx-1">
								{dataInnerLeague?.players} <Text as="span" ns="player" />
							</span>
						</p>

						{calcLeagueType(dataInnerLeague?.startTime, dataInnerLeague?.endTime) !== "expired" && (
							<FilledButton
								variant="secondary"
								className={`${s.playBtn} d-none d-xl-block`}
								onClick={handlePlay}
							>
								Play Now
							</FilledButton>
						)}
					</div>
				</CardInner>

				<div className={s.innerLeagueBody}>
					<Text ns="description" className={s.title} />

					<p className={s.text}>{dataInnerLeague?.description}</p>

					<Text ns="winner-awards" className={`${s.title} mt-4 mt-xl-5`} />

					<div className={s.awards}>
						{dataInnerLeague?.rewards?.map((el, index) => (
							<p key={index} className="d-flex gap-2">
								{el.place ? (
									<span className={s.key}>{`${ordinal(el?.place)} one:`}</span>
								) : (
									<span className={s.key}>{`${ordinal(el?.startPlace)} to ${ordinal(
										el?.endPlace
									)} one:`}</span>
								)}

								<span className={s.award}>{el.reward} AFN</span>
							</p>
						))}
					</div>

					<div className={s.board}>
						<Text ns="latest-results" className={s.title} />

						<p className={s.yourPosition}>
							<Text as="span" ns="your-pos" /> : 0
						</p>

						<LeagueLeaderboard id={id} isOnePlayerLeague={dataInnerLeague.players === 1} />
					</div>
				</div>

				{calcLeagueType(dataInnerLeague?.startTime, dataInnerLeague?.endTime) !== "expired" && <PlayFooter />}
			</div>
		)
	);
};

export default LeaguesInner;
