import React from "react";

import logo from "assets/images/logo/logo.svg";

import "./Logo.scss";

/*
 * This component render app logo with responsive size
 * */
const Logo = ({ className = "" }) => {
	return (
		<div className={`quizup-logo ${className}`}>
			<img width="100%" height="100%" alt="logo" src={logo} />
		</div>
	);
};

export default Logo;
