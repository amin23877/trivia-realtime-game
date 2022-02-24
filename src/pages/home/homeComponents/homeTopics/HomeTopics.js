// Reacts
import React from "react";
import CardTopic from "common/components/cardTopic/CardTopic";
import { Swiper, SwiperSlide } from "swiper/react";

// Redux
import { TYPE_TOPIC } from "common/values/TYPES";

// Styles, Icons, Images
import "swiper/css";
import "./HomeTopics.scss";

const HomeTopics = ({ topics, type }) => {
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
					<SwiperSlide key={index}>
						<CardTopic data={type !== TYPE_TOPIC.FAVORITE ? el : el?.TopicId} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default HomeTopics;
