import React from "react";

import s from "./Button.module.scss";
import Text from "common/components/UI/text/Text";

const FilledButton = ({ ns, startIcon, endIcon, as: Component = "div", className, variant = "primary", ...rest }) => {
	const buttonStyle = variant === "primary" ? s.filledPrimary : s.filledSecondary;

	return (
		<Component {...rest} className={`${buttonStyle} ${className}`}>
			{startIcon && <div className={startIcon} />}

			<Text ns={ns} />

			{endIcon && <div className={endIcon} />}
		</Component>
	);
};

export default FilledButton;
