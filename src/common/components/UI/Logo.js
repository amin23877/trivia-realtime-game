import React from "react";

import logo from "assets/images/logo/logo.svg";
import desktopLogo from "assets/images/logo/logo-white.svg";

import "./Logo.scss";

/*
 * This component render app logo with responsive size
 * */
const Logo = ({ className = "", color = "primary" }) => {
	return (
		<div className={`quizup-logo ${className}`}>
			<img width="100%" height="100%" alt="logo" src={color === "primary" ? logo : desktopLogo} />
		</div>
	);
};

export default Logo;
