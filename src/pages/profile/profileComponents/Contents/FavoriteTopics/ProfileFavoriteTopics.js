import React, { useEffect, useState } from "react";
import ProfileFavoriteTopicCard2 from "./FavoriteTopicCard2";
import ProfileNoTopics from "../../ProfileNoTopics";
import { MOCK_FAVORITE_TOPICS } from "common/mocks/MOCK";

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
		<div className="favorite-topics-grid">
			{data.map((ft, i) => (
				<ProfileFavoriteTopicCard2 key={i} data={ft} />
			))}
		</div>
	) : (
		<ProfileNoTopics />
	);
};

export default ProfileFavoriteTopics;
