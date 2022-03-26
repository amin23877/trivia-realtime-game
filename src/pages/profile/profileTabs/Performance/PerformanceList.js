import React from "react";
import { useListLoad } from "common/hooks/useListLoad";

import s from "./ProfilePerformance.module.scss";
import Text from "common/components/UI/text/Text";

const PAGE_SIZE = 5;

const PerformanceList = ({ apiEndpoint, titleNs, children, dataFieldName }) => {
	const { data, status, endOfList, fetchMore } = useListLoad(apiEndpoint, PAGE_SIZE, dataFieldName);

	if (status !== "success") return null;

	// show nothing if response is not valid
	if (!Array.isArray(data)) return null;

	return (
		<>
			<Text className={s.title} ns={titleNs} />

			<div className={s.list}>
				{children(data)}

				{!endOfList && (
					<div onClick={fetchMore} className={s.listFooter}>
						<Text ns="see-more" />
					</div>
				)}
			</div>
		</>
	);
};

export default PerformanceList;
