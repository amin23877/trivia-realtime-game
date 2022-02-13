import React from "react";

import "./FavoriteTopicCard.scss";
import iconRate from "assets/images/icons/rate-mini.svg";
import { IMAGE_URL } from "common/values/CORE";
import { useNavigate } from "react-router-dom";

const FavoriteTopicCard = ({ data }) => {
	// console.log(">> ", data);
	const navigate = useNavigate();

	const handleNavigate = (event, path) => {
		event.stopPropagation();
		// console.log(path);
		navigate(path);
	};
	return (
		<div className="favorite-card-2--item" onClick={(e) => handleNavigate(e, `/topics/${data?.TopicId?._id}`)}>
			<div className="favorite-card-2--item__image">
				<img src={`${IMAGE_URL}${encodeURI(data?.TopicId?.logo)}`} alt="" />
			</div>
			<div className="favorite-card-2--item__content">
				<p className="favorite-card-2--item__content__title">{data?.TopicId?.name}</p>
				<div className="favorite-card-2--item__content__details">
					<p className="favorite-card-2--item__content__details__quesplays">
						{data?.TopicId?.questions} questions / {data?.TopicId?.singlePlays + data?.TopicId?.doublePlays}{" "}
						plays
					</p>
					<p className="favorite-card-2--item__content__details__rating">
						<img src={iconRate} alt="icon rate" />
						<span>{data?.TopicId?.rate}</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default FavoriteTopicCard;
