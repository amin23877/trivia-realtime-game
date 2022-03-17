import React, { useEffect } from "react";
import TopicCardInner from "pages/innerTopic/innerTopicComponents/TopicCardInner";
import PlayFooter from "common/components/footer/PlayFooter";
import TopicLeaderboard from "pages/innerTopic/innerTopicComponents/TopicLeaderboard";
import { useRequest } from "common/hooks/useRequest";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SET_TYPE_LEADERBOARD_COMPONENT } from "redux/actions/mainActions/generalActions";
import { TYPE_LEADERBOARD_COMPONENT } from "common/values/TYPES";

import s from "./InnerTopic.module.scss";

const InnerTopic = () => {
	let { id } = useParams();
	const dispatch = useDispatch();

	const { response: dataInnerTopic, success } = useRequest(`topic/${id}`);

	useEffect(() => {
		dispatch(SET_TYPE_LEADERBOARD_COMPONENT(TYPE_LEADERBOARD_COMPONENT.INNER_TOPIC));
	}, [dispatch]);

	return (
		success && (
			<div className={s.container}>
				<TopicCardInner id={id} data={dataInnerTopic} />

				<div className={s.contentSection}>
					<p className={s.title}>Description</p>

					<p className={s.text}>{dataInnerTopic?.description}</p>

					<div className={s.badges}>
						{dataInnerTopic?.tags?.map((el, index) => (
							<span key={index} className={s.badge}>
								{el}
							</span>
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
