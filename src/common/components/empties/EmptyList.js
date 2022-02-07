import React from "react";

import "./Empties.scss";
import imgEmptyList from "assets/images/pics/empty-list.png";
import imgEmptyListProfileTopic from "assets/images/pics/empty-list-profile-topic.svg";

const EmptyList = ({ type }) => {
	return (
		<div className="_wh-100 d-flex justify-content-center align-items-center emptyList">
			{type === "PROFILE_TOPIC" ? (
				<div className="_wh-100 d-flex justify-content-center align-items-center profile-topics">
					<img src={imgEmptyListProfileTopic} alt="" />
					{/* <p className="message">There is nothing . . .</p> */}
				</div>
			) : (
				<>
					<img className="_empty-list" src={imgEmptyList} alt="" />
				</>
			)}
		</div>
	);
};
export default EmptyList;
