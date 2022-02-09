// Reacts
import React, { useEffect, useState } from "react";
// Hooks
// Packages
// Components, Services, Functions
import ApiCall from "common/services/ApiCall";
import EmptyList from "common/components/empties/EmptyList";
import FavoriteTopicCard from "pages/profile/profileComponents/favorite/FavoriteTopicCard";
// Redux
import { useDispatch } from "react-redux";
import { SET_SPINNER } from "redux/actions/mainActions/generalActions";
// Material - lab
// Styles, Icons, Images
import "./ProfileFavoriteTopics.scss";

const ProfileFavoriteTopics = () => {
	const apiCall = new ApiCall();
	const dispatch = useDispatch();

	const [favoriteTopics, setFavoriteTopics] = useState();

	const getData = () => {
		dispatch(SET_SPINNER(true));
		apiCall
			.get("/user/me/membership")
			.then((res) => {
				dispatch(SET_SPINNER(false));
				// console.log(res);
				setFavoriteTopics(res.data.result);
			})
			.catch((err) => {
				dispatch(SET_SPINNER(false));
			});
	};

	useEffect(() => {
		let isMounted = true;
		if (isMounted) {
			getData();
		}
		return () => {
			isMounted = false;
		};
	}, []);

	return (
		<div className="_wh-100 d-flex justify-content-center align-items-center favoriteTopics">
			{favoriteTopics?.length > 0 ? (
				<div className="favorite-topics-grid">
					{favoriteTopics.map((el, index) => (
						<FavoriteTopicCard key={index} data={el} />
					))}
				</div>
			) : (
				<EmptyList type="PROFILE_TOPIC" />
			)}
		</div>
	);
};

export default ProfileFavoriteTopics;
