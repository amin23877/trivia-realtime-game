import React, { useEffect, useState } from "react";
import TopicCardInner from "pages/innerTopic/innerTopicComponents/TopicCardInner";
import PlayFooter from "common/components/footer/PlayFooter";
import CardLeagueInfo from "common/components/cardLeagueInfo/CardLeagueInfo";
import TopicLeaderboard from "pages/innerTopic/innerTopicComponents/TopicLeaderboard";
import { useRequest } from "common/hooks/useRequest";
import { useParams } from "react-router-dom";
import ApiCall from "common/services/ApiCall";
import { useDispatch } from "react-redux";
import { SET_SPINNER, SET_TYPE_LEADERBOARD_COMPONENT } from "redux/actions/mainActions/generalActions";
import { TYPE_LEADERBOARD_COMPONENT } from "common/values/TYPES";

import s from "./InnerTopic.module.scss";

const api = new ApiCall();

const InnerTopic = () => {
	let { id } = useParams();
	const dispatch = useDispatch();

	const [dataLeague, setDataLeague] = useState();

	const { response: dataInnerTopic, success } = useRequest(`topic/${id}`);

	const getDataLeague = () => {
		dispatch(SET_SPINNER(true));
		api.get(`league?TopicId=${id}&minendTime=${Date.now()}`)
			.then((res) => {
				dispatch(SET_SPINNER(false));
				res.data.length > 0 ? setDataLeague(res.data[0]) : setDataLeague({});
			})
			.catch(() => {
				dispatch(SET_SPINNER(false));
			});
	};

	useEffect(() => {
		let isMounted = true;
		if (isMounted) {
			dispatch(SET_TYPE_LEADERBOARD_COMPONENT(TYPE_LEADERBOARD_COMPONENT.INNER_TOPIC));
			// getDataInnerTopic();
			getDataLeague();
		}
		return () => {
			isMounted = false;
		};
	}, []);

	return (
		success && (
			<div className={s.container}>
				<TopicCardInner id={id} data={dataInnerTopic} />

				<div className={s.contentSection}>
					{dataLeague && (
						<div className="ratio _dish-cardLeagueInfo">
							<CardLeagueInfo info={dataLeague} />
						</div>
					)}

					<p className={s.title}>Description</p>

					<p className={s.text}>{dataInnerTopic?.description}</p>

					<div className={s.badges}>
						{dataInnerTopic?.tags?.map((el, index) => (
							<p key={index} className={s.badge}>
								{el}
							</p>
						))}
					</div>

					<p className={`${s.title} ms-2 ms-xl-0`}>Topic Leaderboard</p>

					<div className="mt-4">
						<TopicLeaderboard id={id} />
					</div>
				</div>

				<PlayFooter />
			</div>
		)
	);
};

export default InnerTopic;
