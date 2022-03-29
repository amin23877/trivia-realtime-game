// Reacts
import React from "react";
import Text from "common/components/UI/text/Text";

// Hooks
import { useNavigate } from "react-router-dom";

// Styles, Icons, Images
import "./HeaderGoBack.scss";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const HeaderGoBack = ({ title, renderOtherSide }) => {
	const navigate = useNavigate();

	const handleGoBack = () => {
		navigate(-1);
	};

	return (
		<div className="headerGoBack d-xl-none">
			<div className="h-100 d-flex align-items-center justify-content-between _header _header-shadow padding">
				<div className="d-flex align-items-center">
					<ArrowBackIcon className="color-primary" onClick={handleGoBack} />
					<Text ns={title} className="_header-title color-primary mx-2" />
				</div>

				<div>{typeof renderOtherSide === "function" && renderOtherSide()}</div>
			</div>
		</div>
	);
};
export default HeaderGoBack;
