import React from "react";
import { Outlet } from "react-router-dom";

const SuperCenterLayout = () => {
	return (
		<div className="d-flex align-items-center justify-content-center w-100 h-100">
			<Outlet />
		</div>
	);
};

export default SuperCenterLayout;
