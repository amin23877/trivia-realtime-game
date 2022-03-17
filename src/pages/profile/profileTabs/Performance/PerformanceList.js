import React from "react";
import { useListLoad } from "common/hooks/useListLoad";

import s from "./ProfilePerformance.module.scss";

const PAGE_SIZE = 5;

const PerformanceList = ({ apiEndpoint, title, children, dataFieldName }) => {
	const { data, status, endOfList, fetchMore } = useListLoad(apiEndpoint, PAGE_SIZE, dataFieldName);

	if (status !== "success") return null;

	// show nothing if response is not valid
	if (!Array.isArray(data)) return null;

	return (
		<>
			<p className={s.title}>{title}</p>

			<div className={s.list}>
				{children(data)}

				{!endOfList && (
					<div onClick={fetchMore} className={s.listFooter}>
						See more
					</div>
				)}
			</div>
		</>
	);
};

export default PerformanceList;
