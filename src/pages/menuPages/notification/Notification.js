import React from "react";
import HeaderGoBack from "common/components/headerGoBack/HeaderGoBack";
import { Navigate } from "react-router-dom";
import { useMediaQuery } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { TOGGLE_NOTIF_DRAWER } from "redux/actions/mainActions/generalActions";
import NotificationWidget from "common/components/notificationWidget/NotificationWidget";
import { DESKTOP_BREAKPOINT } from "common/values/CORE";

import "./Notification.scss";

const Notification = () => {
	const isDesktop = useMediaQuery(`(min-width : ${DESKTOP_BREAKPOINT})`);
	const dispatch = useDispatch();

	if (isDesktop) {
		/*
		 *	Because there is no page called notifications on the desktop,
		 *  so if someone navigates to the address /menu/notification on the desktop,
		 *  they will be redirected to the main page and the notification drawer will open for them.
		 * */
		dispatch(TOGGLE_NOTIF_DRAWER());
		return <Navigate to="/" />;
	}

	return (
		<div className="notif-root">
			<HeaderGoBack title="notifs" />

			<NotificationWidget />
		</div>
	);
};

export default Notification;
