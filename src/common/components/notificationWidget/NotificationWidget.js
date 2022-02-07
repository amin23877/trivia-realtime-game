import React from "react";
import EmptyList from "common/components/empties/EmptyList";

import "./NotificationWidget.scss";

// images
import userImg from "assets/images/test/profile-pic-2.jpg";
import notifBanner from "assets/images/test/notification-banner.jpg";

/*
 *   fake data
 * */
const notifications = [
	{ type: "user", image: userImg, name: "tanaz-MRD", accepted: false },
	{ type: "user", image: userImg, name: "tanaz-MRD", accepted: true },
	{ type: "league", image: notifBanner, name: "Chemistry League started on your favorite topic" },
];

function UserNotif({ name, image, accepted }) {
	return (
		<div className="notif-widget-item">
			<img className="notif-widget-item__avatar" alt="notif-img" src={image} />
			<div className="notif-widget-item__info-wrapper">
				<p>{name}</p>
				<p className="notif-widget-item__desc">{!accepted && "Wants to be your friend"}</p>
			</div>
			{!accepted ? (
				<div className="notif-widget-item__controls">
					<span className="notif-widget-item__accept">Accept</span>
					<span className="notif-widget-item__reject">Reject</span>
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
	return notifications ? (
		<ul className="notif-widget">
			{notifications.map((notif, index) =>
				notif.type === "user" ? (
					<UserNotif name={notif.name} image={notif.image} accepted={notif.accepted} key={index} />
				) : (
					<LeagueNotif key={index} name={notif.name} image={notif.image} />
				)
			)}
		</ul>
	) : (
		<EmptyList />
	);
};

export default NotificationWidget;
