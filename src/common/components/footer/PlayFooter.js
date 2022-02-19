import React from "react";
import PlayButton from "common/components/UI/PlayButton";

import s from "./Footer.module.scss";

const PlayFooter = () => {
	return (
		<div className={s.playFooter}>
			<PlayButton>Play</PlayButton>
		</div>
	);
};

export default PlayFooter;
