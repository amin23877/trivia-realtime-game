import React, { useEffect, useState } from "react";
import EmptyList from "common/components/empties/EmptyList";
import { useRequest } from "common/hooks/useRequest";

import "./NotificationWidget.scss";

// images
import CardUser from "common/components/cardUser/CardUser";

function UserNotif({ name, image, id }) {
	const [accepted, setAccepted] = useState(false);

	const { fetcher: acceptRequest, success: acceptSuccess } = useRequest(`user/${id}/accept`, { method: "post" });
	const { fetcher: rejectRequest } = useRequest(`user/${id}/reject`, { method: "DELETE" });

	const accept = () => acceptRequest();
	const reject = () => rejectRequest();

	useEffect(() => {
		setAccepted(acceptSuccess);
	}, [acceptSuccess]);

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
					<span onClick={accept} className="notif-widget-item__accept">
						Accept
					</span>
					<span onClick={reject} className="notif-widget-item__reject">
						Reject
					</span>
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
	const { response, success } = useRequest("user/me/requests");

	return success ? (
		<ul className="notif-widget">
			{response.map((notif, index) => (
				<UserNotif name={notif.username} image={notif.avatar} id={notif._id} key={index} />
			))}
		</ul>
	) : (
		<EmptyList />
	);
};

export default NotificationWidget;
