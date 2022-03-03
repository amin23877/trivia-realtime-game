import React, { useState } from "react";
import { useRequest } from "common/hooks/useRequest";
import { useDebounce } from "common/hooks/useDebounce";

//----assets
import "./ProfileFriends.scss";

//----components
import Search from "common/components/UI/Search";
import EmptyFriendsList from "common/components/empties/EmptyFriendsList";
import FriendCard from "pages/profile/profileTabs/Friends/FriendCard";

const ProfileFriends = () => {
	const [searchQuery, setSearchQuery] = useState("");

	const debouncedQuery = useDebounce(searchQuery, 1000);

	const { response: friends, status } = useRequest(`/user/me/friends?username=${debouncedQuery}`);

	const handleSearch = (e) => setSearchQuery(e.target.value);

	if (status === "success" && !friends.length && !debouncedQuery) return <EmptyFriendsList />;

	return (
		<div className="profile-friend">
			<Search value={searchQuery} onChange={handleSearch} />

			{status === "success" && (
				<div className="profile-friend__list">
					{friends?.map((el, index) => (
						<FriendCard key={index} index={index} data={el} />
					))}
				</div>
			)}
		</div>
	);
};

export default ProfileFriends;
