import React from "react";
import Avatar from "common/components/UI/Avatar";
import { IMAGE_URL } from "common/values/CORE";

import s from "./List.module.scss";
import { Link } from "react-router-dom";

export const List = ({ children, className }) => {
	return <div className={`${s.list} ${className}`}>{children}</div>;
};

export const ListHeader = ({ children }) => {
	return <div className={s.listHeader}>{children}</div>;
};

export const ListFooter = ({ children, ...rest }) => {
	return (
		<div {...rest} className={s.listFooter}>
			{children}
		</div>
	);
};

export const ListItem = ({
	children,
	className,
	index,
	avatar,
	username = "",
	info,
	link = false,
	avatarSize = { mobile: 22, desktop: 46 },
}) => {
	return (
		<div className={`${s.listItemContainer} ${className}`}>
			<Link to={link} className={s.listItemInfo}>
				{index && <span className={s.index}>{index}.</span>}

				<Avatar src={IMAGE_URL + encodeURI(avatar)} size={avatarSize} />

				<div className="d-flex flex-column align-items-center ms-3">
					<p>{username}</p>
					<p>{info}</p>
				</div>
			</Link>

			{/*
			 *	Children will be to the right of the list item
			 *  for example points, reward ,action buttons and...
			 */}
			{children}
		</div>
	);
};
