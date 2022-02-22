import React from "react";
import imgEmptyFriends from "assets/images/pics/empty-friends-list.svg";

import s from "./Empties.module.scss";

const EmptyFriendsList = () => {
	return (
		<div className={s.container}>
			<div className={s.friends}>
				<img src={imgEmptyFriends} alt="" />
			</div>

			<p className={s.message}>Your Friends List Is Empty</p>
		</div>
	);
};

export default EmptyFriendsList;
