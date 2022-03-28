import React from "react";
import HandleFavoriteButton from "pages/innerTopic/innerTopicComponents/HandleFavoriteButton";
import CardInner from "common/components/cardInner/CardInner";
import { SET_GAME_SELECTION_TYPE, SET_OPEN_GAME_TYPES } from "redux/actions/mainActions/generalActions";
import { useDispatch } from "react-redux";

import s from "pages/innerTopic/InnerTopic.module.scss";

// images
import { ReactComponent as PlayIcon } from "assets/images/icons/gray-play-icon.svg";
import { ReactComponent as HelpIcon } from "assets/images/icons/help-icon.svg";
import FilledButton from "common/components/UI/button/FilledButton";

const TopicCardInner = ({ data, id }) => {
	const dispatch = useDispatch();

	const handlePlay = () => {
		dispatch(SET_GAME_SELECTION_TYPE({ type: "topic", id: id }));
		dispatch(SET_OPEN_GAME_TYPES(true));
	};

	return (
		<CardInner type="topic" banner={encodeURI(data.logo)} title={data.name} subtitle={data.categoryName}>
			<div className={s.info}>
				<p className={s.gray}>
					<PlayIcon className={s.icon} />
					<span className="mx-1">{data.singlePlays + data.doublePlays || 0}</span>
				</p>

				<p className={`${s.grey} flex-grow-1`}>
					<HelpIcon className={s.icon} />
					<span className="mx-1">{data.questions}</span>
				</p>
			</div>

			<hr className="d-xl-none my-0" />

			<div className={s.actionButtons}>
				<FilledButton ns="play" variant="secondary" onClick={handlePlay} className={s.playBtn} />

				<HandleFavoriteButton initialStatus={data.status} id={id} />
			</div>
		</CardInner>
	);
};

export default TopicCardInner;
