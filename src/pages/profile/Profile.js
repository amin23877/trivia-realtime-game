import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

// --- components
import ProfileHeader from "./profileComponents/ProfileHeader";
import ProfileContents from "./profileComponents/ProfileContents";
// --- assets
import "./Profile.scss";
import ProfileTabs from "pages/profile/profileComponents/ProfileTabs";

const Profile = () => {
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		if (/\/(profile)$/.test(location.pathname)) {
			navigate("/profile/favorite-topics");
		}
	}, [location.pathname, navigate]);

	return (
		<div className="profile-root">
			<ProfileHeader />
			<ProfileTabs />
			<ProfileContents>
				<Outlet />
			</ProfileContents>
		</div>
	);
};

Profile.propTypes = {
	tab: PropTypes.string,
};

export default Profile;
