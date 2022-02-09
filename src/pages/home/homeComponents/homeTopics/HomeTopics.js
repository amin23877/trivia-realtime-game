// Reacts
import React from "react";
// Hooks
import { useNavigate } from "react-router-dom";
// Packages
// Components, Services, Functions
import { IMAGE_URL } from "common/values/CORE";
// Redux
import { useSelector } from "react-redux";
// Material - lab
// Styles, Icons, Images
import "./HomeTopics.scss";
import imgMain from "assets/images/test/1.png";
import iconRate from "assets/images/icons/rate-mini.svg";
import CardTopic from "common/components/cardTopic/CardTopic";
import { TYPE_TOPIC } from "common/values/TYPES";

const HomeTopics = ({ type }) => {
	const navigate = useNavigate();

	const stateTopic = useSelector((state) => state.stateTopic);
	const topics = stateTopic.topics.filter((el) => el.type === type)[0]?.topicList;

	const handleShowTopicInner = (event, info) => {
		handleNavigate(event, `/topics/${info._id}`);
	};

	const handleNavigate = (event, path) => {
		event.stopPropagation();
		navigate(path);
	};

	return (
		<div className="_wh-100 d-flex justify-content-between align-items-stretch homeTopics">
			{topics?.map((el, index) => (
				<div
					key={index}
					className="_topic-card-container"
					onClick={(e) => {
						handleShowTopicInner(e, type !== TYPE_TOPIC.FAVORITE ? el : el?.TopicId);
					}}
				>
					<CardTopic data={type !== TYPE_TOPIC.FAVORITE ? el : el?.TopicId} />
				</div>
			))}
		</div>
	);
};

export default HomeTopics;
