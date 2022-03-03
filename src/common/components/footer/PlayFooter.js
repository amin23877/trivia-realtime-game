import React from "react";
import FilledButton from "common/components/UI/button/FilledButton";

import s from "./Footer.module.scss";

const PlayFooter = () => {
	return (
		<div className={s.playFooter}>
			<FilledButton variant="secondary" className={s.playFooterBtn}>
				Play
				<div className={s.playIconFilled} />
			</FilledButton>
		</div>
	);
};

export default PlayFooter;
