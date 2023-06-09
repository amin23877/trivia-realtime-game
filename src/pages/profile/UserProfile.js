import React, { useState } from "react";
import ProfileHeader from "pages/profile/profileComponents/profileHeader/ProfileHeader";
import { Link } from "react-router-dom";
import TabPanel from "common/components/UI/tabs/TabPanel";
import OutlinedButton from "common/components/UI/button/OutlinedButton";
import ProfileFavoriteTopics from "pages/profile/profileTabs/favorite/ProfileFavoriteTopics";
import ProfilePerformance from "pages/profile/profileTabs/Performance/ProfilePerformance";
import ProfileFriends from "pages/profile/profileTabs/Friends/ProfileFriends";
import { useSelector } from "react-redux";

import s from "./Profile.module.scss";

const UserProfile = () => {
	const [activeTab, setActiveTab] = useState(0);

	const user = useSelector((state) => state.stateUser.userInfo);

	const handleChangeTab = (e, newValue) => {
		setActiveTab(newValue);
	};

	const editProfileBtn = (
		<Link to="/profile/edit">
			<OutlinedButton ns="btn.edit-profile" startIcon={s.editIcon} className={s.editButton} variant="secondary" />
		</Link>
	);

	return (
		<div className={s.profileRoot}>
			<ProfileHeader
				tabsProps={{
					value: activeTab,
					onChange: handleChangeTab,
					tabs: ["profile.tabs.favorites", "profile.tabs.performance", "profile.tabs.friends"],
				}}
				actionButton={editProfileBtn}
				data={user}
			/>

			<TabPanel className={s.profileContents} activeTab={activeTab} value={0}>
				<ProfileFavoriteTopics id={"me"} />
			</TabPanel>

			<TabPanel className={s.profileContents} activeTab={activeTab} value={1}>
				<ProfilePerformance
					id={"me"}
					progressProps={{
						level: user.level,
						xp: user.xp,
						levelXP: user.xp + user.requiredXP,
					}}
				/>
			</TabPanel>

			<TabPanel className={s.profileContentsFriend} activeTab={activeTab} value={2}>
				<ProfileFriends />
			</TabPanel>
		</div>
	);
};

export default UserProfile;
