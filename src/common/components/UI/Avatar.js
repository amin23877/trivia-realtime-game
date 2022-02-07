import React, { useEffect, useState } from "react";
import { useMediaQuery } from "@material-ui/core";

import "./Avatar.scss";

const Avatar = ({ src, size, className, ...rest }) => {
	const [style, setStyle] = useState({});

	const isDesktop = useMediaQuery("(min-width : 1366px");

	useEffect(() => {
		const generateStyle = (value) => ({
			width: value + "px",
			height: value + "px",
		});

		if (typeof size === "object") {
			let { mobile, desktop } = size;
			setStyle(generateStyle(isDesktop ? desktop : mobile));
		} else {
			setStyle(generateStyle(size));
		}
	}, [isDesktop, size]);

	return (
		<div style={style} className={`avatar ${className ?? ""}`} {...rest}>
			<img width="100%" height="100%" src={src} alt="user" />
		</div>
	);
};

export default Avatar;
