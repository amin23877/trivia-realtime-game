import React from "react";
import Avatar from "common/components/UI/Avatar";
import Tabs from "common/components/UI/tabs/Tabs";
import { IMAGE_URL } from "common/values/CORE";

import s from "./ProfileHeader.module.scss";

const ProfileHeader = ({ tabsProps, actionButton, data }) => {
	return (
		<div className="_profile-background">
			<div className={s.container}>
				<header className={s.card}>
					<div className={s.infoContainer}>
						<Avatar
							size={{ mobile: 60, desktop: 156 }}
							src={IMAGE_URL + encodeURI(data.avatar)}
							className={s.avatar}
						/>

						<div className="d-flex flex-column ">
							<div className={s.username}>{data.username}</div>
							<div className={s.level}>Level {data.level}</div>
						</div>
					</div>

					{actionButton}
				</header>

				<Tabs tabs={tabsProps.tabs} value={tabsProps.value} onChange={tabsProps.onChange} variant="indicator" />
			</div>
		</div>
	);
};

export default ProfileHeader;
