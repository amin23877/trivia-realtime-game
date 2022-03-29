import { useRequest } from "common/hooks/useRequest";

export const useFriendRequestHandlers = (id) => {
	const { fetcher: accept, status: acceptStatus } = useRequest(`user/${id}/accept`, { method: "post" });
	const { fetcher: reject, status: rejectStatus } = useRequest(`user/${id}/reject`, { method: "DELETE" });

	return { accept, reject, acceptStatus, rejectStatus };
};
