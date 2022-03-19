import React, { useEffect } from "react";
import EmptyList from "common/components/empties/EmptyList";
import CardUser from "common/components/cardUser/CardUser";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import { useFriendRequestHandlers } from "common/hooks/useFriendRequestHandlers";

// redux
import { ACCEPT_REQUEST_NOTIF, DELETE_NOTIF } from "redux/actions/notifActions/notifActions";
import { SET_STATUS } from "redux/actions/friendStatusActions/friendStatusActions";
import { friendStatusTypes } from "redux/actions/friendStatusActions/actionsType";

import "./NotificationWidget.scss";

function UserNotif({ name, image, id, accepted, loading }) {
	const dispatch = useDispatch();

	const { accept, reject, acceptStatus, rejectStatus } = useFriendRequestHandlers(id);

	/* update notifications state based on request response */
	useEffect(() => {
		if (acceptStatus === "success") {
			dispatch(ACCEPT_REQUEST_NOTIF(id));
			dispatch(SET_STATUS(friendStatusTypes.IS_FRIEND));
		}
	}, [acceptStatus, dispatch, id]);

	useEffect(() => {
		if (rejectStatus === "success") {
			dispatch(DELETE_NOTIF(id));
			dispatch(SET_STATUS(friendStatusTypes.IS_NOT_FRIEND));
		}
	}, [dispatch, id, rejectStatus]);

	return (
		<div className="notif-widget-item">
			<CardUser
				id={id}
				avatar={image}
				avatarSize={{ mobile: 34, desktop: 44 }}
				username={name}
				info={!accepted && "Wants to be your friend"}
			/>

			{!accepted ? (
				<div className="notif-widget-item__controls">
					{loading ? (
						<CircularProgress size={25} />
					) : (
						<>
							<span onClick={accept} className="notif-widget-item__accept">
								Accept
							</span>
							<span onClick={reject} className="notif-widget-item__reject">
								Reject
							</span>
						</>
					)}
				</div>
			) : (
				<p className="notif-widget-item__accepted">is your friend Now!</p>
			)}
		</div>
	);
}

function LeagueNotif({ name, image }) {
	return (
		<div className="notif-widget-item">
			<img
				className="notif-widget-item__avatar notif-widget-item__avatar_square"
				alt="notif-img"
				width={34}
				height={32}
				src={image}
			/>
			<div className="notif-widget-item__info-wrapper">
				<p className="notif-widget-item__desc">{name}</p>
			</div>

			<p className="notif-widget-item__see-details">See details</p>
		</div>
	);
}

/*
 * 	this component get notifications from server and render notifications list
 * */
const NotificationWidget = () => {
	const { status, notifications } = useSelector((state) => state.stateNotif);

	if (status === "error") return null;

	if (notifications.length === 0)
		return (
			<div>
				<EmptyList />
			</div>
		);

	return (
		<ul className="notif-widget">
			{notifications.map((notif) => (
				<UserNotif
					loading={notif.loading}
					accepted={notif.accepted}
					name={notif.username}
					image={notif.avatar}
					id={notif._id}
					key={notif._id}
				/>
			))}
		</ul>
	);
};

export default NotificationWidget;
