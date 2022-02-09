import { FRIENDS_MOCK_DATA } from "common/mocks/MOCK";
import React, { useEffect, useState } from "react";

//----assets
import "./ProfileFriends.scss";
//----components
import FriendCard from "./FriendCard";
import Search from "common/components/UI/Search";
import EmptyList from "common/components/empties/EmptyList";
import ApiCall from "common/services/ApiCall";
import { useDispatch } from "react-redux";
import { SET_SPINNER } from "redux/actions/mainActions/generalActions";

const ProfileFriends = () => {
	const apiCall = new ApiCall();
	const dispatch = useDispatch();

	const [friends, setFriends] = useState([]);

	const getData = () => {
		dispatch(SET_SPINNER(true));
		apiCall
			.get("/user/me/friends")
			.then((res) => {
				dispatch(SET_SPINNER(false));
				// console.log(res);
				setFriends(res.data);
			})
			.catch((err) => {
				dispatch(SET_SPINNER(false));
			});
	};

	useEffect(() => {
		let isMounted = true;
		if (isMounted) {
			getData();
			setFriends(FRIENDS_MOCK_DATA);
		}
		return () => {
			isMounted = false;
		};
	}, []);

	return (
		<div className="_wh-100 d-flex justify-content-center align-items-center favoriteTopics">
			{friends?.length > 0 ? (
				<div className="_wh-100 profile-friend">
					<Search cb={(value) => console.log(value)} />
					<div className="profile-friend__list">
						{friends?.map((el, index) => (
							<FriendCard key={index} friends={el} />
						))}
					</div>
				</div>
			) : (
				<EmptyList type="PROFILE_TOPIC" />
			)}
		</div>
	);
};

export default ProfileFriends;
