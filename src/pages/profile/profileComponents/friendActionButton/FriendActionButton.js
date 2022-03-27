import { useEffect } from "react";
import { useRequest } from "common/hooks/useRequest";
import { useFriendRequestHandlers } from "common/hooks/useFriendRequestHandlers";
import OutlinedButton from "common/components/UI/button/OutlinedButton";
import FilledButton from "common/components/UI/button/FilledButton";

// redux
import { ACCEPT_REQUEST_NOTIF, DELETE_NOTIF } from "redux/actions/notifActions/notifActions";
import { useDispatch, useSelector } from "react-redux";
import { friendStatusTypes } from "redux/actions/friendStatusActions/actionsType";
import { INIT_STATUS, SET_STATUS } from "redux/actions/friendStatusActions/friendStatusActions";

import s from "./FriendActionButton.module.scss";

// this component handle variants of friend status
const FriendActionButton = ({ initialStatus, id }) => {
	const dispatch = useDispatch();

	const status = useSelector((state) => state.stateFriendStatus);

	const { accept, reject, acceptStatus, rejectStatus } = useFriendRequestHandlers(id);

	const { fetcher: makeRequest, status: makeRequestStatus } = useRequest(`user/${id}/request`, { method: "post" });

	const { fetcher: removeRequest, status: removeRequestStatus } = useRequest(`user/${id}/request`, {
		method: "DELETE",
	});

	const { fetcher: removeFriend, status: removeFriendStatus } = useRequest(`user/${id}/friend`, {
		method: "DELETE",
	});

	const handleMakeRequest = () => makeRequest();
	const handleRemoveRequest = () => removeRequest();
	const handleRemoveFriend = () => removeFriend();

	useEffect(() => {
		if (makeRequestStatus === "success") dispatch(SET_STATUS(friendStatusTypes.IS_REQUESTED));
	}, [dispatch, makeRequestStatus]);

	useEffect(() => {
		if (removeFriendStatus === "success") dispatch(SET_STATUS(friendStatusTypes.IS_NOT_FRIEND));
	}, [dispatch, removeFriendStatus]);

	useEffect(() => {
		if (removeRequestStatus === "success") dispatch(SET_STATUS(friendStatusTypes.IS_NOT_FRIEND));
	}, [dispatch, removeRequestStatus]);

	useEffect(() => {
		if (acceptStatus === "success") {
			dispatch(SET_STATUS(friendStatusTypes.IS_FRIEND));
			dispatch(ACCEPT_REQUEST_NOTIF(id));
		}
	}, [acceptStatus, dispatch, id]);

	useEffect(() => {
		if (rejectStatus === "success") {
			dispatch(SET_STATUS(friendStatusTypes.IS_NOT_FRIEND));
			dispatch(DELETE_NOTIF(id));
		}
	}, [dispatch, id, rejectStatus]);

	/* reset state when id changes */
	useEffect(() => {
		dispatch(INIT_STATUS(initialStatus));
	}, [dispatch, id, initialStatus]);

	if (status === 1)
		return (
			<OutlinedButton ns="remove" variant="gray" onClick={handleRemoveFriend} className={s.friendActionButton} />
		);

	if (status === 0)
		return (
			<FilledButton
				ns="friends.add"
				variant="secondary"
				onClick={handleMakeRequest}
				className={s.friendActionButton}
			/>
		);

	if (status === 2)
		return (
			<OutlinedButton
				ns="friends.requested"
				variant="secondary"
				onClick={handleRemoveRequest}
				className={s.friendActionButton}
			/>
		);

	if (status === 3)
		return (
			<div className="d-flex gap-2">
				<FilledButton
					ns="friends.accept"
					variant="secondary"
					onClick={accept}
					className={s.friendActionButton}
				/>

				<OutlinedButton ns="friends.reject" variant="gray" onClick={reject} className={s.friendActionButton} />
			</div>
		);

	return null;
};

export default FriendActionButton;
