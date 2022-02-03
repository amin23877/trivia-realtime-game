// Reacts
import React from "react";
// Hooks
import { useNavigate } from "react-router-dom";
// Packages
// Components, Services, Functions
// Redux
// Material - lab
// Styles, Icons, Images
import "./HeaderGoBack.scss";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const HeaderGoBack = ({ title }) => {
	const navigate = useNavigate();

	const handleGoBack = () => {
		navigate(-1);
	};

	return (
		<div className="headerGoBack">
			<div className="d-flex align-items-center _header _header-shadow padding">
				<ArrowBackIcon className="color-primary" onClick={handleGoBack} />
				<div className="_header-title color-primary mx-2">{title}</div>
			</div>
		</div>
	);
};
export default HeaderGoBack;
