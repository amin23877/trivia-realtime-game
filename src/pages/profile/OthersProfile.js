import React, { useState } from "react";
import ProfileHeader from "pages/profile/profileComponents/profileHeader/ProfileHeader";
import TabPanel from "common/components/UI/tabs/TabPanel";
import ProfileFavoriteTopics from "pages/profile/profileTabs/favorite/ProfileFavoriteTopics";
import ProfilePerformance from "pages/profile/profileTabs/Performance/ProfilePerformance";
import FriendActionButton from "pages/profile/profileComponents/friendActionButton/FriendActionButton";
import { useRequest } from "common/hooks/useRequest";
import { useParams } from "react-router-dom";

import s from "./Profile.module.scss";

const OthersProfile = () => {
	const { id } = useParams();

	const [activeTab, setActiveTab] = useState(0);

	const { response, success } = useRequest(`user/${id}`);

	const handleChangeTab = (e, newValue) => {
		setActiveTab(newValue);
	};

	if (!success) return null;

	return (
		<div className={s.profileRoot}>
			<ProfileHeader
				tabsProps={{
					value: activeTab,
					onChange: handleChangeTab,
					tabs: ["Favorite Topics", "Performance"],
				}}
				actionButton={<FriendActionButton isFriend={response.friend} id={id} />}
				data={response}
			/>

			<TabPanel className={s.profileContents} activeTab={activeTab} value={0}>
				<ProfileFavoriteTopics id={id} />
			</TabPanel>

			<TabPanel className={s.profileContents} activeTab={activeTab} value={1}>
				<ProfilePerformance id={id} />
			</TabPanel>
		</div>
	);
};

export default OthersProfile;
