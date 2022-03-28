import React from "react";
import FilledButton from "common/components/UI/button/FilledButton";

import s from "./Footer.module.scss";

const PlayFooter = () => {
	return (
		<div className={s.playFooter}>
			<FilledButton ns="play" endIcon={s.playIconFilled} variant="secondary" className={s.playFooterBtn} />
		</div>
	);
};

export default PlayFooter;
