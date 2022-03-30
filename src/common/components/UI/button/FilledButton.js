import React from "react";

import s from "./Button.module.scss";
import Text from "common/components/UI/text/Text";
import Popover from "common/components/UI/popover/Popover";

const FilledButton = ({
	ns,
	startIcon,
	endIcon,
	as: Component = "div",
	className,
	variant = "primary",
	popoverProps,
	...rest
}) => {
	const buttonStyle = variant === "primary" ? s.filledPrimary : s.filledSecondary;

	return (
		<Component {...rest} className={`${buttonStyle} ${className}`}>
			{startIcon && <div className={startIcon} />}

			<Text ns={ns} />

			{endIcon && <div className={endIcon} />}

			{popoverProps && <Popover {...popoverProps} />}
		</Component>
	);
};

export default FilledButton;
