import React from "react";

import s from "./List.module.scss";
import CardUser from "common/components/cardUser/CardUser";

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
	return (
		<div className={`${s.listItemContainer} ${className}`}>
			<div className={s.listItemInfo}>
				{index && <span className={s.index}>{index}.</span>}

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
