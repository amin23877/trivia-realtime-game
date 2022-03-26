import React from "react";
import HeaderGoBack from "common/components/headerGoBack/HeaderGoBack";

import s from "./Invite.module.scss";
import image from "assets/images/pics/invite-image.svg";
import FilledButton from "common/components/UI/button/FilledButton";
import Text from "common/components/UI/text/Text";

const Invite = () => {
	return (
		<>
			<HeaderGoBack title="Invite friends" />

			<div className={s.container}>
				<Text className={s.title} ns="invite.share" />

				<Text className={s.subtitle} ns="invite.invite" />

				<img alt="invite friends" src={image} className={s.image} />

				<FilledButton ns="btn.copy-link" endIcon={s.linkIcon} variant="secondary" className={s.button} />
			</div>
		</>
	);
};

export default Invite;
