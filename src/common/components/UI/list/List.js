import React from "react";
import Avatar from "common/components/UI/Avatar";
import { IMAGE_URL } from "common/values/CORE";

import s from "./List.module.scss";

export const List = ({ children, className }) => {
	return <div className={`${s.list} ${className}`}>{children}</div>;
};

export const ListHeader = ({ children }) => {
	return <div className={s.listHeader}>{children}</div>;
};

export const ListFooter = ({ children }) => {
	return <div className={s.listFooter}>{children}</div>;
};

export const ListItem = ({ children, index, avatar, username = "", info }) => {
	return (
		<div className={s.listItemContainer}>
			<div className={s.listItemInfo}>
				<span className={s.index}>{index}.</span>

				<Avatar src={IMAGE_URL + encodeURI(avatar)} size={{ mobile: 22, desktop: 46 }} />

				<div className="d-flex flex-column align-items-center ms-3">
					<p>{username}</p>
					<p>{info}</p>
				</div>
			</div>

			{/*
			 *	Children will be to the right of the list item
			 *  for example points, reward ,action buttons and...
			 */}
			{children}
		</div>
	);
};
