import React from "react";
import { Navigate } from "react-router-dom";
import { useMediaQuery } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { TOGGLE_NOTIF_DRAWER } from "redux/actions/mainActions/generalActions";
import NotificationWidget from "common/components/NotificationWidget/NotificationWidget";

import "./Notification.scss";

//images
import backIcon from "assets/images/icons/arrow-back.svg";

const DESKTOP_BREAKPOINT = "1366px";

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
			<div className="notif-header">
				<span>
					<img alt="back" width={14} height={10} src={backIcon} />
				</span>
				<p>Notification</p>
			</div>

			<NotificationWidget />
		</div>
	);
};

export default Notification;
