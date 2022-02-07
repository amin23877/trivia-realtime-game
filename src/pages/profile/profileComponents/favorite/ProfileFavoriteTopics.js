import React, { useEffect, useState } from "react";
// import ProfileNoTopics from "../../ProfileNoTopics";
import { MOCK_FAVORITE_TOPICS } from "common/mocks/MOCK";

import FavoriteTopicCard from "pages/profile/profileComponents/favorite/FavoriteTopicCard";
import ProfileNoTopics from "pages/profile/profileComponents/ProfileNoTopics";

import "./ProfileFavoriteTopics.scss";

const ProfileFavoriteTopics = () => {
	const [data, setData] = useState();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setData(MOCK_FAVORITE_TOPICS);
		setIsLoading(false);
		// fetch favorite topics
		// set loading status
	}, []);

	return !isLoading && data.length > 0 ? (
		<div className="favorite-topics-grid bg1">
			{data.map((el, index) => (
				<FavoriteTopicCard key={index} data={el} />
			))}
		</div>
	) : (
		<ProfileNoTopics />
	);
};

export default ProfileFavoriteTopics;
