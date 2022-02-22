import React from "react";
import imgEmptyListProfileTopic from "assets/images/pics/empty-list-profile-topic.svg";

import s from "./Empties.module.scss";

const EmptyFavorites = () => {
	return (
		<div className={s.container}>
			<div className={s.favorites}>
				<img src={imgEmptyListProfileTopic} alt="" />
			</div>

			<p className={s.message}>No topics added to favorites</p>
		</div>
	);
};

export default EmptyFavorites;
