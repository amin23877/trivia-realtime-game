import React from "react";
import { useRequest } from "common/hooks/useRequest";

// Components, Services, Functions
import EmptyFavorites from "common/components/empties/EmptyFavorites";
import CardTopic from "common/components/cardTopic/CardTopic";

// Styles, Icons, Images
import "./ProfileFavoriteTopics.scss";

const ProfileFavoriteTopics = ({ id }) => {
	const { response, success } = useRequest(`/user/${id}/membership`);

	return (
		success && (
			<div className="favoriteTopics">
				{response.result?.length > 0 ? (
					<div className="favorite-topics-grid">
						{response.result.map((el, index) => (
							<div key={index} className="favorite-topics-grid__item">
								<CardTopic key={index} data={el.TopicId} />
							</div>
						))}
					</div>
				) : (
					<EmptyFavorites />
				)}
			</div>
		)
	);
};

export default ProfileFavoriteTopics;
