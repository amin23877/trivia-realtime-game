import React, { useState } from "react";
import { useParams } from "react-router-dom";

// --- components
import UserProfileHeader from "pages/profile/profileComponents/profileHeader/UserProfileHeader";
import OthersProfileHeader from "pages/profile/profileComponents/profileHeader/OthersProfileHeader";
import Tabs from "common/components/UI/tabs/Tabs";
import TabPanel from "common/components/UI/tabs/TabPanel";
import ProfileFavoriteTopics from "pages/profile/profileTabs/favorite/ProfileFavoriteTopics";
import ProfilePerformance from "pages/profile/profileTabs/Performance/ProfilePerformance";
import ProfileFriends from "pages/profile/profileTabs/Friends/ProfileFriends";

// --- assets
import "./Profile.scss";

/*
 * 	this component show user profile if there is no 'id'
 * 	and show others profile if user id exist
 * */
const Profile = () => {
	const { id } = useParams();

	const [activeTab, setActiveTab] = useState(0);

	const handleChangeTab = (e, newValue) => {
		setActiveTab(newValue);
	};

	return (
		<div className="profile-root">
			{id ? <OthersProfileHeader id={id} /> : <UserProfileHeader />}

			<div className="profile-root__tabs-container">
				<Tabs
					tabs={["Favorite Topics", "Performance", "Friends"]}
					value={activeTab}
					onChange={handleChangeTab}
					variant="indicator"
				/>
			</div>

			<TabPanel className="profile--contents" activeTab={activeTab} value={0}>
				<ProfileFavoriteTopics id={id ?? "me"} />
			</TabPanel>

			<TabPanel className="profile--contents" activeTab={activeTab} value={1}>
				<ProfilePerformance id={id ?? "me"} />
			</TabPanel>

			<TabPanel className="profile--contents profile--contents_friend" activeTab={activeTab} value={2}>
				<ProfileFriends id={id ?? "me"} />
			</TabPanel>
		</div>
	);
};

export default Profile;
