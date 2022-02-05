import React from "react";

import "./FavoriteTopicCard2.scss";
import iconRate from "assets/images/icons/rate-mini.svg";

const HomeTopics = ({ data }) => {
	return (
		<div className="favorite-card-2--item">
			<div className="favorite-card-2--item__image">
				<img src={data.image} alt={data.title + " image"} />
			</div>
			<div className="favorite-card-2--item__content">
				<p className="favorite-card-2--item__content__title">{data.title}</p>
				<div className="favorite-card-2--item__content__details">
					<p className="favorite-card-2--item__content__details__quesplays">
						{data.questions} questions / {data.plays} plays
					</p>
					<p className="favorite-card-2--item__content__details__rating">
						<img src={iconRate} alt="icon rate" />
						<span>{data.rating}</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default HomeTopics;
