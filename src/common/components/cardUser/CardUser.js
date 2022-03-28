import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Avatar from "common/components/UI/Avatar";
import { IMAGE_URL } from "common/values/CORE";

import s from "./CardUser.module.scss";

const CardUser = ({ id, avatar, info, avatarSize = { mobile: 22, desktop: 46 }, username, classes = {} }) => {
	const userId = useSelector((state) => state.stateUser.userInfo._id);

	return (
		<Link className={classes.container ?? s.container} to={`/profile/${id !== userId ? id : ""}`}>
			<Avatar src={IMAGE_URL + encodeURI(avatar)} size={avatarSize} />

			<div className={classes.content ?? s.content}>
				<p className={classes.username ?? ""}>{username}</p>
				<div className={classes.info ?? s.info}>{info}</div>
			</div>
		</Link>
	);
};

CardUser.propTypes = {
	id: PropTypes.string.isRequired,
	avatar: PropTypes.string,
	info: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	username: PropTypes.string,
	avatarSize: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
	classes: PropTypes.object,
};

export default CardUser;
