import React from "react";

import "./Empties.scss";
import imgEmptyList from "assets/images/pics/empty-list.png";

const EmptyList = () => {
	return (
		<div className="w-100 h-100 d-flex justify-content-center align-items-center">
			<img className="_empty-list" src={imgEmptyList} alt="" />
		</div>
	);
};
export default EmptyList;
