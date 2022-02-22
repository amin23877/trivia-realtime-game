import React from "react";
import profileCover from "assets/images/test/profile-header.jpg";
import Avatar from "common/components/UI/Avatar";
import { IMAGE_URL } from "common/values/CORE";

import s from "./ProfileHeader.module.scss";

const ProfileHeaderCard = ({ data, children }) => {
	return (
		<header className={s.card}>
			<img src={profileCover} alt="cover" className={s.profileCover} />

			<div className={s.infoContainer}>
				<Avatar
					size={{ mobile: 54, desktop: 100 }}
					src={IMAGE_URL + encodeURI(data.avatar)}
					className={s.avatar}
				/>

				<div className="d-flex justify-content-between align-items-center flex-grow-1">
					<div className="d-flex flex-column ">
						<div className={s.username}>{data.username}</div>
						<div className={s.level}>Level {data.level}</div>
					</div>

					{children}
				</div>
			</div>
		</header>
	);
};

export default ProfileHeaderCard;
