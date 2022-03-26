import React from "react";

import s from "./Button.module.scss";

const FilledButton = ({ children, as: Component = "div", className, variant = "primary", ...rest }) => {
	const buttonStyle = variant === "primary" ? s.filledPrimary : s.filledSecondary;

	return (
		<Component {...rest} className={`${buttonStyle} ${className}`}>
			{children}
		</Component>
	);
};

export default FilledButton;
