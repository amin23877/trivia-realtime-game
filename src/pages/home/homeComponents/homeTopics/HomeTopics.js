// Reacts
import React from "react";
import { Link } from "react-router-dom";
import CardTopic from "common/components/cardTopic/CardTopic";
import Text from "common/components/UI/text/Text";
import { Swiper, SwiperSlide } from "swiper/react";

// Redux
import { TYPE_TOPIC } from "common/values/TYPES";

// Styles, Icons, Images
import "swiper/css";
import "./HomeTopics.scss";
import arrowForwardMini from "assets/images/icons/arrow-forward-mini.svg";

const HomeTopics = ({ topics, type, titleNs }) => {
	if (topics.length === 0) return null;

	return (
		<div className="topicsContainer">
			<div className="d-flex justify-content-between align-items-center topics-header">
				<Text className="topics-header__title" ns={titleNs} />

				<Link to={`/topics/all/${type}`} className="subtitle">
					<Text as="span" ns="see-all" />

					<img className="mx-2" src={arrowForwardMini} alt="" />
				</Link>
			</div>

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
		</div>
	);
};

export default HomeTopics;
