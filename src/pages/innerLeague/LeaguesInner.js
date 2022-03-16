import React from "react";

// Hooks
import { useNavigate, useParams } from "react-router-dom";
import { useRequest } from "common/hooks/useRequest";

// Components, Services, Functions
import Countdown from "react-countdown";
import CountdownTimer from "common/components/countdownTimer/CountDownTimer";
import CardInner from "common/components/cardInner/CardInner";
import PlayFooter from "common/components/footer/PlayFooter";
import LeagueLeaderboard from "pages/innerLeague/innerLeagueComponents/LeagueLeaderboard";
import FilledButton from "common/components/UI/button/FilledButton";

// Redux
import { useDispatch } from "react-redux";
import { SET_GAME_SELECTION_TYPE } from "redux/actions/mainActions/generalActions";

// Styles, Icons, Images
import s from "./LeaguesInner.module.scss";
import PersonIcon from "@material-ui/icons/Person";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
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

	var ordinal = require("ordinal");

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
					subtitle={dataInnerLeague?.TopicId?.name}
					title={dataInnerLeague?.name}
					banner={encodeURI(dataInnerLeague?.logo)}
					bannerSize={132}
					rounded={false}
				>
					<div className={s.cardInnerContent}>
						<div id="primaryWhiteBlack" className="d-flex py-xl-2">
							<div className="mx-xl-auto">
								<Countdown date={dataInnerLeague.endTime} renderer={CountdownTimer} />
							</div>
						</div>

						<p className={s.playersNumber}>
							{dataInnerLeague?.players > 1 ? <SupervisorAccountIcon /> : <PersonIcon />}
							<span className="mx-1">{`${dataInnerLeague?.players} player`}</span>
						</p>
						{calcLeagueType(dataInnerLeague?.startTime, dataInnerLeague?.endTime) !== 'expired' &&
							<FilledButton
								variant="secondary"
								className={`${s.playBtn} d-none d-xl-block`}
								onClick={handlePlay}
							>
								Play Now
							</FilledButton>}
					</div>
				</CardInner>

				<div className={s.innerLeagueBody}>
					<p className={s.title}>Description:</p>

					<p className={s.text}>{dataInnerLeague?.description}</p>

					<p className={`${s.title} mt-4 mt-xl-5`}>Winners Awards:</p>

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
						<p className={s.title}>Latest results:</p>
						<p className={s.yourPosition}>Your position : 0</p>

						<LeagueLeaderboard id={id} />
					</div>
				</div>
				{calcLeagueType(dataInnerLeague?.startTime, dataInnerLeague?.endTime) !== 'expired' &&

					<PlayFooter />
				}

			</div>
		)
	);
};

export default LeaguesInner;
