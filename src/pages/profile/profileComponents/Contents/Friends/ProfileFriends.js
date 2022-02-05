import { FRIENDS_MOCK_DATA } from "common/mocks/MOCK";
import React, { useEffect, useState } from "react";

//----assets
import "./ProfileFriends.scss";
//----components
import ProfileNoTopics from "../../ProfileNoTopics";
import FriendCard from "./FriendCard";
import Search from "common/components/UI/Search";

const ProfileFriends = () => {
	const [data, setData] = useState();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setData(FRIENDS_MOCK_DATA);
		setIsLoading(false);
		// fetch favorite topics
		// set loading status
	}, []);

	if (isLoading) return <div>Loading...</div>;

	return data.length > 0 ? (
		<div className="profile-friend">
			<Search cb={(value) => console.log(value)} />

			<div className="profile-friend__list">
				{data.map((f, i) => (
					<FriendCard key={i} data={f} />
				))}
			</div>
		</div>
	) : (
		<ProfileNoTopics />
	);
};

export default ProfileFriends;
