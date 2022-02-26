import { useDebounce } from "common/hooks/useDebounce";
import { useEffect, useState } from "react";
import { useRequest } from "common/hooks/useRequest";

/*
 * 	this hook get search query (input value) and return search result with debounce
 * */
export const useSearch = (query) => {
	const debouncedQuery = useDebounce(query, 1000);

	const [totalResult, setTotalResult] = useState(null);

	// search on users and topics
	const { response: topics, success: fetchTopicsSuccess } = useRequest(`/topic?containname=${debouncedQuery}`);
	const { response: users, success: fetchUsersSuccess } = useRequest(`/user?containusername=${debouncedQuery}`);

	useEffect(() => {
		if (fetchUsersSuccess && fetchTopicsSuccess) {
			setTotalResult([...topics.result, ...users.result]);
		}
	}, [fetchTopicsSuccess, fetchUsersSuccess, topics, users]);

	return totalResult;
};
