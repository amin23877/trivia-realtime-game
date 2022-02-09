// Reacts
import React from "react";
import CardTopic from "common/components/cardTopic/CardTopic";
import { Swiper, SwiperSlide } from "swiper/react";

// Redux
import { useSelector } from "react-redux";
import { TYPE_TOPIC } from "common/values/TYPES";

// Styles, Icons, Images
import "swiper/css";
import "./HomeTopics.scss";

const HomeTopics = ({ type }) => {
	const stateTopic = useSelector((state) => state.stateTopic);
	const topics = stateTopic.topics.filter((el) => el.type === type)[0]?.topicList;

	return (
		<div className="homeTopics">
			<Swiper
				breakpoints={{
					360: { slidesPerView: 2 },
					640: { slidesPerView: 3 },
					1200: { slidesPerView: 5 },
				}}
				spaceBetween={14}
			>
				{topics?.map((el, index) => (
					<SwiperSlide>
						<CardTopic key={index} data={type !== TYPE_TOPIC.FAVORITE ? el : el?.TopicId} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default HomeTopics;
