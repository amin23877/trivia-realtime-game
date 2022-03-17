import { useRequest } from "common/hooks/useRequest";
import { useEffect, useState } from "react";

/*
 *  this hook load data leaderboard and handle list pagination
 * */
export const useListLoad = (baseEndpoint, sizeCount) => {
	const [pageSize, setPageSize] = useState(sizeCount);

	const [endOfList, setEndOfList] = useState(false);

	const { response, ...requestStates } = useRequest(`${baseEndpoint}?pageSize=${pageSize}&page=1`);

	const fetchMore = () => setPageSize((p) => p + sizeCount);

	useEffect(() => {
		if (response && response.total && response.total === response.result.length) setEndOfList(true);
	}, [response]);

	return { response, endOfList, fetchMore, ...requestStates };
};
