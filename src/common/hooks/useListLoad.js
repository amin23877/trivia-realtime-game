import { useRequest } from "common/hooks/useRequest";
import { useEffect, useState } from "react";

/*
 *  this hook load data leaderboard and handle list pagination
 * */
export const useListLoad = (baseEndpoint, sizeCount, dataFieldName = "result") => {
	const [pageSize, setPageSize] = useState(sizeCount);

	const [endOfList, setEndOfList] = useState(false);

	const { response, ...requestStates } = useRequest(`${baseEndpoint}?pageSize=${pageSize}&page=1`);

	const fetchMore = () => setPageSize((p) => p + sizeCount);

	useEffect(() => {
		if (response && typeof response.total === "number" && response.total === response[dataFieldName].length) {
			setEndOfList(true);
		}
	}, [dataFieldName, response]);

	return {
		data: response ? response[dataFieldName] : null,
		endOfList,
		fetchMore,
		...requestStates,
	};
};
