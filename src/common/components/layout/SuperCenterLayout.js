import React from "react";
import { Outlet } from "react-router-dom";

const SuperCenterLayout = () => {
	return (
		<div className="p-4 d-flex align-items-center justify-content-center w-100 h-100 overflow-auto _bg-login">
			<Outlet />
		</div>
	);
};

export default SuperCenterLayout;
