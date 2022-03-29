import React from "react";
import Text from "common/components/UI/text/Text";
import s from "common/components/UI/button/Button.module.scss";

const OutlinedButton = ({ ns, startIcon, endIcon, as: Component = "div", className, variant = "primary", ...rest }) => {
	const buttonStyle =
		variant === "primary" ? s.outlinedPrimary : variant === "secondary" ? s.outlinedSecondary : s.outlinedGray;

	return (
		<Component {...rest} className={`${buttonStyle} ${className}`}>
			{startIcon && <div className={startIcon} />}

			<Text ns={ns} />

			{endIcon && <div className={endIcon} />}
		</Component>
	);
};

export default OutlinedButton;
