import React from "react";
import HeaderGoBack from "common/components/headerGoBack/HeaderGoBack";

import s from "./Invite.module.scss";
import image from "assets/images/pics/invite-image.svg";

const Invite = () => {
	return (
		<>
			<HeaderGoBack title="Invite friends" />

			<div className={s.container}>
				<p className={s.title}>Share With Friends</p>

				<p className={s.subtitle}>Invite your friends to join us</p>

				<img alt="invite friends" src={image} className={s.image} />

				<div className={s.button}>
					Copy Link <div className={s.linkIcon} />
				</div>
			</div>
		</>
	);
};

export default Invite;