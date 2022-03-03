import React from "react";
import s from "common/components/UI/button/Button.module.scss";

const OutlinedButton = ({ children, className, variant = "primary", ...rest }) => {
	const buttonStyle =
		variant === "primary" ? s.outlinedPrimary : variant === "secondary" ? s.outlinedSecondary : s.outlinedGray;

	return (
		<div {...rest} className={`${buttonStyle} ${className}`}>
			{children}
		</div>
	);
};

export default OutlinedButton;
