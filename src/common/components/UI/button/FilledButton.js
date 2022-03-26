import React from "react";

import s from "./Button.module.scss";
import Text from "common/components/UI/text/Text";

const FilledButton = ({ ns, as: Component = "div", className, variant = "primary", ...rest }) => {
	const buttonStyle = variant === "primary" ? s.filledPrimary : s.filledSecondary;

	return (
		<Component {...rest} className={`${buttonStyle} ${className}`}>
			<Text ns={ns} />
		</Component>
	);
};

export default FilledButton;
