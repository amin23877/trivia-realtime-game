import React from "react";

// --- components
// --- assets
import "./ProfileContents.scss";

const ProfileContents = ({ children }) => {
	return <div className="profile--contents">{children ? children : null}</div>;
};

export default ProfileContents;
