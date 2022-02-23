import React from "react";
import { useRequest } from "common/hooks/useRequest";

//----assets
import "./ProfileFriends.scss";

//----components
import Search from "common/components/UI/Search";
import EmptyFriendsList from "common/components/empties/EmptyFriendsList";
import FriendCard from "pages/profile/profileTabs/Friends/FriendCard";

const ProfileFriends = ({ id }) => {
	const { response: friends, success } = useRequest(`/user/${id}/friends`);

	if (success && !friends.length) return <EmptyFriendsList />;

	return (
		success && (
			<div className="profile-friend">
				<Search cb={(value) => console.log(value)} />

				<div className="profile-friend__list">
					{/*{friends?.map((el, index) => (*/}
					{/*	<FriendCard key={index} index={index} data={el.users[0]} />*/}
					{/*))}*/}
				</div>
			</div>
		)
	);
};

export default ProfileFriends;
