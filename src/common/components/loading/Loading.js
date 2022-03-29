import React from "react";

import s from "./Loading.module.scss";
import { CircularProgress } from "@material-ui/core";
import PropTypes from "prop-types";

const Loading = ({ variant, backdrop = s.defaultBackdrop }) => {
	return (
		<div
			className={`
			${s.container} 
			${backdrop} 
			${variant === "full-page" ? s.fullPage : ""}`}
		>
			<CircularProgress />
		</div>
	);
};

Loading.propTypes = {
	variant: PropTypes.oneOf(["full-page", "normal"]),
	backdrop: PropTypes.string,
};

export default Loading;
