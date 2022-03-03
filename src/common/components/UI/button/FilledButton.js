import React from "react";

import s from "./Button.module.scss";

const FilledButton = ({ children, className, variant = "primary", ...rest }) => {
	const buttonStyle = variant === "primary" ? s.filledPrimary : s.filledSecondary;

	return (
		<div {...rest} className={`${buttonStyle} ${className}`}>
			{children}
		</div>
	);
};

export default FilledButton;
