import React from "react";
import { useListLoad } from "common/hooks/useListLoad";

import s from "./ProfilePerformance.module.scss";

const PAGE_SIZE = 5;

const PerformanceList = ({ apiEndpoint, title, children }) => {
	const { response, status, endOfList, fetchMore } = useListLoad(apiEndpoint, PAGE_SIZE);

	if (status !== "success") return null;

	return (
		<>
			<p className={s.title}>{title}</p>

			<div className={s.list}>
				{children(response)}

				{response.length >= PAGE_SIZE && !endOfList && (
					<div onClick={fetchMore} className={s.listFooter}>
						See more
					</div>
				)}
			</div>
		</>
	);
};

export default PerformanceList;
