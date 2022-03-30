import React from "react";
import HeaderGoBack from "common/components/headerGoBack/HeaderGoBack";
import Text from "common/components/UI/text/Text";
import InviteButton from "pages/invite/InviteButton";

import s from "./Invite.module.scss";
import image from "assets/images/pics/invite-image.svg";

const Invite = () => {
	return (
		<>
			<HeaderGoBack title="menu.invite-friends" />

			<div className={s.container}>
				<Text className={s.title} ns="share-with-friends" />

				<Text className={s.subtitle} ns="share-with-friends-subtitle" />

				<img alt="invite friends" src={image} className={s.image} />

				<InviteButton />
			</div>
		</>
	);
};

export default Invite;
