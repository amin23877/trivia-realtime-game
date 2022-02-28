import React from "react";

import s from "./ProfilePerformance.module.scss";

const PerformanceList = ({ data, children }) => {
	if (!data) return null;

	return (
		<div className={s.list}>
			{children(data)}

			{data.length >= 5 && <div className={s.listFooter}>See more</div>}
		</div>
	);
};

export default PerformanceList;
