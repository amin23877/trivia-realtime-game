import React from "react";

import s from "./ProfilePerformance.module.scss";

const PerformanceList = ({ data, title, children }) => {
	if (!data) return null;

	return (
		<>
			<p className={s.title}>{title}</p>

			<div className={s.list}>
				{children(data)}

				{data.length >= 5 && <div className={s.listFooter}>See more</div>}
			</div>
		</>
	);
};

export default PerformanceList;
