import React from "react";
import "./Spinner.scss";
import CircularProgress from "@material-ui/core/CircularProgress";

const Spinner = () => {
	return (
		<div className="d-flex justify-content-center align-items-center spinner">
			<div className="empty"></div>
			<div>
				<CircularProgress />
			</div>
		</div>
	);
};

export default Spinner;
