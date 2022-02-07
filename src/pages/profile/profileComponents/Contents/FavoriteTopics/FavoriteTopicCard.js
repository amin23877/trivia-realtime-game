import React from "react";
import PropTypes from "prop-types";
//---- assets
import StarIcon from "assets/images/icons/rate-mini.svg";
import "./FavoriteTopicCard.scss";

const ProfileFavoriteTopicCard = ({ data }) => {
	return (
		<div className="p-favorite-topic--card">
			<img src={data.image} className="p-favorite-topic--card__img" alt={data.title} />
			<div className="p-favorite-topic--card__content">
				<div className="p-favorite-topic--card__content__header">
					<div className="p-favorite-topic--card__content__header__title">
						<p>{data.title}</p>
					</div>
					<div className="p-favorite-topic--card__content__header__details">
						<span>{data.questions} questions</span>&nbsp;&nbsp;/&nbsp;&nbsp;
						<span>{data.plays} plays</span>
					</div>
				</div>
				<div className="p-favorite-topic--card__content__footer">
					<div className="p-favorite-topic--card__content__footer__category">
						<p>{data.category}</p>
					</div>
					<div className="p-favorite-topic--card__content__footer__rating">
						<div className="p-favorite-topic--card__content__footer__rating__stars">
							<img src={StarIcon} alt="rate star icon" />
							<span>{data.rating}</span>
						</div>
						<div className="p-favorite-topic--card__content__footer__rating__rates">
							<span>({data.rates})</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

ProfileFavoriteTopicCard.propTypes = {
	data: PropTypes.object, // use objectOf when api is ready
};

export default ProfileFavoriteTopicCard;
