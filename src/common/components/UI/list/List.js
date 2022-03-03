import React from "react";

import s from "./List.module.scss";
import CardUser from "common/components/cardUser/CardUser";
import { useSelector } from "react-redux";

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

export const ListItem = ({ children, className, userId, index, avatar, username = "", info }) => {
	const id = useSelector((state) => state.stateUser.userInfo._id);

	return (
		<div className={`${s.listItemContainer} ${className} ${id === userId ? s.currentUser : ""}`}>
			<div className={s.listItemInfo}>
				{index && <span className={`${s.index} ${id === userId ? s.currentUserIndex : ""}`}>{index}.</span>}

				<CardUser id={userId} username={username} info={info} avatar={avatar} />
			</div>

			{/*
			 *	Children will be to the right of the list item
			 *  for example points, reward ,action buttons and...
			 */}
			{children}
		</div>
	);
};
