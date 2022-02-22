import React from "react";

import s from "./Empties.module.scss";
import imgEmptyList from "assets/images/pics/empty-list.png";

const EmptyList = () => {
	return (
		<div className={s.normal}>
			<img src={imgEmptyList} alt="" />
		</div>
	);
};
export default EmptyList;
