import React from "react";

// --- assets
import NoTopicsImg from "assets/images/pics/profile-notopics.svg";
import "./ProfileNoTopics.scss";

const ProfileNoTopics = () => {
	return (
		<div className="profile-no-topics">
			<img src={NoTopicsImg} alt="No topics image" />
			<p className="profile-no-topics__text">No Topics added to favorites</p>
		</div>
	);
};

export default ProfileNoTopics;
