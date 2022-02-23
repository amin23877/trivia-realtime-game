import React from "react";
import EmptyList from "common/components/empties/EmptyList";
import Avatar from "@material-ui/core/Avatar";
import { useRequest } from "common/hooks/useRequest";

import "./NotificationWidget.scss";

// images
import { IMAGE_URL } from "common/values/CORE";
import { Link } from "react-router-dom";

function UserNotif({ name, image, accepted, id }) {
	const {
		fetcher: acceptRequest,
		response,
		success: acceptSuccess,
	} = useRequest(`user/${id}/accept`, { method: "post" });

	const { fetcher: rejectRequest } = useRequest(`user/${id}/reject`, { method: "post" });

	const accept = () => {
		acceptRequest();
		console.log(response);
	};

	const reject = () => {
		rejectRequest();
	};

	return (
		<Link to={"/profile/" + id} className="notif-widget-item">
			<Avatar src={IMAGE_URL + encodeURI(image)} size={{ mobile: 34, desktop: 44 }} />

			<div className="notif-widget-item__info-wrapper">
				<p>{name}</p>
				<p className="notif-widget-item__desc">{!accepted && "Wants to be your friend"}</p>
			</div>

			{!acceptSuccess ? (
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
		</Link>
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
				<UserNotif
					name={notif.users[1].username}
					image={notif.users[1].avatar}
					accepted={notif.accepted}
					id={notif.users[1]._id}
					key={index}
				/>
			))}
		</ul>
	) : (
		<EmptyList />
	);
};

export default NotificationWidget;
